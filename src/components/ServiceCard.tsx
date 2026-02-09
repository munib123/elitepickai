import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, PieChart, Sparkles, Search, MessageSquare, Brain, Cpu, Zap } from 'lucide-react';
import { Service } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3,
  PieChart,
  Sparkles,
  Search,
  MessageSquare,
  Brain,
  Cpu,
  Zap,
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact';
}

const ServiceCard = ({ service, variant = 'default' }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || BarChart3;

  if (variant === 'compact') {
    return (
      <Link
        to={`/services/${service.slug}`}
        className="group block p-4 bg-card border border-border hover:border-primary/50 transition-all duration-300 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {service.title.replace('Freelance ', '').replace(' for Hire', '')}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block h-full"
    >
      <article className="h-full p-6 bg-card border border-border hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 shadow-sm">
        {/* Icon */}
        <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title.replace('Freelance ', '').replace(' for Hire', '')}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {service.headline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.seoKeywords.slice(0, 3).map((keyword, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
};

export default ServiceCard;
