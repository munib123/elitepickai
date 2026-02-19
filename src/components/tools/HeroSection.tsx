import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import powerBiLogo from '@/assets/tools/powerbi-logo.svg';
import n8nLogo from '@/assets/tools/n8n-logo.webp';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  heroImage: string;
  linkedinLink: string;
  toolSlug?: string;
}

const HeroSection = ({ headline, subheadline, heroImage, linkedinLink, toolSlug }: HeroSectionProps) => {
  const getBrandingContent = () => {
    if (toolSlug === 'n8n-automation') {
      return {
        logo: n8nLogo,
        alt: 'n8n',
        text: 'n8n Certified Partner',
        logoClass: 'h-10 w-auto',
        ctaText: 'Get Your n8n Workflow'
      };
    }
    // Default to Power BI
    return {
      logo: powerBiLogo,
      alt: 'Microsoft Power BI',
      text: 'Official Microsoft Power BI Partner',
      logoClass: 'h-10 w-10',
      ctaText: 'Get Your Dashboard'
    };
  };

  const branding = getBrandingContent();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Tool Logo Badge */}
            <div className="flex items-center gap-3">
              <img 
                src={branding.logo} 
                alt={branding.alt} 
                className={branding.logoClass}
              />
              <span className="text-sm font-medium text-muted-foreground">
                {branding.text}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">{headline}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  {branding.ctaText}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  View Samples
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={heroImage}
                alt="Power BI Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
