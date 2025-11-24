import { Shield, CreditCard, FileText, Hotel, FileCheck, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for your travels with competitive rates and reliable support.",
  },
  {
    icon: CreditCard,
    title: "Pak ID Card",
    description: "Quick and hassle-free NADRA ID card services including new issuance and renewals.",
  },
  {
    icon: FileText,
    title: "Pak Passport",
    description: "Fast-track passport services for new applications, renewals, and urgent processing.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Access to the best hotel deals worldwide with secure booking and instant confirmation.",
  },
  {
    icon: FileCheck,
    title: "Visa Applications",
    description: "Expert assistance with visa applications for all destinations with guaranteed approval support.",
  },
  {
    icon: Ticket,
    title: "Tickets",
    description: "Best-priced flight tickets worldwide with flexible booking options and 24/7 customer support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Our Service
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Premium Services</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="text-center bg-card border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-10 pb-8 px-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
