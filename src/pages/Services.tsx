import { Link } from 'react-router-dom';
import { BarChart3, Brain, ShoppingCart, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services, getServicesByCluster } from '@/data/services';
import TestimonialsSection from '@/components/TestimonialsSection';

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI & Data Science Services by ElitePick AI",
  "description": "Professional AI engineering services including custom chatbots, n8n workflow automation, Power BI dashboards, ML models, and LLM integration.",
  "url": "https://elitepickai.com/services",
  "numberOfItems": services.length,
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": service.title,
    "description": service.headline,
    "url": `https://elitepickai.com/services/${service.slug}`
  }))
};

const ServicesPage = () => {
  const dataAnalyticsServices = getServicesByCluster('data-analytics');
  const aiMlServices = getServicesByCluster('ai-ml');

  return (
    <Layout>
      <SEOHelmet
        title="n8n Automation, Power BI & AI Chatbot Services | ElitePick AI"
        description="Expert n8n workflow automation, custom AI chatbots, Power BI dashboards, and ML models. ElitePick AI automates your business processes end-to-end. Free consultation."
        canonical="https://elitepickai.com/services"
        ogType="website"
        keywords="n8n Automation Services, n8n Workflow Developer, AI Chatbot Development, Power BI Dashboard Expert, Machine Learning Services, Business Process Automation, Zapier Alternative"
        structuredData={servicesJsonLd}
      />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Expert </span>
              <span className="text-gradient">Data & AI Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From interactive dashboards to intelligent automation—we deliver solutions that transform data into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/order">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Place a Direct Order
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Cluster A: Data Analytics */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Data Analytics & Visualization
                  </h2>
                  <p className="text-muted-foreground">
                    Transform complex data into clear, actionable insights with professional dashboards and analysis.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataAnalyticsServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Cluster B: AI & ML */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    AI & Machine Learning Development
                  </h2>
                  <p className="text-muted-foreground">
                    Build intelligent systems that automate workflows, predict outcomes, and deliver personalized experiences.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiMlServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <TestimonialsSection
            variant="carousel"
            title="Client Success Stories"
            subtitle="See what clients say about these services"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us for a free consultation. We'll help you identify the best solution for your specific business challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/order">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Place Direct Order
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
