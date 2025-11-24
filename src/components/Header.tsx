import { MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-primary/95 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sky Route Travel & Tours" className="h-12 w-auto" />
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="relative hover:text-accent transition-colors group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#deals" className="relative hover:text-accent transition-colors group">
                Destinations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="relative hover:text-accent transition-colors group">
                Visa Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="relative hover:text-accent transition-colors group">
                Passport/ID Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="relative hover:text-accent transition-colors group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button 
                asChild
                className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                <a 
                  href="https://wa.me/27742718975" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-accent hover:text-accent/80"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
