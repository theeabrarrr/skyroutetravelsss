import { Shield, CreditCard, FileText, Hotel } from "lucide-react";
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
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Our Service
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Premium Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
