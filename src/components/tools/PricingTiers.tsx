import { Check, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PricingTier {
  tier: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingTiersProps {
  pricing: PricingTier[];
  fiverrLink: string;
}

const PricingTiers = ({ pricing, fiverrLink }: PricingTiersProps) => {
  const isEnterpriseTier = (tier: string) => tier.toLowerCase() === 'enterprise';

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Engagement Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for every project size. All packages include our quality guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {pricing.map((tier, index) => {
            const isEnterprise = isEnterpriseTier(tier.tier);
            
            return (
              <Card 
                key={index} 
                className={`relative flex flex-col ${
                  tier.popular 
                    ? 'border-primary shadow-lg scale-105 z-10' 
                    : isEnterprise
                    ? 'bg-card border-border dark:bg-zinc-900'
                    : 'border-border/50'
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    POPULAR
                  </Badge>
                )}
                <CardHeader className={`pb-4 ${tier.popular ? 'bg-primary/5 rounded-t-lg' : ''}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-semibold uppercase tracking-wider ${
                      isEnterprise ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {tier.tier}
                    </h3>
                  </div>
                  <p className={`text-3xl font-bold mt-2 ${
                    tier.popular ? 'text-primary' : 'text-foreground'
                  }`}>
                    {tier.price}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-1 pt-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${
                          tier.popular ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : isEnterprise
                        ? 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                        : ''
                    }`}
                    variant={tier.popular ? 'default' : isEnterprise ? 'ghost' : 'outline'}
                  >
                    <a href={fiverrLink} target="_blank" rel="noopener noreferrer">
                      {tier.popular ? `Order ${tier.tier} Package` : tier.cta}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
