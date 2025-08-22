-- Add user_id column to quotes table for authenticated users
ALTER TABLE public.quotes 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Add a secure access token for anonymous quote access
ALTER TABLE public.quotes 
ADD COLUMN access_token UUID DEFAULT gen_random_uuid();

-- Add index for performance
CREATE INDEX idx_quotes_user_id ON public.quotes(user_id);
CREATE INDEX idx_quotes_access_token ON public.quotes(access_token);

-- Drop existing overly permissive policies
DROP POLICY "Only service role can read quotes" ON public.quotes;
DROP POLICY "Only service role can update quotes" ON public.quotes;
DROP POLICY "Only service role can delete quotes" ON public.quotes;

-- Create secure user-specific policies
CREATE POLICY "Users can view their own quotes" 
ON public.quotes 
FOR SELECT 
USING (auth.uid() = user_id);

-- Allow anonymous users to view quotes they created using access token
CREATE POLICY "Anonymous users can view quotes with valid token" 
ON public.quotes 
FOR SELECT 
USING (
  user_id IS NULL AND 
  access_token IS NOT NULL AND
  access_token IN (
    SELECT unnest(string_to_array(current_setting('request.headers', true)::json->>'x-quote-token', ','))::uuid
  )
);

-- Users can update their own quotes
CREATE POLICY "Users can update their own quotes" 
ON public.quotes 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Service role can still read/update for admin purposes (with audit logging)
CREATE POLICY "Service role admin access" 
ON public.quotes 
FOR ALL 
USING (auth.role() = 'service_role');

-- Update the insert policy to set user_id for authenticated users
DROP POLICY "Public can create quotes" ON public.quotes;

CREATE POLICY "Authenticated users can create quotes" 
ON public.quotes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anonymous users can create quotes" 
ON public.quotes 
FOR INSERT 
WITH CHECK (user_id IS NULL);

-- Create audit log table for service role access
CREATE TABLE public.quotes_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES public.quotes(id) ON DELETE CASCADE,
  accessed_by TEXT NOT NULL,
  access_type TEXT NOT NULL,
  accessed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  ip_address INET,
  user_agent TEXT
);

-- Enable RLS on audit log
ALTER TABLE public.quotes_audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can write to audit log
CREATE POLICY "Service role can write audit logs" 
ON public.quotes_audit_log 
FOR INSERT 
WITH CHECK (auth.role() = 'service_role');

-- Create function to log admin access
CREATE OR REPLACE FUNCTION public.log_quote_access(
  quote_id UUID,
  access_type TEXT,
  ip_address INET DEFAULT NULL,
  user_agent TEXT DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.quotes_audit_log (quote_id, accessed_by, access_type, ip_address, user_agent)
  VALUES (quote_id, current_user, access_type, ip_address, user_agent);
END;
$$;