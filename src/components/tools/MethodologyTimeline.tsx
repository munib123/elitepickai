import * as Icons from 'lucide-react';

interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface MethodologyTimelineProps {
  methodology: MethodologyStep[];
  methodologyImage: string;
}

const MethodologyTimeline = ({ methodology, methodologyImage }: MethodologyTimelineProps) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Proven <span className="text-gradient">5-Step</span> Dashboard Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A battle-tested methodology that ensures your dashboard delivers real business value.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid grid-cols-5 gap-4 relative">
              {methodology.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Step number with icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg mb-4">
                    {getIcon(step.icon)}
                  </div>
                  <span className="text-xs font-medium text-primary mb-1">Step {step.step}</span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden mb-12">
          <div className="space-y-6">
            {methodology.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    {getIcon(step.icon)}
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="w-0.5 h-full bg-border mx-auto mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-medium text-primary">Step {step.step}</span>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Image */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl border border-border">
            <img
              src={methodologyImage}
              alt="5-Step Dashboard Development Process"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyTimeline;
