import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Khan",
    location: "Cape Town, South Africa",
    rating: 5,
    text: "Sky Route made my travel to Pakistan seamless! The visa process was quick and their flight deals were unbeatable. Highly professional service.",
  },
  {
    name: "Ahmed Patel",
    location: "Johannesburg, South Africa",
    rating: 5,
    text: "Excellent service for passport renewal. The team was responsive and handled everything efficiently. I'll definitely use them again.",
  },
  {
    name: "Zainab Essop",
    location: "Durban, South Africa",
    text: "Found the best hotel deals through Sky Route. Their customer support is outstanding and available 24/7. Truly a reliable travel partner!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
