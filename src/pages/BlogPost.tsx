import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import { getBlogPostBySlug } from '@/data/blog';
import NotFound from './NotFound';
import PowerBIPillarContent from '@/components/blog/PowerBIPillarContent';
import SalesDashboardContent from '@/components/blog/SalesDashboardContent';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Calendar, Clock, User, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { categorySlug, postSlug } = useParams<{
    categorySlug: string;
    postSlug: string;
  }>();

  const post = categorySlug && postSlug
    ? getBlogPostBySlug(categorySlug, postSlug)
    : undefined;

  if (!post) return <NotFound />;

  return (
    <Layout>
      <SEOHelmet
        title={`${post.seoTitle} | ElitePick AI Blog`}
        description={post.metaDescription}
        canonical={post.canonicalUrl || `https://elitepickai.com/blog/${post.categorySlug}/${post.slug}`}
        ogType="article"
        keywords={[post.primaryKeyword, ...post.secondaryKeywords]}
        ogImage={post.ogImage}
        publishedDate={post.datePublished}
        modifiedDate={post.dateModified}
        structuredData={post.jsonLd}
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                {post.breadcrumbs.map((crumb, i) => (
                  <BreadcrumbItem key={crumb.href}>
                    {i > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbLink asChild>
                      <Link to={crumb.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground font-medium truncate max-w-[200px] md:max-w-none">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Badge variant="secondary" className="mb-3">
              {post.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-4xl">
              {post.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
              {post.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Updated: {new Date(post.dateModified).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} read
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                {post.level}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area with TOC Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-10 lg:gap-16">
            {/* Sticky Table of Contents - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-border hover:border-primary pl-3"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              {/* Mobile TOC */}
              <details className="lg:hidden mb-8 border border-border rounded-lg p-4">
                <summary className="text-sm font-semibold text-foreground cursor-pointer">
                  📋 Table of Contents
                </summary>
                <nav className="mt-3 space-y-1">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary py-1 pl-3"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>

              {/* Render the actual blog content */}
              {post.categorySlug === 'power-bi' && post.slug === 'ultimate-guide-custom-dashboards' && (
                <PowerBIPillarContent />
              )}
              {post.categorySlug === 'power-bi' && post.slug === 'build-sales-dashboard-tutorial' && (
                <SalesDashboardContent />
              )}
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
