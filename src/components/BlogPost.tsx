import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Bridges Between Tradition and Innovation in Rural Tech',
    description: 'Exploring how traditional Basque farming practices can inspire modern agricultural technology solutions and drive rural innovation.',
    content: `
      <p>The intersection of traditional knowledge and modern technology has always fascinated me. Growing up in the Basque countryside, I witnessed firsthand how generations of farmers developed sophisticated systems for managing land, water, and crops without the aid of modern technology.</p>
      
      <p>Today, as we face global challenges in food security and sustainable agriculture, these traditional practices offer valuable insights for developing innovative solutions. The concept of "txoko" - communal spaces where knowledge is shared - can be reimagined through digital platforms that connect rural communities worldwide.</p>
      
      <h2>The Power of Community-Driven Innovation</h2>
      <p>In my work at NYU Stern, I've seen how gamification principles can transform learning and engagement. When applied to agricultural knowledge sharing, these same principles can create powerful incentives for farmers to document, share, and iterate on traditional practices.</p>
      
      <p>Consider the traditional Basque practice of "soro" - the careful rotation of crops and grazing animals to maintain soil health. This knowledge, passed down through generations, embodies principles that modern permaculture and regenerative agriculture are just beginning to understand scientifically.</p>
      
      <h2>Technology as a Bridge, Not a Replacement</h2>
      <p>The key is to use technology not to replace traditional knowledge, but to bridge it with modern scientific understanding and global connectivity. Mobile apps that help farmers document weather patterns, soil conditions, and crop performance can serve as digital versions of the mental maps that experienced farmers have always maintained.</p>
      
      <p>This approach to rural innovation isn't just about agriculture - it's about creating sustainable economic opportunities in rural areas while preserving cultural heritage and environmental stewardship.</p>
      
      <h2>Looking Forward</h2>
      <p>As we continue to develop healthtech solutions and rural innovation platforms, the lessons from traditional practices become even more relevant. The holistic approach to health and wellness that characterizes Basque culture - emphasizing fresh air, physical activity, community support, and connection to the land - offers a blueprint for technology solutions that truly serve human wellbeing.</p>
      
      <p>The future of innovation lies not in abandoning our roots, but in understanding how deep traditional knowledge can inform and enhance our technological capabilities.</p>
    `,
    slug: 'building-bridges-tradition-innovation-rural-tech',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Innovation',
    tags: ['Rural Tech', 'Traditional Knowledge', 'Agriculture', 'Gamification']
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('blog.backToBlog')}
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <CalendarDays className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <Clock className="h-4 w-4 ml-4" />
            <span>{post.readTime}</span>
          </div>
          
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {post.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('blog.backToBlog')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;