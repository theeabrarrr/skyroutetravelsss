import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import karachiImage from "@/assets/karachi.jpg";
import lahoreImage from "@/assets/lahore.jpg";
import jeddahImage from "@/assets/jeddah.jpg";

const deals = [
  {
    image: karachiImage,
    city: "Karachi",
    description: "Karachi is the headquarters of Karachi, Mazar-e-Quaid.",
    price: "R5000",
  },
  {
    image: lahoreImage,
    city: "Lahore",
    description: "Badshahi Mosque is an Badshahi Mosque in embroidonment in Lahore.",
    price: "R5500",
  },
  {
    image: jeddahImage,
    city: "Jeddah",
    description: "King Fahd Fountain is an imposalmentmanin ing king Fahd fountain.",
    price: "R6000",
  },
];

const FeaturedDeals = () => {
  return (
    <section id="deals" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Featured Deals
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Popular Destinations from South Africa
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.city}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Starting from<br/>{deal.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{deal.city}</h3>
                <p className="text-sm text-muted-foreground">{deal.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full">
                  View Deal
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
