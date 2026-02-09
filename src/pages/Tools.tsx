import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import ToolCard from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { tools } from '@/data/tools';

const Tools = () => {
  return (
    <Layout>
      <SEOHelmet
        title="AI & Data Tools | Power BI Dashboard Development Services | ElitePick AI"
        description="Explore specialized tools and services for data visualization, business intelligence, and analytics. Custom Power BI dashboards, Tableau solutions, and more."
        canonical="https://elitepickai.com/tools"
        ogType="website"
        keywords="Power BI Tools, Data Visualization Services, Business Intelligence Tools, Dashboard Development, Analytics Solutions"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized <span className="text-gradient">Tools & Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Deep-dive landing pages for my most in-demand services. Each tool page provides comprehensive details, use cases, pricing, and resources to help you make informed decisions.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See What You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              I offer custom solutions for unique business challenges. Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/services">
                  Browse All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
