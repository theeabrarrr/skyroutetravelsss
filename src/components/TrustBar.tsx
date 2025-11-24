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
    <div className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 text-primary-foreground">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
