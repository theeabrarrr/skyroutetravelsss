import { Handshake, DollarSign, Clock } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Trusted Airline Partners",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
  },
  {
    icon: Clock,
    title: "24/7 Support",
  },
];

const TrustBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-primary py-12 border-y border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 text-primary-foreground group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
