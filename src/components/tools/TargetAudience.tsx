import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TargetAudienceItem {
  icon: string;
  title: string;
  description: string;
}

interface TargetAudienceProps {
  audience: TargetAudienceItem[];
}

const TargetAudience = ({ audience }: TargetAudienceProps) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            This Service Is <span className="text-gradient">Perfect For...</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've helped clients across roles and industries achieve data clarity.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audience.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
