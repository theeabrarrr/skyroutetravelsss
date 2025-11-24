import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 z-40 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-[280px] bg-card border-l border-border z-50 animate-slide-in-right">
        <div className="p-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-accent hover:text-accent/80"
          >
            <X className="w-6 h-6" />
          </Button>

          <nav className="flex flex-col gap-6 mt-12">
            <a 
              href="#" 
              onClick={onClose}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </a>
            <a 
              href="#deals" 
              onClick={onClose}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Destinations
            </a>
            <a 
              href="#services" 
              onClick={onClose}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Visa Services
            </a>
            <a 
              href="#services" 
              onClick={onClose}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Passport/ID Services
            </a>
            <a 
              href="#contact" 
              onClick={onClose}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>

            <Button 
              asChild
              className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            >
              <a 
                href="https://wa.me/27742718975" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
