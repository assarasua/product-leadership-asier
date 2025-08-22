-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.log_quote_access(
  quote_id UUID,
  access_type TEXT,
  ip_address INET DEFAULT NULL,
  user_agent TEXT DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.quotes_audit_log (quote_id, accessed_by, access_type, ip_address, user_agent)
  VALUES (quote_id, current_user, access_type, ip_address, user_agent);
END;
$$;