import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

interface PainMatrixProps {
  painPoints: PainPoint[];
  painMatrixImage: string;
}

const PainMatrix = ({ painPoints, painMatrixImage }: PainMatrixProps) => {
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
            Is Your Data Holding You <span className="text-gradient">Hostage?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If any of these sound familiar, you're leaving money and time on the table.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-destructive/20 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive shrink-0">
                    {getIcon(point.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chaos to Clarity Visual */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl border border-border">
            <img
              src={painMatrixImage}
              alt="From Chaos to Clarity - Data Transformation"
              className="w-full h-auto max-h-[400px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainMatrix;
