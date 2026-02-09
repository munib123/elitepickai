import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LeadMagnet {
  title: string;
  description: string;
  cta: string;
  icon: string;
}

interface LeadMagnetHubProps {
  leadMagnets: LeadMagnet[];
  leadMagnetImage: string;
}

const DOWNLOAD_LINK = "https://download.microsoft.com/download/0/8/1/0816F8D1-D1A5-4F60-9AF5-BC91E18D6D64/Microsoft_Press_ebook_Introducing_Power_BI_PDF_mobile.pdf";

const LeadMagnetHub = ({ leadMagnets, leadMagnetImage }: LeadMagnetHubProps) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Resources to <span className="text-gradient">Get You Started</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download these free tools to prepare for your dashboard project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Lead Magnets */}
          <div className="space-y-4">
            {leadMagnets.map((magnet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      {getIcon(magnet.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{magnet.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{magnet.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer">
                          {magnet.cta}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl border border-border">
              <img
                src={leadMagnetImage}
                alt="Free Power BI Resources"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetHub;
