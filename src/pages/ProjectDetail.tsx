import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Target,
  Lightbulb,
  Wrench,
  Trophy,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/data/projects";

const BASE_URL = "https://elitepickai.com";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  // Generate JSON-LD structured data for the project
  const generateJsonLd = () => {
    if (!project) return undefined;
    
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": `${project.result.split(".")[0]}. ${project.situation.split(".")[0]}.`,
      "author": {
        "@type": "Person",
        "name": "Muneeb Shafiq",
        "url": `${BASE_URL}/about`,
        "jobTitle": "Data Scientist & AI Engineer"
      },
      "url": `${BASE_URL}/projects/${project.slug}`,
      "keywords": project.tags.join(", "),
      "genre": project.category,
      "about": {
        "@type": "Thing",
        "name": project.category
      },
      "text": `SITUATION: ${project.situation} TASK: ${project.task} ACTION: ${project.action} RESULT: ${project.result}`,
      "tool": project.tools.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      })),
      ...(project.githubLink && {
        "codeRepository": project.githubLink
      }),
      "provider": {
        "@type": "Person",
        "name": "Muneeb Shafiq",
        "url": "https://www.fiverr.com/elitepick_ai"
      },
      "potentialAction": {
        "@type": "OrderAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": project.fiverrLink,
          "actionPlatform": "https://fiverr.com"
        },
        "name": "Order Similar Project"
      }
    };
  };

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related projects
  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);

  const starSections = [
    { icon: Target, label: "Situation", content: project.situation, color: "text-chart-1" },
    { icon: Lightbulb, label: "Task", content: project.task, color: "text-chart-2" },
    { icon: Wrench, label: "Action", content: project.action, color: "text-chart-3" },
    { icon: Trophy, label: "Result", content: project.result, color: "text-primary" },
  ];

  return (
    <Layout>
      <SEOHelmet
        title={`${project.title} | ElitePick AI Portfolio`}
        description={`${project.result.split(".")[0]}. ${project.situation.split(".")[0]}.`}
        canonical={`https://elitepickai.com/projects/${project.slug}`}
        ogType="article"
        keywords={project.tags}
        structuredData={generateJsonLd()}
      />

      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{project.shortTitle}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
              {project.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{project.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.slice(0, 6).map((tag, index) => (
                <span key={index} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-card border border-border text-foreground rounded-md font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/order">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Order Similar Project
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact for Quote
                </Link>
              </Button>

              {project.githubLink && (
                <Button asChild variant="outline">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STAR Format Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Case Study</h2>
              <p className="text-muted-foreground">
                This project follows the STAR format: Situation, Task, Action, Result.
              </p>
            </div>

            <div className="space-y-8">
              {starSections.map((section, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
                  {/* Icon */}
                  <div className={`absolute -left-5 p-2 bg-card border-2 border-border rounded-full ${section.color}`}>
                    <section.icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="ml-6">
                    <h3 className={`text-lg font-semibold mb-2 ${section.color}`}>{section.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need a Similar Solution?</h2>
            <p className="text-muted-foreground mb-6">
              I can build custom solutions tailored to your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/order">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Place Direct Order
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.slug}`}
                    className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <Badge variant="outline" className="mb-2 text-xs">
                      {relatedProject.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-2">{relatedProject.shortTitle}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {relatedProject.result.split(".")[0]}.
                    </p>
                    <div className="flex items-center text-primary text-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
