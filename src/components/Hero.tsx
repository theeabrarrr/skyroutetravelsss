import { useState } from "react";
import { MapPin, Calendar, Plane, CheckCircle2, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-airplane.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { PassengerSelector, type PassengerCounts } from "@/components/PassengerSelector";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const { offset, elementRef } = useParallax(-0.3);
  
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('round-trip');
  const [fromLocation, setFromLocation] = useState('South Africa');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerData, setPassengerData] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0
  });

  const handleGetQuote = () => {
    // Validation
    if (!toLocation.trim()) {
      toast({
        title: "Destination Required",
        description: "Please enter a destination",
        variant: "destructive"
      });
      return;
    }
    if (!departureDate) {
      toast({
        title: "Departure Date Required",
        description: "Please select a departure date",
        variant: "destructive"
      });
      return;
    }
    if (tripType === 'round-trip' && !returnDate) {
      toast({
        title: "Return Date Required",
        description: "Please select a return date for round trip",
        variant: "destructive"
      });
      return;
    }

    // Format dates for display (DD/MM/YYYY)
    const formatDate = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    // Build passenger text
    const passengerParts = [];
    if (passengerData.adults > 0) {
      passengerParts.push(`${passengerData.adults} Adult${passengerData.adults > 1 ? 's' : ''}`);
    }
    if (passengerData.children > 0) {
      passengerParts.push(`${passengerData.children} Child${passengerData.children > 1 ? 'ren' : ''}`);
    }
    if (passengerData.infants > 0) {
      passengerParts.push(`${passengerData.infants} Infant${passengerData.infants > 1 ? 's' : ''}`);
    }
    const passengerText = passengerParts.join(', ');

    // Build trip type text
    const tripTypeText = tripType === 'one-way' ? 'One Way' : 
                         tripType === 'round-trip' ? 'Round Trip' : 
                         'Multi-City';

    // Build WhatsApp message
    let message = `Hi, I need a flight quote.\n\n`;
    message += `Trip Type: ${tripTypeText}\n`;
    message += `From: ${fromLocation}\n`;
    message += `To: ${toLocation}\n`;
    message += `Departure: ${formatDate(departureDate)}\n`;
    
    if (tripType === 'round-trip' && returnDate) {
      message += `Return: ${formatDate(returnDate)}\n`;
    }
    
    message += `Passengers: ${passengerText}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number
    const whatsappNumber = '27742718975';
    
    // Open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section ref={elementRef} className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset}px) scale(1.3)`,
          transformOrigin: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-secondary/10 to-secondary/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Flight Search Form */}
          <Card className="p-8 bg-card border-2 border-border shadow-2xl animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Plane className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-center text-foreground">Find Your Perfect Flight</h3>
            </div>
            
            <div className="space-y-6">
              <Tabs value={tripType} onValueChange={(value) => setTripType(value as any)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-2">
                  <TabsTrigger value="one-way" className="text-sm">
                    One Way
                  </TabsTrigger>
                  <TabsTrigger value="round-trip" className="text-sm">
                    Round Trip
                  </TabsTrigger>
                  <TabsTrigger value="multi-city" className="text-sm">
                    Multi-City
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    From
                  </label>
                  <Input
                    type="text"
                    placeholder="South Africa"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    To (Worldwide)
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter any destination..."
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Departure Date
                  </label>
                  <Input 
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                {tripType !== 'one-way' && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {tripType === 'round-trip' ? 'Return Date' : 'Arrival Date'}
                    </label>
                    <Input 
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  Passengers
                </label>
                <PassengerSelector 
                  passengers={passengerData}
                  onChange={setPassengerData}
                />
              </div>
              
              <Button 
                onClick={handleGetQuote}
                type="button"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 font-bold shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-[1.02]"
              >
                Get Your Best Quote →
              </Button>
            </div>
          </Card>

          {/* Right Column - Company Branding */}
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 drop-shadow-lg">
                Sky Route Travel & Tours
              </h1>
              <p className="text-xl md:text-2xl text-foreground drop-shadow-md mb-8">
                Your Trusted Partner for Global Travel Excellence
              </p>
              <p className="text-lg text-muted-foreground">
                Fly Smoothly from South Africa to the World with the Best Fares, Visit Visas, and Online PAK ID Services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Travelers</div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Destinations</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="border-primary text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
