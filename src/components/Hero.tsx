import { useState, useEffect } from "react";
import { MapPin, Calendar, Plane, CheckCircle2, Star, Award, Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-airplane.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { PassengerSelector, type PassengerCounts } from "@/components/PassengerSelector";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Airport = {
  id: string;
  iata_code: string;
  name: string;
  city: string;
  country: string;
};

const Hero = () => {
  const { offset, elementRef } = useParallax(-0.3);
  
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('round-trip');
  const [fromLocation, setFromLocation] = useState<Airport | null>(null);
  const [toLocation, setToLocation] = useState<Airport | null>(null);
  const [originOpen, setOriginOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerData, setPassengerData] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [fromSearchQuery, setFromSearchQuery] = useState('');
  const [fromSearchResults, setFromSearchResults] = useState<Airport[]>([]);
  const [isFromSearching, setIsFromSearching] = useState(false);
  
  const [toSearchQuery, setToSearchQuery] = useState('');
  const [toSearchResults, setToSearchResults] = useState<Airport[]>([]);
  const [isToSearching, setIsToSearching] = useState(false);

  // Debounced airport search for "From" field
  useEffect(() => {
    const searchAirports = async () => {
      if (fromSearchQuery.length < 2) {
        setFromSearchResults([]);
        setIsFromSearching(false);
        return;
      }

      setIsFromSearching(true);

      try {
        const { data, error } = await supabase
          .from('airports')
          .select('id, iata_code, name, city, country')
          .or(`iata_code.ilike.%${fromSearchQuery}%,city.ilike.%${fromSearchQuery}%,country.ilike.%${fromSearchQuery}%,name.ilike.%${fromSearchQuery}%`)
          .order('city')
          .limit(50);

        if (error) throw error;
        setFromSearchResults(data || []);
      } catch (error) {
        console.error('Airport search error:', error);
        setFromSearchResults([]);
      } finally {
        setIsFromSearching(false);
      }
    };

    const timer = setTimeout(() => {
      searchAirports();
    }, 300);

    return () => clearTimeout(timer);
  }, [fromSearchQuery]);

  // Debounced airport search for "To" field
  useEffect(() => {
    const searchAirports = async () => {
      if (toSearchQuery.length < 2) {
        setToSearchResults([]);
        setIsToSearching(false);
        return;
      }

      setIsToSearching(true);

      try {
        const { data, error } = await supabase
          .from('airports')
          .select('id, iata_code, name, city, country')
          .or(`iata_code.ilike.%${toSearchQuery}%,city.ilike.%${toSearchQuery}%,country.ilike.%${toSearchQuery}%,name.ilike.%${toSearchQuery}%`)
          .order('city')
          .limit(50);

        if (error) throw error;
        setToSearchResults(data || []);
      } catch (error) {
        console.error('Airport search error:', error);
        setToSearchResults([]);
      } finally {
        setIsToSearching(false);
      }
    };

    const timer = setTimeout(() => {
      searchAirports();
    }, 300);

    return () => clearTimeout(timer);
  }, [toSearchQuery]);

  const handleGetQuote = async () => {
    // Validation
    if (!fromLocation) {
      toast({
        title: "Origin Required",
        description: "Please select your departure airport",
        variant: "destructive"
      });
      return;
    }
    if (!toLocation) {
      toast({
        title: "Destination Required",
        description: "Please select a destination airport",
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
    message += `From: ${fromLocation.city} (${fromLocation.iata_code}) - ${fromLocation.country}\n`;
    message += `To: ${toLocation.city} (${toLocation.iata_code}) - ${toLocation.country}\n`;
    message += `Departure: ${formatDate(departureDate)}\n`;
    
    if (tripType === 'round-trip' && returnDate) {
      message += `Return: ${formatDate(returnDate)}\n`;
    }
    
    message += `Passengers: ${passengerText}`;

    // Save lead to database
    try {
      const { error: leadError } = await supabase
        .from('booking_leads')
        .insert({
          trip_type: tripType,
          from_location: fromLocation.city,
          from_airport_id: fromLocation.id,
          to_location: toLocation.city,
          to_airport_id: toLocation.id,
          departure_date: departureDate,
          return_date: tripType === 'round-trip' ? returnDate : null,
          adults: passengerData.adults,
          children: passengerData.children,
          infants: passengerData.infants,
          whatsapp_message: message,
          whatsapp_sent: true,
          whatsapp_sent_at: new Date().toISOString(),
        });

      if (leadError) {
        console.error('Error saving lead:', leadError);
      }
    } catch (error) {
      console.error('Unexpected error saving lead:', error);
    }

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number
    const whatsappNumber = '27742718975';
    
    // Open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    toast({
      title: "Quote Request Sent!",
      description: "Opening WhatsApp... We'll get back to you shortly.",
    });
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
                    From (Worldwide)
                  </label>
                  <Popover open={originOpen} onOpenChange={setOriginOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={originOpen}
                        className="w-full justify-between bg-background border-border hover:bg-background hover:border-primary transition-colors h-10 font-normal"
                      >
                        {fromLocation ? `${fromLocation.city} (${fromLocation.iata_code})` : "Select departure airport..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0 bg-background border-border z-50" align="start">
                      <Command className="bg-background" shouldFilter={false}>
                        <CommandInput 
                          placeholder="Search city, airport, or code..." 
                          className="h-9"
                          value={fromSearchQuery}
                          onValueChange={setFromSearchQuery}
                        />
                        <CommandList className="max-h-[300px]">
                          {isFromSearching ? (
                            <div className="flex items-center justify-center py-8">
                              <Loader2 className="w-5 h-5 animate-spin text-primary" />
                              <span className="ml-2 text-sm text-muted-foreground">Searching airports...</span>
                            </div>
                          ) : fromSearchResults.length === 0 ? (
                            <CommandEmpty>
                              {fromSearchQuery.length < 2 
                                ? "Type at least 2 characters to search..." 
                                : "No airports found."}
                            </CommandEmpty>
                          ) : (
                            <CommandGroup>
                              {fromSearchResults.map((airport) => (
                                <CommandItem
                                  key={airport.id}
                                  value={airport.iata_code}
                                  onSelect={() => {
                                    setFromLocation(airport);
                                    setOriginOpen(false);
                                    setFromSearchQuery('');
                                  }}
                                  className="cursor-pointer"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4 shrink-0",
                                      fromLocation?.id === airport.id ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold">{airport.city}</span>
                                      <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                        {airport.iata_code}
                                      </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {airport.name}, {airport.country}
                                    </span>
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          )}
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    To (Worldwide)
                  </label>
                  <Popover open={destinationOpen} onOpenChange={setDestinationOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={destinationOpen}
                        className="w-full justify-between bg-background border-border hover:bg-background hover:border-primary transition-colors h-10 font-normal"
                      >
                        {toLocation ? `${toLocation.city} (${toLocation.iata_code})` : "Select destination..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0 bg-background border-border z-50" align="start">
                      <Command className="bg-background" shouldFilter={false}>
                        <CommandInput 
                          placeholder="Search city, airport, or code..." 
                          className="h-9"
                          value={toSearchQuery}
                          onValueChange={setToSearchQuery}
                        />
                        <CommandList className="max-h-[300px]">
                          {isToSearching ? (
                            <div className="flex items-center justify-center py-8">
                              <Loader2 className="w-5 h-5 animate-spin text-primary" />
                              <span className="ml-2 text-sm text-muted-foreground">Searching airports...</span>
                            </div>
                          ) : toSearchResults.length === 0 ? (
                            <CommandEmpty>
                              {toSearchQuery.length < 2 
                                ? "Type at least 2 characters to search..." 
                                : "No airports found."}
                            </CommandEmpty>
                          ) : (
                            <CommandGroup>
                              {toSearchResults.map((airport) => (
                                <CommandItem
                                  key={airport.id}
                                  value={airport.iata_code}
                                  onSelect={() => {
                                    setToLocation(airport);
                                    setDestinationOpen(false);
                                    setToSearchQuery('');
                                  }}
                                  className="cursor-pointer"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4 shrink-0",
                                      toLocation?.id === airport.id ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold">{airport.city}</span>
                                      <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                        {airport.iata_code}
                                      </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {airport.name}, {airport.country}
                                    </span>
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          )}
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
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
