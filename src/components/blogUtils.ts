// Blog Post Utils - Guide for adding rich media content
// This file contains examples and utilities for creating blog posts with images and videos

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string; // HTML content - supports images, videos, embeds
  slug: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

/*
ADDING IMAGES TO BLOG POSTS:

Option 1 - Static images in public folder:
<img src="/blog-images/your-image.jpg" alt="Descriptive alt text" />

Option 2 - Dynamic images from Supabase Storage (recommended for CMS):
First upload the image using the blogImageStorage utility, then reference it:
<img src="{supabase-storage-url}/blog-images/your-image.jpg" alt="Descriptive alt text" />

Use the uploadBlogImage() function from @/utils/blogImageStorage to upload images to Supabase.
The prose classes will automatically style them with rounded corners and shadows.

Example with Supabase:
import { uploadBlogImage, getBlogImageUrl } from '@/utils/blogImageStorage';

// Upload an image
const imageUrl = await uploadBlogImage(file, 'my-blog-image.jpg');

// Or get URL for existing image
const imageUrl = getBlogImageUrl('my-blog-image.jpg');

// Then use in your blog post content:
<img src="${imageUrl}" alt="Beautiful Basque countryside" />

ADDING YOUTUBE VIDEOS:
To embed YouTube videos, use iframe with the embed URL:

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

ADDING OTHER EMBEDS:
You can embed other content like Twitter posts, CodePen demos, etc. by including their embed HTML.

BLOG POST TEMPLATE:
{
  id: 'unique-id',
  title: 'Your Blog Post Title',
  description: 'A compelling description for the blog listing and SEO',
  content: `
    <p>Your introduction paragraph...</p>
    
    <h2>Section Heading</h2>
    <p>Content for this section...</p>
    
    <img src="/path/to/image.jpg" alt="Description" />
    
    <h2>Another Section</h2>
    <p>More content...</p>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="Video title" frameborder="0" allowfullscreen></iframe>
    
    <p>Concluding thoughts...</p>
  `,
  slug: 'url-friendly-slug',
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Your Category',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
*/

// Utility function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Utility function to estimate read time
export const estimateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};