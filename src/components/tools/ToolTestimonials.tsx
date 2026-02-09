import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/data/testimonials';

interface ToolTestimonialsProps {
  testimonials: Testimonial[];
}

const ToolTestimonials = ({ testimonials }: ToolTestimonialsProps) => {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who transformed their data.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(testimonial.rating)
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.clientName} {testimonial.countryFlag}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Verified Purchase
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolTestimonials;
