import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent mb-4">Sky Route Travel</h3>
            <p className="text-foreground/80 leading-relaxed">
              Your trusted partner for seamless travel experiences from South Africa to the world. We make your journey extraordinary.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+27 74 271 9875</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>skyroutetours@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#deals" className="text-foreground/80 hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Flight Booking</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Visa Services</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Passport & ID</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Travel Insurance</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Hotel Booking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Newsletter</h4>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Subscribe to get exclusive deals and travel updates
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background/10 border-accent/30 text-foreground placeholder:text-foreground/50 focus:border-accent"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-accent hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-accent hover:text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-accent hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8 text-center">
          <p className="text-foreground/70">
            © {new Date().getFullYear()} Sky Route Travel & Tours. All rights reserved. | Licensed Travel Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
