import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import { blogPosts, blogCategories } from '@/data/blog';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  return (
    <Layout>
      <SEOHelmet
        title="AI & Data Science Blog | Tutorials & Insights | ElitePick AI"
        description="Read the latest articles on AI engineering, data science, Power BI tutorials, automation workflows, and machine learning best practices by ElitePick AI."
        canonical="https://elitepickai.com/blog"
        ogType="website"
        keywords="AI Blog, Data Science Blog, Power BI Tutorial, Machine Learning Articles, Python Automation Guide"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "ElitePick AI Blog",
          "description": "AI engineering, data science tutorials, and automation insights by ElitePick AI",
          "url": "https://elitepickai.com/blog",
          "author": {
            "@type": "Person",
            "name": "Muneeb Shafiq"
          }
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Knowledge Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            In-depth guides, tutorials, and insights on Power BI, data analytics, 
            and business intelligence — by a certified BI engineer.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category) => (
              <Badge
                key={category.slug}
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={`${post.categorySlug}-${post.slug}`}
                to={`/blog/${post.categorySlug}/${post.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="text-xs bg-primary text-primary-foreground">
                          Pillar Guide
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.datePublished).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
