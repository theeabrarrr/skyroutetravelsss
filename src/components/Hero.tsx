import { MapPin, Calendar, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-airplane.jpg";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const { offset, elementRef } = useParallax(-0.3);

  return (
    <section ref={elementRef} className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 drop-shadow-2xl">
            Fly Smoothly from South Africa to the World
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 drop-shadow-lg">
            Best Fares, Visit Visas, and Online PAK ID Services at your fingertips
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto p-8 bg-card/95 backdrop-blur-sm border-2 border-accent/30 shadow-2xl shadow-accent/20 animate-scale-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Plane className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-center text-foreground">Find Your Perfect Flight</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  From
                </label>
                <Input
                  type="text"
                  placeholder="South Africa"
                  defaultValue="South Africa"
                  className="bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  To (Worldwide)
                </label>
                <Input
                  type="text"
                  placeholder="Enter any destination..."
                  className="bg-background border-border focus:border-accent transition-colors"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Calendar className="w-4 h-4 text-accent" />
                  Departure Date
                </label>
                <Input 
                  type="date" 
                  className="bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Users className="w-4 h-4 text-accent" />
                  Passengers
                </label>
                <Select defaultValue="1">
                  <SelectTrigger className="bg-background border-border focus:border-accent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4 Passengers</SelectItem>
                    <SelectItem value="5">5+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 font-bold shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-[1.02]">
              Get Your Best Quote →
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
