import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact email for:", { name, email });

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Asier <assarasua@gmail.com>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 4px solid #007bff; padding-left: 16px; margin: 16px 0; color: #666;">
          ${message}
        </blockquote>
        <p>Best regards,<br>Asier Sarasua Garmendia</p>
        <p><em>From Bizkardo Baserria, Ibarra</em></p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to yourself
    const adminEmailResponse = await resend.emails.send({
      from: "Bizkardo Contact Form <assarasua@gmail.com>",
      to: ["assarasua@gmail.com"],
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #007bff; padding-left: 16px; margin: 16px 0; color: #333;">
          ${message}
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