-- Create table for Bizkardo contacts
CREATE TABLE public.bizkardo_contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bizkardo_contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can create contacts" 
ON public.bizkardo_contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy for service role to view all contacts (for admin access)
CREATE POLICY "Service role can view all contacts" 
ON public.bizkardo_contacts 
FOR SELECT 
USING (auth.role() = 'service_role');

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bizkardo_contacts_updated_at
BEFORE UPDATE ON public.bizkardo_contacts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();