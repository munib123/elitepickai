import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';
import { testimonials, Testimonial, getFeaturedTestimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  variant?: 'carousel' | 'grid' | 'compact';
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  className?: string;
  maxItems?: number;
}

const TestimonialsSection = ({
  variant = 'carousel',
  items,
  title = "What Clients Say",
  subtitle = "Trusted by businesses worldwide",
  showHeader = true,
  className,
  maxItems = 8
}: TestimonialsSectionProps) => {
  const displayTestimonials = items || getFeaturedTestimonials(maxItems);
  
  // Calculate average rating
  const avgRating = (displayTestimonials.reduce((acc, t) => acc + t.rating, 0) / displayTestimonials.length).toFixed(1);

  if (variant === 'compact') {
    return (
      <div className={cn("space-y-3", className)}>
        {showHeader && (
          <div className="flex items-center gap-2 mb-2">
            <Quote size={16} className="text-primary" />
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          </div>
        )}
        {displayTestimonials.slice(0, 2).map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            compact 
          />
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <section className={cn("py-12", className)}>
        {showHeader && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{avgRating} Average Rating</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    );
  }

  // Carousel variant (default)
  return (
    <section className={cn("py-16", className)}>
      {showHeader && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{avgRating} Average Rating • {displayTestimonials.length}+ Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
      )}
      
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {displayTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
