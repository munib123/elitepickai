import { Award, Code, Database, Github } from 'lucide-react';

interface Badge {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const badges: Badge[] = [
  {
    name: 'Google Data Analytics Certified',
    icon: <Database className="h-4 w-4" />,
    color: 'bg-[hsl(142,76%,36%)]/10 border-[hsl(142,76%,36%)]/30 text-[hsl(142,76%,36%)]',
  },
  {
    name: 'Certified Data Scientist',
    icon: <Award className="h-4 w-4" />,
    color: 'bg-primary/10 border-primary/30 text-primary',
  },
  {
    name: 'Python Certified',
    icon: <Code className="h-4 w-4" />,
    color: 'bg-[hsl(207,90%,54%)]/10 border-[hsl(207,90%,54%)]/30 text-[hsl(207,90%,54%)]',
  },
  {
    name: 'GitHub Certified Developer',
    icon: <Github className="h-4 w-4" />,
    color: 'bg-foreground/10 border-foreground/30 text-foreground',
  },
];

interface CertificationBadgesProps {
  variant?: 'inline' | 'grid' | 'compact';
  className?: string;
}

const CertificationBadges = ({ variant = 'inline', className = '' }: CertificationBadgesProps) => {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {badges.slice(0, 2).map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${badge.color}`}
          >
            {badge.icon}
            <span>{badge.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 gap-3 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${badge.color}`}
          >
            {badge.icon}
            <span className="text-sm font-medium">{badge.name}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-transform hover:scale-105 ${badge.color}`}
        >
          {badge.icon}
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CertificationBadges;
