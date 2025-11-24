import { Plane } from "lucide-react";

const partners = [
  "Emirates", "Qatar Airways", "Turkish Airlines", "Ethiopian Airlines", 
  "South African Airways", "British Airways", "Etihad Airways", "KLM"
];

const PartnersBar = () => {
  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            Our Partners
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Trusted Airline Partners
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Plane className="w-8 h-8 text-accent mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-center text-muted-foreground group-hover:text-accent transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
