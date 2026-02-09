import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tool } from '@/data/tools';
import powerBiLogo from '@/assets/tools/powerbi-logo.svg';
import n8nLogo from '@/assets/tools/n8n-logo.png';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const getIcon = (iconName: string) => {
    // Use Power BI logo for Power BI related tools
    if (tool.slug === 'power-bi-dashboard-services') {
      return <img src={powerBiLogo} alt="Power BI" className="h-8 w-8" loading="lazy" />;
    }
    // Use n8n logo for n8n related tools
    if (tool.slug === 'n8n-automation') {
      return <img src={n8nLogo} alt="n8n" className="h-8 w-auto" loading="lazy" />;
    }
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {getIcon(tool.icon)}
          </div>
          <Badge variant="secondary">Tool</Badge>
        </div>
        <h3 className="text-xl font-bold text-foreground mt-4">{tool.title}</h3>
        <p className="text-gradient font-semibold">{tool.headline}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {tool.subheadline}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tool.seoKeywords.slice(0, 3).map((keyword, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/tools/${tool.slug}`}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
