import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Check } from "lucide-react";
import { formatPrice } from "@/data/laptops";

export const LaptopCard = ({ laptop, onCompare, isSelected, compact }) => {
  return (
    <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{laptop.image}</span>
          <div>
            <h3 className="font-bold text-lg">{laptop.name}</h3>
            <p className="text-sm text-muted-foreground">{laptop.brand}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-semibold">{laptop.rating}</span>
        </div>
      </div>

      {!compact && (
        <>
          <div className="space-y-2 mb-4 flex-1">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Processor:</span>
                <p className="font-medium">{laptop.specs.processor}</p>
              </div>
              <div>
                <span className="text-muted-foreground">RAM:</span>
                <p className="font-medium">{laptop.specs.ram}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Storage:</span>
                <p className="font-medium">{laptop.specs.storage}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Graphics:</span>
                <p className="font-medium">{laptop.specs.graphics}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {laptop.strengths.slice(0, 3).map((strength) => (
              <Badge key={strength} variant="secondary" className="text-xs">
                {strength === "harga" && "💰 Harga Terjangkau"}
                {strength === "performa" && "⚡ Performa Tinggi"}
                {strength === "baterai" && "🔋 Baterai Awet"}
                {strength === "ringan" && "🪶 Ringan"}
              </Badge>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="text-2xl font-bold text-primary">{formatPrice(laptop.price)}</p>
        </div>
        {onCompare && (
          <Button
            onClick={() => onCompare(laptop)}
            variant={isSelected ? "default" : "outline"}
            size="sm"
            className="gap-2"
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4" />
                Dipilih
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Bandingkan
              </>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
};
