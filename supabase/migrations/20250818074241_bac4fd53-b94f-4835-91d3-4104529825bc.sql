-- Fix RLS policies for quotes table to ensure customer data is properly protected
-- Drop existing policies and recreate them with explicit access control

DROP POLICY IF EXISTS "Anyone can create quotes" ON public.quotes;
DROP POLICY IF EXISTS "Service role can view all quotes" ON public.quotes;

-- Ensure RLS is enabled
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Allow public to create quotes (for contact forms)
CREATE POLICY "Public can create quotes" 
ON public.quotes 
FOR INSERT 
TO public
WITH CHECK (true);

-- Only allow service role to read quotes (for backend processing)
CREATE POLICY "Only service role can read quotes" 
ON public.quotes 
FOR SELECT 
TO service_role
USING (true);

-- Only allow service role to update quotes (for status management)
CREATE POLICY "Only service role can update quotes" 
ON public.quotes 
FOR UPDATE 
TO service_role
USING (true);

-- Only allow service role to delete quotes (for data management)
CREATE POLICY "Only service role can delete quotes" 
ON public.quotes 
FOR DELETE 
TO service_role
USING (true);

-- Fix similar issues for bizkardo_contacts table
DROP POLICY IF EXISTS "Anyone can create contacts" ON public.bizkardo_contacts;
DROP POLICY IF EXISTS "Service role can view all contacts" ON public.bizkardo_contacts;

ALTER TABLE public.bizkardo_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can create contacts" 
ON public.bizkardo_contacts 
FOR INSERT 
TO public
WITH CHECK (true);

CREATE POLICY "Only service role can read contacts" 
ON public.bizkardo_contacts 
FOR SELECT 
TO service_role
USING (true);

CREATE POLICY "Only service role can update contacts" 
ON public.bizkardo_contacts 
FOR UPDATE 
TO service_role
USING (true);

CREATE POLICY "Only service role can delete contacts" 
ON public.bizkardo_contacts 
FOR DELETE 
TO service_role
USING (true);