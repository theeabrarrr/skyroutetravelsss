import { useState } from "react";
import { Users, Plus, Minus, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface PassengerCounts {
  infants: number;
  children: number;
  adults: number;
}

export const PassengerSelector = () => {
  const [passengers, setPassengers] = useState<PassengerCounts>({
    infants: 0,
    children: 0,
    adults: 1,
  });

  const updateCount = (type: keyof PassengerCounts, increment: boolean) => {
    setPassengers((prev) => {
      const newCount = increment ? prev[type] + 1 : prev[type] - 1;
      return {
        ...prev,
        [type]: Math.max(type === "adults" ? 1 : 0, Math.min(9, newCount)),
      };
    });
  };

  const totalPassengers = passengers.infants + passengers.children + passengers.adults;

  const getDisplayText = () => {
    const parts = [];
    if (passengers.adults > 0) parts.push(`${passengers.adults} Adult${passengers.adults > 1 ? 's' : ''}`);
    if (passengers.children > 0) parts.push(`${passengers.children} Child${passengers.children > 1 ? 'ren' : ''}`);
    if (passengers.infants > 0) parts.push(`${passengers.infants} Infant${passengers.infants > 1 ? 's' : ''}`);
    return parts.join(', ');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal bg-background border-border hover:border-primary transition-colors"
        >
          <Users className="w-4 h-4 text-primary mr-2" />
          <span className="flex-1">{getDisplayText()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-card border-border" align="start">
        <div className="space-y-4">
          {/* Infants */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Baby className="w-4 h-4 text-primary" />
                Infants
              </div>
              <p className="text-xs text-muted-foreground">Under 2 years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("infants", false)}
                disabled={passengers.infants === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold text-foreground">{passengers.infants}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("infants", true)}
                disabled={passengers.infants === 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Children */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-semibold text-foreground">Children</div>
              <p className="text-xs text-muted-foreground">2-12 years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("children", false)}
                disabled={passengers.children === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold text-foreground">{passengers.children}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("children", true)}
                disabled={passengers.children === 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Adults */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-semibold text-foreground">Adults</div>
              <p className="text-xs text-muted-foreground">13+ years</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("adults", false)}
                disabled={passengers.adults === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold text-foreground">{passengers.adults}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-border hover:bg-accent"
                onClick={() => updateCount("adults", true)}
                disabled={passengers.adults === 9}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-sm text-foreground font-semibold">
              Total: {totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
