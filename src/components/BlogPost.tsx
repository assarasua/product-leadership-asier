import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft, Home } from 'lucide-react';

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
    title: 'Back to the roots, forward to impact',
    description: 'Leaving Madrid felt like stepping off a fast track that no longer pointed toward meaning. Returning to Ibarra reset the compass: a slower cadence, thicker sense of place, and the clarity that what matters is not just scale but stewardship.',
    content: `
      <p>Leaving Madrid felt like stepping off a fast track that no longer pointed toward meaning; the signal was strong, but the station was wrong. Returning to Ibarra reset the compass: a slower cadence, thicker sense of place, and the clarity that what matters is not just scale but stewardship—how to build from roots that endure.</p>
      
      <p>Bizkardo, my grandmother's caserío, is both anchor and invitation: a living blueprint for continuity with room for reinvention.</p>
      
      <img src="/blog-images/basque-countryside-caserio.jpg" alt="Traditional Basque caserío in the countryside of Ibarra, representing heritage and continuity" class="w-full my-8 rounded-lg shadow-lg" />
      
      <h2>Why home is a strategy</h2>
      
      <p>In the city, access is abundant but attention is thin; in the valley, attention deepens into understanding. Ibarra's culture—where the landscape itself produces icons like the piparra and the Gilda—reminds that excellence grows from specific soils, not generic formulas.</p>
      
      <p>Designing from here means treating constraints as features and values as operating principles, so progress compounds locally before it scales outward.</p>
      
      <h2>Bizkardo as framework</h2>
      
      <p>A Basque caserío is more than architecture; it is a social and economic unit that has carried names, work, and identity across centuries. That continuity suggests a way to build: cyclical value, intergenerational intent, and governance that keeps benefits rooted where they are made.</p>
      
      <p>In this frame, Bizkardo becomes a platform for learning, production, and hospitality that educates while welcoming—heritage as capability, not just memory.</p>
      
      <h2>Principles that guide the work</h2>
      
      <ul>
        <li><strong>Start with place:</strong> design with landscape and custom, so solutions fit like tools made for the hand that uses them.</li>
        <li><strong>Regenerate value:</strong> count soil, skills, livelihoods, and belonging alongside revenue, so growth strengthens the commons.</li>
        <li><strong>Open by default:</strong> document playbooks so what works here can be adapted elsewhere without losing its integrity.</li>
        <li><strong>Small is precise:</strong> iterate locally, stabilize slowly, and let replication follow proof, not pitch.</li>
        <li><strong>Community as shareholder:</strong> ensure that governance and upside remain anchored to the place that creates the value.</li>
      </ul>
      
      <h2>Shaping a useful future</h2>
      
      <p>Positive impact here is tangible: healthier land, steadier income, apprenticeships that carry skills forward, and products whose provenance is a promise. It is also civic: spaces to gather, shared narratives that turn everyday craft into pride, and an economy that rewards care over extraction.</p>
      
      <p>If it improves life in Ibarra—workflows, wages, watersheds—it is a worthy export; if not, it's noise.</p>
      
      <h2>A closing note on ambition</h2>
      
      <p>The ambition now is coherence: to let Bizkardo stand as a hinge between inheritance and necessity, translating care into enterprise without burning the foundations that make it possible.</p>
      
      <p>From Ibarra, the path is clear enough: go deep, stay open, and build so that what survives is not just a house, but a way of making life together that is unmistakably alive.</p>
    `,
    slug: 'back-to-roots-forward-to-impact',
    date: '2025-08-31',
    readTime: '3 min read',
    category: 'Philosophy',
    tags: ['Rural Innovation', 'Heritage', 'Sustainability', 'Community']
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
          <div className="flex gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost">
                <Home className="h-4 w-4 mr-2" />
                {t('blog.backToHome')}
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('blog.backToBlog')}
              </Button>
            </Link>
          </div>
          
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

        <article className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-lg prose-img:shadow-lg prose-video:rounded-lg prose-video:shadow-lg prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-foreground prose-ul:my-6 prose-li:mb-2 prose-li:text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="outline">
                <Home className="h-4 w-4 mr-2" />
                {t('blog.backToHome')}
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('blog.backToBlog')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;