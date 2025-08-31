import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowRight, Home } from 'lucide-react';

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
      <p>Leaving Madrid felt like stepping off a fast track that no longer pointed toward meaning; the signal was strong, but the station was wrong. Returning to Ibarra reset the compass: a slower cadence, thicker sense of place, and the clarity that what matters is not just scale but stewardship—how to build from roots that endure. Bizkardo, my grandmother's caserío, is both anchor and invitation: a living blueprint for continuity with room for reinvention.</p>
      
      <h2>Why home is a strategy</h2>
      <p>In the city, access is abundant but attention is thin; in the valley, attention deepens into understanding. Ibarra's culture—where the landscape itself produces icons like the piparra and the Gilda—reminds that excellence grows from specific soils, not generic formulas. Designing from here means treating constraints as features and values as operating principles, so progress compounds locally before it scales outward.</p>
      
      <h2>Bizkardo as framework</h2>
      <p>A Basque caserío is more than architecture; it is a social and economic unit that has carried names, work, and identity across centuries. That continuity suggests a way to build: cyclical value, intergenerational intent, and governance that keeps benefits rooted where they are made. In this frame, Bizkardo becomes a platform for learning, production, and hospitality that educates while welcoming—heritage as capability, not just memory.</p>
      
      <h2>Principles that guide the work</h2>
      <ul>
        <li><strong>Start with place:</strong> design with landscape and custom, so solutions fit like tools made for the hand that uses them.</li>
        <li><strong>Regenerate value:</strong> count soil, skills, livelihoods, and belonging alongside revenue, so growth strengthens the commons.</li>
        <li><strong>Open by default:</strong> document playbooks so what works here can be adapted elsewhere without losing its integrity.</li>
        <li><strong>Small is precise:</strong> iterate locally, stabilize slowly, and let replication follow proof, not pitch.</li>
        <li><strong>Community as shareholder:</strong> ensure that governance and upside remain anchored to the place that creates the value.</li>
      </ul>
      
      <h2>Shaping a useful future</h2>
      <p>Positive impact here is tangible: healthier land, steadier income, apprenticeships that carry skills forward, and products whose provenance is a promise. It is also civic: spaces to gather, shared narratives that turn everyday craft into pride, and an economy that rewards care over extraction. If it improves life in Ibarra—workflows, wages, watersheds—it is a worthy export; if not, it's noise.</p>
      
      <h2>A closing note on ambition</h2>
      <p>The ambition now is coherence: to let Bizkardo stand as a hinge between inheritance and necessity, translating care into enterprise without burning the foundations that make it possible. From Ibarra, the path is clear enough: go deep, stay open, and build so that what survives is not just a house, but a way of making life together that is unmistakably alive.</p>
    `,
    slug: 'back-to-roots-forward-to-impact',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Philosophy',
    tags: ['Rural Innovation', 'Heritage', 'Sustainability', 'Community']
  }
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <Home className="h-4 w-4 mr-2" />
              {t('blog.backToHome')}
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-3">
                  {post.category}
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {t('blog.readMore')}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;