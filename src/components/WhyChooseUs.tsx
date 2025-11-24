import { Shield, Award, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const features = [{
  icon: Shield,
  title: "Trusted & Secure",
  description: "Licensed travel agency with 15+ years of experience serving South African travelers.",
  stat: "15+ Years"
}, {
  icon: Award,
  title: "Best Prices",
  description: "Exclusive partnerships with major airlines ensure you get the most competitive fares.",
  stat: "Save 30%"
}, {
  icon: Clock,
  title: "24/7 Support",
  description: "Round-the-clock customer service to assist you before, during, and after your journey.",
  stat: "Always Available"
}, {
  icon: Globe,
  title: "Worldwide Coverage",
  description: "Access to flights, visas, and services for destinations across the entire globe.",
  stat: "200+ Countries"
}];
const WhyChooseUs = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            SKY ROUTE TRAVEL & TOURS               
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, reliability, and exceptional service to make your travel dreams a reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 group animate-fade-in-up" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-2">
                  {feature.stat}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;