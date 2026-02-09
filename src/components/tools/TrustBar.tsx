import { Star, CheckCircle, Award } from 'lucide-react';

interface TrustMetric {
  label: string;
  value: string;
}

interface TrustBarProps {
  metrics: TrustMetric[];
}

const TrustBar = ({ metrics }: TrustBarProps) => {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'rating':
        return <Star className="h-4 w-4 fill-current" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'satisfaction':
        return <Award className="h-4 w-4" />;
      default:
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-primary/10 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="text-primary">{getIcon(metric.label)}</span>
              <span>{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
