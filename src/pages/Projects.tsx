import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import ProjectCard from '@/components/ProjectCard';
import { projects, getFeaturedProjects } from '@/data/projects';

const ProjectsPage = () => {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Layout>
      <SEOHelmet
        title="AI & Data Science Portfolio | Project Case Studies | ElitePick AI"
        description="Explore real-world AI and data science projects: KYC analytics dashboards, AI travel assistants, crime analysis, and facility operations pipelines."
        canonical="https://elitepickai.com/projects"
        ogType="website"
        keywords="AI Portfolio, Data Science Projects, Power BI Dashboard Projects, AI Chatbot Projects, Machine Learning Portfolio"
      />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Project </span>
              <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real projects, real results. Explore how we've helped businesses solve data challenges and achieve measurable outcomes using the STAR format.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need a Similar Solution?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We can build custom dashboards, data pipelines, AI systems, and analytics solutions for your business.
          </p>
          <a
            href="https://www.fiverr.com/s/bdXwDDa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg"
          >
            Get Started on Fiverr
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
