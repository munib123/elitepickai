import { Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/data/testimonials';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
  className?: string;
}

const TestimonialCard = ({ testimonial, compact = false, className }: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = compact ? 100 : 150;
  const shouldTruncate = testimonial.review.length > maxLength;
  
  const displayReview = expanded || !shouldTruncate 
    ? testimonial.review 
    : testimonial.review.slice(0, maxLength) + '...';

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={compact ? 12 : 14}
        className={cn(
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-muted-foreground/30'
        )}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50",
      className
    )}>
      <CardContent className={cn("p-4", compact ? "p-3" : "p-5")}>
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className={cn(
            "rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0",
            compact ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm"
          )}>
            {getInitials(testimonial.clientName)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={cn("font-medium text-foreground", compact ? "text-sm" : "text-base")}>
                {testimonial.clientName}
              </span>
              <span className="text-sm">{testimonial.countryFlag}</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex items-center gap-0.5">
                {renderStars(testimonial.rating)}
              </div>
              <span className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>
                {testimonial.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Verified Badge */}
        <div className="flex items-center gap-1.5 mb-2">
          <CheckCircle size={compact ? 12 : 14} className="text-green-500" />
          <span className={cn("text-green-600 dark:text-green-400", compact ? "text-xs" : "text-xs")}>
            Verified Purchase
          </span>
          <span className="text-muted-foreground/50">•</span>
          <span className={cn("text-muted-foreground", compact ? "text-xs" : "text-xs")}>
            {testimonial.date}
          </span>
        </div>

        {/* Service Tag */}
        <div className="mb-3">
          <span className={cn(
            "inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full",
            compact ? "text-xs" : "text-xs"
          )}>
            {testimonial.service}
          </span>
        </div>

        {/* Review */}
        <p className={cn("text-muted-foreground leading-relaxed", compact ? "text-xs" : "text-sm")}>
          "{displayReview}"
        </p>
        
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              "text-primary hover:underline mt-1 font-medium",
              compact ? "text-xs" : "text-sm"
            )}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
