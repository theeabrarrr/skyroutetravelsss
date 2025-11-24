import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dubaiImage from "@/assets/dubai.jpg";
import londonImage from "@/assets/london.jpg";
import istanbulImage from "@/assets/istanbul.jpg";
import parisImage from "@/assets/paris.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import newyorkImage from "@/assets/newyork.jpg";

const destinations = [
  {
    image: dubaiImage,
    city: "Dubai",
    country: "United Arab Emirates",
    description: "Experience luxury like nowhere else. Marvel at the iconic Burj Khalifa, explore traditional souks, and indulge in world-class shopping and dining experiences.",
  },
  {
    image: londonImage,
    city: "London",
    country: "United Kingdom",
    description: "Discover centuries of history and culture. From the Tower of London to Buckingham Palace, experience the perfect blend of royal heritage and modern sophistication.",
  },
  {
    image: istanbulImage,
    city: "Istanbul",
    country: "Turkey",
    description: "Where East meets West. Explore magnificent mosques, vibrant bazaars, and stunning Bosphorus views in this enchanting city bridging two continents.",
  },
  {
    image: parisImage,
    city: "Paris",
    country: "France",
    description: "The City of Light awaits. Visit the iconic Eiffel Tower, stroll along the Champs-Élysées, and immerse yourself in world-renowned art and cuisine.",
  },
  {
    image: maldivesImage,
    city: "Maldives",
    country: "Indian Ocean",
    description: "Paradise on Earth. Crystal-clear turquoise waters, pristine white beaches, and luxurious overwater villas create the ultimate tropical escape.",
  },
  {
    image: newyorkImage,
    city: "New York",
    country: "United States",
    description: "The city that never sleeps. Experience iconic landmarks like the Statue of Liberty, Times Square, and Central Park in America's most vibrant metropolis.",
  },
];

const PopularDestinations = () => {
  return (
    <section id="deals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            Explore the World
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover breathtaking destinations and create unforgettable memories around the globe
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.city}</h3>
                  <p className="text-sm text-white/90 font-medium">{destination.country}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">{destination.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Explore This Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
