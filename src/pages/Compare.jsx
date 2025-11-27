import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { laptops, formatPrice } from "@/data/laptops";
import { ChevronLeft, Star, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [compareLaptops, setCompareLaptops] = useState([]);

  useEffect(() => {
    const ids = searchParams.get("ids");
    if (!ids) {
      navigate("/");
      return;
    }

    const laptopIds = ids.split(",");
    const selected = laptops.filter((l) => laptopIds.includes(l.id));

    if (selected.length < 2) {
      navigate("/");
      return;
    }

    setCompareLaptops(selected);
  }, [searchParams, navigate]);

  if (compareLaptops.length === 0) {
    return null;
  }

  // Determine best value for specs
  const getBestValue = (key) => {
    const values = compareLaptops.map((l) => l.specs[key]);
    const uniqueValues = [...new Set(values)];

    if (key === "ram" || key === "storage") {
      const sizes = values.map((v) => parseInt(v));
      const maxSize = Math.max(...sizes);
      return values.filter((v) => parseInt(v) === maxSize);
    }

    if (key === "weight") {
      const weights = values.map((v) => parseFloat(v));
      const minWeight = Math.min(...weights);
      return values.filter((v) => parseFloat(v) === minWeight);
    }

    if (uniqueValues.length === values.length) return [];

    return [];
  };

  const getBestPrice = () => {
    const prices = compareLaptops.map((l) => l.price);
    const minPrice = Math.min(...prices);
    return prices.map((p, i) => (p === minPrice ? i : -1)).filter((i) => i !== -1);
  };

  const getBestRating = () => {
    const ratings = compareLaptops.map((l) => l.rating);
    const maxRating = Math.max(...ratings);
    return ratings.map((r, i) => (r === maxRating ? i : -1)).filter((i) => i !== -1);
  };

  const specLabels = {
    processor: "Processor",
    ram: "RAM",
    storage: "Storage",
    display: "Display",
    graphics: "Graphics",
    battery: "Baterai",
    weight: "Berat",
    os: "Sistem Operasi",
  };

  const bestPrices = getBestPrice();
  const bestRatings = getBestRating();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 gap-2">
            <ChevronLeft className="w-4 h-4" />
            Kembali
          </Button>
          <h1 className="text-3xl font-bold mb-2">Perbandingan Laptop</h1>
          <p className="text-muted-foreground">
            Bandingkan spesifikasi dan fitur dari {compareLaptops.length} laptop pilihan Anda
          </p>
        </div>

        {/* Info Banner */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20 animate-scale-in">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium mb-1">Tips Membaca Perbandingan:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  • Nilai terbaik ditandai dengan{" "}
                  <Badge variant="secondary" className="mx-1 bg-primary/20 text-primary">
                    badge biru
                  </Badge>
                </li>
                <li>• Bandingkan spesifikasi yang penting untuk kebutuhan Anda</li>
                <li>• Pertimbangkan budget dan prioritas yang sudah dipilih</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Comparison Table */}
        <Card className="overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 text-left font-semibold w-48 sticky left-0 bg-muted/50 z-10">
                    Spesifikasi
                  </th>
                  {compareLaptops.map((laptop) => (
                    <th key={laptop.id} className="p-4 text-center min-w-[250px]">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">{laptop.image}</span>
                        <div>
                          <p className="font-bold text-base">{laptop.name}</p>
                          <p className="text-sm font-normal text-muted-foreground">{laptop.brand}</p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price Row */}
                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium sticky left-0 bg-background z-10">Harga</td>
                  {compareLaptops.map((laptop, index) => (
                    <td key={laptop.id} className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-lg font-bold text-primary">{formatPrice(laptop.price)}</span>
                        {bestPrices.includes(index) && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            Termurah
                          </Badge>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Rating Row */}
                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium sticky left-0 bg-background z-10">Rating</td>
                  {compareLaptops.map((laptop, index) => (
                    <td key={laptop.id} className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-semibold">{laptop.rating}</span>
                        </div>
                        {bestRatings.includes(index) && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            Tertinggi
                          </Badge>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Specs Rows */}
                {Object.entries(specLabels).map(([key, label]) => {
                  const bestValues = getBestValue(key);
                  return (
                    <tr key={key} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium sticky left-0 bg-background z-10">{label}</td>
                      {compareLaptops.map((laptop) => {
                        const value = laptop.specs[key];
                        const isBest = bestValues.includes(value);
                        return (
                          <td key={laptop.id} className="p-4 text-center">
                            <div className="flex flex-col items-center gap-1">
                              <span className={isBest ? "font-semibold" : ""}>{value}</span>
                              {isBest && (
                                <Badge variant="secondary" className="bg-primary/20 text-primary">
                                  Terbaik
                                </Badge>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                {/* Strengths Row */}
                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium sticky left-0 bg-background z-10">Keunggulan</td>
                  {compareLaptops.map((laptop) => (
                    <td key={laptop.id} className="p-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {laptop.strengths.map((strength) => (
                          <Badge key={strength} variant="secondary" className="text-xs">
                            {strength === "harga" && "💰 Harga"}
                            {strength === "performa" && "⚡ Performa"}
                            {strength === "baterai" && "🔋 Baterai"}
                            {strength === "ringan" && "🪶 Ringan"}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Suitable For Row */}
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium sticky left-0 bg-background z-10">Cocok Untuk</td>
                  {compareLaptops.map((laptop) => (
                    <td key={laptop.id} className="p-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {laptop.suitableFor.map((use) => (
                          <Badge key={use} variant="outline" className="text-xs">
                            {use === "kuliah" && "📚 Kuliah"}
                            {use === "kerja" && "💼 Kerja"}
                            {use === "desain" && "🎨 Desain"}
                            {use === "gaming" && "🎮 Gaming"}
                            {use === "editing" && "🎬 Editing"}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Actions */}
        <div className="mt-6 flex gap-4 justify-center animate-fade-in">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Pilih Laptop Lain
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0"
          >
            Mulai Pencarian Baru
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Compare;
