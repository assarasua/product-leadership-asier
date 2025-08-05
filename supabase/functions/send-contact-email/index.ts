import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client for rate limiting
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Enhanced security headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Cache-Control": "no-store, no-cache, must-revalidate"
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 300000; // 5 minutes
const MAX_REQUESTS_PER_IP = 3;

// Enhanced input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/eval\s*\(/gi, '') // Remove eval calls
    .replace(/document\./gi, '') // Remove document references
    .replace(/window\./gi, '') // Remove window references
    .replace(/\x00/g, '') // Remove null bytes
    .trim();
}

// Detect suspicious patterns that may indicate malicious intent
function detectSuspiciousContent(input: string): boolean {
  const suspiciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /eval\s*\(/gi,
    /document\.|window\./gi,
    /\bon\w+\s*=/gi,
    /javascript:|vbscript:|data:/gi,
    /(union|select|insert|delete|update|drop|create|alter|exec|execute)\s+/gi
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
}

// Server-side rate limiting
async function checkRateLimit(clientIP: string): Promise<boolean> {
  try {
    const now = new Date().toISOString();
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW).toISOString();
    
    // Count recent submissions from this IP
    const { data, error } = await supabase
      .from('bizkardo_contacts')
      .select('id')
      .gte('created_at', windowStart)
      .lte('created_at', now);
    
    if (error) {
      console.error('Rate limit check error:', error);
      return true; // Allow on error to avoid blocking legitimate users
    }
    
    return data.length < MAX_REQUESTS_PER_IP;
  } catch (error) {
    console.error('Rate limit function error:', error);
    return true; // Allow on error
  }
}

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
  userAgent?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    const { name, email, message, honeypot, timestamp, userAgent }: ContactEmailRequest = await req.json();

    // Honeypot check (anti-bot measure)
    if (honeypot && honeypot.length > 0) {
      console.warn(`Bot submission detected from IP: ${clientIP} - Honeypot filled: "${honeypot}"`);
      return new Response(
        JSON.stringify({ error: "Invalid submission" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Input validation
    if (!name || !email || !message) {
      console.warn(`Invalid submission attempt from IP: ${clientIP} - Missing fields`);
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedMessage = sanitizeInput(message);

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      console.warn(`Invalid email format from IP: ${clientIP} - Email: ${sanitizedEmail}`);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Enhanced content validation
    if (detectSuspiciousContent(sanitizedName) || detectSuspiciousContent(sanitizedMessage)) {
      console.warn(`Suspicious content detected from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Content contains invalid patterns" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Message length validation (prevent abuse)
    if (sanitizedMessage.length > 5000) {
      console.warn(`Message too long from IP: ${clientIP} - Length: ${sanitizedMessage.length}`);
      return new Response(
        JSON.stringify({ error: "Message too long" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Time-based validation (prevent very fast submissions)
    if (timestamp && Date.now() - timestamp < 2000) {
      console.warn(`Submission too fast from IP: ${clientIP} - Time difference: ${Date.now() - timestamp}ms`);
      return new Response(
        JSON.stringify({ error: "Submission too fast" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Server-side rate limiting
    const isAllowed = await checkRateLimit(clientIP);
    if (!isAllowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Enhanced logging for security monitoring
    console.log("Processing contact email for:", { 
      name: sanitizedName, 
      email: sanitizedEmail, 
      ip: clientIP,
      userAgent: userAgent?.substring(0, 100) || 'Unknown',
      timestamp: new Date().toISOString()
    });

    // Send confirmation email to the user (using sanitized data for display)
    const userEmailResponse = await resend.emails.send({
      from: "Asier from Bizkardo <onboarding@resend.dev>",
      to: [sanitizedEmail],
      subject: "Thank you for contacting me!",
      html: `
        <h1>Thank you for reaching out, ${sanitizedName}!</h1>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 4px solid #007bff; padding-left: 16px; margin: 16px 0; color: #666;">
          ${sanitizedMessage}
        </blockquote>
        <p>Best regards,<br>Asier Sarasua Garmendia</p>
        <p><em>From Bizkardo Baserria, Ibarra</em></p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to yourself (using sanitized data)
    const adminEmailResponse = await resend.emails.send({
      from: "Bizkardo Contact Form <onboarding@resend.dev>",
      to: ["assarasua@gmail.com"],
      subject: `New Contact from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>IP Address:</strong> ${clientIP}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #007bff; padding-left: 16px; margin: 16px 0; color: #333;">
          ${sanitizedMessage}
        </blockquote>
        <p><em>Sent from Bizkardo contact form</em></p>
      `,
    });

    console.log("Admin notification email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        userEmail: userEmailResponse, 
        adminEmail: adminEmailResponse 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);