import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg">
        {/* Project thumbnail */}
        <div className="aspect-video bg-secondary/30 flex items-center justify-center overflow-hidden">
          <img
            src={`/images/projects/${project.slug}.webp`}
            alt={project.imageAlt}
            width={600}
            height={338}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="p-6 lg:p-8">
          {/* Category Badge */}
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
            {project.category}
          </Badge>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.shortTitle}
          </h3>

          {/* Result Highlight */}
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.result.split('.')[0]}.
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-mono"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
            >
              <span>View Case Study</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </article>
    );
  }

  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <article className="h-full bg-card border border-border hover:border-primary/50 rounded-xl transition-all duration-300 overflow-hidden">
        {/* Project thumbnail */}
        <div className="aspect-video bg-secondary/30 flex items-center justify-center overflow-hidden">
          <img
            src={`/images/projects/${project.slug}.webp`}
            alt={project.imageAlt}
            width={400}
            height={225}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="p-6">
        {/* Category */}
        <Badge variant="outline" className="mb-3 text-xs">
          {project.category}
        </Badge>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.shortTitle}
        </h3>

        {/* Brief Result */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.result.split('.')[0]}.
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tools.slice(0, 4).map((tool, index) => (
            <span
              key={index}
              className="text-xs px-2 py-0.5 bg-secondary/50 text-muted-foreground rounded font-mono"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center text-primary text-sm font-medium">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
