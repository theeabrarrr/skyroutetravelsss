import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-airplane.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fly Smoothly from South Africa to the World
          </h2>
          <p className="text-xl text-white/90">
            Best Fares, Visit Visas, and Online PAK ID Services at your fingertips
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-6">
          <h3 className="text-2xl font-bold text-center mb-6">Flight Search</h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  From
                </label>
                <Select defaultValue="south-africa">
                  <SelectTrigger>
                    <SelectValue placeholder="Select origin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="south-africa">South Africa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  To
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi, Pakistan</SelectItem>
                    <SelectItem value="lahore">Lahore, Pakistan</SelectItem>
                    <SelectItem value="jeddah">Jeddah, Saudi Arabia</SelectItem>
                    <SelectItem value="dubai">Dubai, UAE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Departure Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  Passengers
                </label>
                <Select defaultValue="1">
                  <SelectTrigger>
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
            
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 font-semibold">
              Get a Quote →
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
