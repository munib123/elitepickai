import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  AlertCircle,
  Package,
  Star,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import { getTestimonialsByService, getFeaturedTestimonials } from "@/data/testimonials";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">
            ← Back to Services
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProjects = projects.filter((p) => service.relatedProjects.includes(p.slug)).slice(0, 3);

  const otherServices = services.filter((s) => s.cluster === service.cluster && s.id !== service.id).slice(0, 2);

  // Get testimonials for this service or fallback to featured ones
  const serviceTestimonials = getTestimonialsByService(service.slug);
  const displayTestimonials = serviceTestimonials.length > 0 ? serviceTestimonials : getFeaturedTestimonials(2);

  return (
    <Layout>
      <SEOHelmet
        title={`${service.title} | ElitePick AI`}
        description={service.headline}
        canonical={`https://elitepickai.com/services/${service.slug}`}
        ogType="website"
        keywords={service.seoKeywords}
      />

      <div className="bg-muted/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{service.title.replace("Freelance ", "").replace(" for Hire", "")}</span>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
              {service.cluster === "data-analytics" ? "Data Analytics" : "AI & Machine Learning"}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{service.title}</h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{service.headline}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {service.seoKeywords.slice(0, 6).map((keyword, index) => (
                <span key={index} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to={`/order?service=${service.slug}`}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Order Direct
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={service.fiverrLink} target="_blank" rel="noopener noreferrer">
                  Order on Fiverr
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Who Is This For?</h2>
                </div>
                <p className="text-muted-foreground">{service.targetClient}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Problems I Solve</h2>
                </div>
                <ul className="space-y-3">
                  {service.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Service Description</h2>
                <p className="text-muted-foreground whitespace-pre-line">{service.description}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Package className="h-5 w-5 text-success" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">What You'll Receive</h2>
                </div>
                <ul className="grid gap-3">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Why Choose Me</h2>
                </div>
                <p className="text-muted-foreground">{service.whyChooseMe}</p>
              </div>

              {relatedProjects.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Related Case Studies</h2>
                  <div className="grid gap-4">
                    {relatedProjects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.slug}`}
                        className="block p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                      >
                        <h3 className="font-medium text-foreground mb-1">{project.shortTitle}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.result.split(".")[0]}.</p>
                        <div className="flex items-center mt-2 text-primary text-sm">
                          <span>View Case Study</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.pricing}</p>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-3">
                  <Link to={`/order?service=${service.slug}`}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Direct
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full mb-3">
                  <a href={service.fiverrLink} target="_blank" rel="noopener noreferrer">
                    Order on Fiverr
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button asChild variant="ghost" className="w-full">
                  <Link to="/contact">Have Questions? Contact Me</Link>
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">Secure payment • Money-back guarantee</p>

                {otherServices.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3">Related Services</h4>
                    <div className="space-y-2">
                      {otherServices.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {s.title.replace("Freelance ", "").replace(" for Hire", "")}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client Reviews */}
                <div className="mt-6 pt-6 border-t border-border">
                  <TestimonialsSection
                    variant="compact"
                    items={displayTestimonials}
                    title="Client Reviews"
                    showHeader={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailPage;
