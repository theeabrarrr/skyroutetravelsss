import { Plane, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
              <Plane className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Sky Route</h1>
              <p className="text-xs opacity-90">Travel & Tours</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Home</a>
            <a href="#deals" className="hover:text-accent transition-colors">Flight Deals</a>
            <a href="#services" className="hover:text-accent transition-colors">Visa Services</a>
            <a href="#services" className="hover:text-accent transition-colors">Passport/ID Services</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
