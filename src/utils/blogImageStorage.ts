import { supabase } from "@/integrations/supabase/client";

export const uploadBlogImage = async (file: File, filename: string): Promise<string | null> => {
  try {
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filename, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export const getBlogImageUrl = (filename: string): string => {
  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filename);
  
  return publicUrl;
};

export const deleteBlogImage = async (filename: string): Promise<boolean> => {
  try {
    const { error } = await supabase.storage
      .from('blog-images')
      .remove([filename]);

    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};