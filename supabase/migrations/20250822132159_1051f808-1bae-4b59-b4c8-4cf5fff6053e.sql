-- Fix customer data exposure in quotes table
-- Remove the overly permissive anonymous access policy
DROP POLICY IF EXISTS "Anonymous users can view quotes with valid token" ON public.quotes;

-- Create a secure function that returns only non-sensitive quote data for anonymous access
CREATE OR REPLACE FUNCTION public.get_quote_summary(quote_access_token UUID)
RETURNS TABLE (
  id UUID,
  estimate INTEGER,
  status TEXT,
  door_type TEXT,
  installation_type TEXT,
  urgency TEXT,
  budget TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log the access attempt
  PERFORM public.log_quote_access(
    (SELECT q.id FROM public.quotes q WHERE q.access_token = quote_access_token),
    'anonymous_summary_view',
    inet_client_addr(),
    current_setting('request.headers', true)::json->>'user-agent'
  );
  
  -- Return only non-sensitive quote information
  RETURN QUERY
  SELECT 
    q.id,
    q.estimate,
    q.status,
    q.door_type,
    q.installation_type,
    q.urgency,
    q.budget,
    q.created_at,
    q.updated_at
  FROM public.quotes q
  WHERE q.access_token = quote_access_token
    AND q.access_token IS NOT NULL;
END;
$$;

-- Grant execute permission to anonymous users
GRANT EXECUTE ON FUNCTION public.get_quote_summary(UUID) TO anon;

-- Create a secure function for authenticated users to get full quote details
CREATE OR REPLACE FUNCTION public.get_full_quote_details(quote_id UUID)
RETURNS TABLE (
  id UUID,
  name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  estimate INTEGER,
  status TEXT,
  door_type TEXT,
  installation_type TEXT,
  urgency TEXT,
  budget TEXT,
  description TEXT,
  language TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  access_token UUID
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log the access attempt
  PERFORM public.log_quote_access(
    quote_id,
    'authenticated_full_view',
    inet_client_addr(),
    current_setting('request.headers', true)::json->>'user-agent'
  );
  
  -- Return full quote information only for the quote owner
  RETURN QUERY
  SELECT 
    q.id,
    q.name,
    q.email,
    q.phone,
    q.address,
    q.estimate,
    q.status,
    q.door_type,
    q.installation_type,
    q.urgency,
    q.budget,
    q.description,
    q.language,
    q.created_at,
    q.updated_at,
    q.access_token
  FROM public.quotes q
  WHERE q.id = quote_id
    AND q.user_id = auth.uid();
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.get_full_quote_details(UUID) TO authenticated;