import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  ctaBannerImage: string;
  linkedinLink: string;
  toolSlug?: string;
}

const FinalCTA = ({ ctaBannerImage, linkedinLink, toolSlug }: FinalCTAProps) => {
  const getCtaContent = () => {
    if (toolSlug === 'n8n-automation') {
      return {
        title: 'Ready to Automate Your Business?',
        subtitle: 'Stop manual work. Start growing with custom n8n workflows.',
        buttonText: 'Get Your Free Consultation'
      };
    }
    return {
      title: 'Ready to Transform Your Data?',
      subtitle: 'Stop making decisions in the dark. Let\'s build a dashboard that gives you the clarity and confidence to grow your business.',
      buttonText: 'Start Your Project'
    };
  };

  const content = getCtaContent();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={ctaBannerImage}
          alt={content.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">{content.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                {content.buttonText}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
