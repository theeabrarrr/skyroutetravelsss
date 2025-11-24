import { Plane, Facebook, Instagram, Twitter, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                <Plane className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Sky Route</h3>
                <p className="text-xs opacity-90">Travel & Tours</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Sky Route Travel & Tours is a contem luxurity and 
              company Deo clazaanitac Democration expart Nationove. 
              Contact detail: ooetect information.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+27 74 271 9875</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>skyroutetours@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#deals" className="hover:text-accent transition-colors">Deals</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
          © 2024 Sky Route Travel & Tours. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
