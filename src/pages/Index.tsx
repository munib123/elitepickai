import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  BarChart3,
  Brain,
  Zap,
  Users,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CertificationBadges from "@/components/CertificationBadges";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { services, getServicesByCluster } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "LangChain",
  "Streamlit",
  "Docker",
  "Git",
];

const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "4.8", label: "Fiverr Rating", icon: Star },
  { value: "89%", label: "ML Accuracy Achieved" },
  { value: "50+", label: "Locations Analyzed" },
];

interface IndexProps {
  startTour?: () => void;
}

const Index = ({ startTour }: IndexProps) => {
  const dataAnalyticsServices = getServicesByCluster("data-analytics").slice(0, 2);
  const aiMlServices = getServicesByCluster("ai-ml").slice(0, 2);
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <Layout onStartTour={startTour}>
      <SEOHelmet
        title="ElitePick AI | Muneeb Shafiq — AI Engineer & Data Scientist for Hire"
        description="Hire Muneeb Shafiq — a top-rated AI Engineer & Data Scientist. I build Power BI Dashboards, AI Chatbots, ML Models, RAG Systems & Python Automation. Transform your data into actionable insights."
        canonical="https://elitepickai.com/"
        ogType="website"
        keywords="AI Engineer, Data Scientist, Freelance, Power BI, AI Chatbot, Machine Learning, Python Automation, LangChain, RAG, Muneeb Shafiq"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://elitepickai.com/#website",
              "url": "https://elitepickai.com/",
              "name": "ElitePick AI",
              "description": "AI Engineering & Data Science Solutions by Muneeb Shafiq",
              "publisher": { "@id": "https://elitepickai.com/#person" }
            },
            {
              "@type": "Person",
              "@id": "https://elitepickai.com/#person",
              "name": "Muneeb Shafiq",
              "jobTitle": "AI Engineer & Data Scientist",
              "url": "https://elitepickai.com/",
              "sameAs": [
                "https://www.linkedin.com/in/muneeb-zehel",
                "https://github.com/munib123",
                "https://www.fiverr.com/muneeb_shafiq",
                "https://muneebshafiq.me"
              ],
              "knowsAbout": [
                "Artificial Intelligence", "Machine Learning", "Data Science",
                "Power BI", "Python", "LangChain", "RAG Systems",
                "Natural Language Processing", "AI Chatbots", "Data Visualization"
              ],
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "name": "IBM Data Science Certificate" },
                { "@type": "EducationalOccupationalCredential", "name": "Google Data Analytics Certificate" },
                { "@type": "EducationalOccupationalCredential", "name": "Power BI Data Analyst - Microsoft" }
              ]
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://elitepickai.com/#service",
              "name": "ElitePick AI — Freelance AI & Data Science Services",
              "provider": { "@id": "https://elitepickai.com/#person" },
              "areaServed": "Worldwide",
              "serviceType": [
                "AI Chatbot Development",
                "Power BI Dashboard Development",
                "Machine Learning Engineering",
                "Data Cleaning & Analysis",
                "Python Automation",
                "RAG System Development",
                "LLM Fine-tuning"
              ]
            }
          ]
        }}
      />


      {/* Hero Section */}
      {/* Tour target class added to section */}
      <section className="tour-hero relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm text-primary font-medium">4.8★ Rated on Fiverr • 15+ Projects Delivered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-foreground">Freelance </span>
              <span className="text-gradient">Data Scientist</span>
              <span className="text-foreground"> & </span>
              <span className="text-gradient">AI Engineer</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transform your raw data into <span className="text-foreground font-medium">actionable insights</span> and{" "}
              <span className="text-foreground font-medium">intelligent automation</span>. Power BI Dashboards • AI
              Chatbots • ML Models.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8"
              >
                <Link to="/order">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Place Direct Order
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary text-lg px-8"
              >
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>

            {/* Certification Badges */}
            <div className="animate-slide-up mb-10" style={{ animationDelay: "0.25s" }}>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Verified Credentials</p>
              <CertificationBadges variant="inline" />
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-card/50 border border-border rounded-xl">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</span>
                    {stat.icon && <stat.icon className="h-5 w-5 text-primary fill-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="tour-services py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert <span className="text-gradient">Data & AI Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From interactive dashboards that drive decisions to AI systems that automate your workflow—I deliver
              solutions that generate measurable ROI.
            </p>
          </div>

          {/* Service Clusters */}
          <div className="space-y-12">
            {/* Data Analytics Cluster */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Data Analytics & Visualization</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataAnalyticsServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* AI/ML Cluster */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI & Machine Learning Development</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiMlServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All 8 Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="tour-projects py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. See how I've helped businesses solve their data challenges and achieve
              measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Clients Choose <span className="text-gradient">Me</span>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Results-Focused Approach",
                    description:
                      "Every project starts with your business goals, not just technical requirements. I deliver solutions that drive real ROI.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Proven Track Record",
                    description:
                      "With 97% accuracy on fraud detection models and dashboards saving 15+ hours weekly, I deliver measurable results.",
                  },
                  {
                    icon: Users,
                    title: "Clear Communication",
                    description:
                      "Complex data science concepts explained in plain English. You'll always know what's happening and why.",
                  },
                  {
                    icon: Star,
                    title: "4.8★ Fiverr Rating",
                    description:
                      "15+ successful projects with consistent 5-star reviews. Your satisfaction is guaranteed.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Skills Grid */}
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certification Badges */}
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Certifications & Trust</h3>
                <CertificationBadges variant="grid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        variant="carousel"
        title="What Clients Say"
        subtitle="Trusted by businesses worldwide with consistent 5-star reviews"
      />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-lg">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="text-sm text-primary font-medium">Currently accepting new clients</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Data?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how I can help you solve your data challenges and build intelligent solutions that drive
                real business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8"
                >
                  <Link to="/order">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Place Direct Order
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
