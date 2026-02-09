import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  metrics: string[];
}

interface UseCaseGalleryProps {
  useCases: UseCase[];
}

const UseCaseGallery = ({ useCases }: UseCaseGalleryProps) => {
  const [activeTab, setActiveTab] = useState(useCases[0]?.id || '');

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dashboards That <span className="text-gradient">Drive Decisions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions for real business challenges across industries.
          </p>
        </div>

        {/* Tabbed Use Cases */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="text-sm md:text-base">
                {useCase.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover min-h-[300px]"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {useCase.subtitle}
                      </p>
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-foreground">Key Metrics Tracked:</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.metrics.map((metric, index) => (
                            <Badge key={index} variant="secondary">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCaseGallery;
