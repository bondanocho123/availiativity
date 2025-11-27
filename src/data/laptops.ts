export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    battery: string;
    weight: string;
    os: string;
  };
  suitableFor: Array<"kuliah" | "kerja" | "desain" | "gaming" | "editing">;
  strengths: Array<"harga" | "performa" | "baterai" | "ringan">;
  budgetRange: Array<"low" | "mid" | "high">;
  rating: number;
}

export const laptops: Laptop[] = [
  {
    id: "1",
    name: "ASUS VivoBook 14",
    brand: "ASUS",
    price: 4500000,
    image: "💻",
    specs: {
      processor: "Intel Core i3-1115G4",
      ram: "4GB DDR4",
      storage: "256GB SSD",
      display: "14\" FHD (1920x1080)",
      graphics: "Intel UHD Graphics",
      battery: "42Wh, ~7 jam",
      weight: "1.4 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["kuliah", "kerja"],
    strengths: ["harga", "ringan", "baterai"],
    budgetRange: ["low"],
    rating: 4.2,
  },
  {
    id: "2",
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    price: 4800000,
    image: "💻",
    specs: {
      processor: "AMD Ryzen 3 5300U",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      display: "14\" FHD (1920x1080)",
      graphics: "AMD Radeon Graphics",
      battery: "45Wh, ~8 jam",
      weight: "1.4 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["kuliah", "kerja"],
    strengths: ["harga", "baterai"],
    budgetRange: ["low"],
    rating: 4.3,
  },
  {
    id: "3",
    name: "HP Pavilion 14",
    brand: "HP",
    price: 7200000,
    image: "💻",
    specs: {
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "14\" FHD (1920x1080)",
      graphics: "Intel Iris Xe Graphics",
      battery: "51Wh, ~9 jam",
      weight: "1.4 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["kuliah", "kerja", "desain"],
    strengths: ["baterai", "performa"],
    budgetRange: ["mid"],
    rating: 4.5,
  },
  {
    id: "4",
    name: "ASUS ZenBook 14",
    brand: "ASUS",
    price: 9500000,
    image: "💻",
    specs: {
      processor: "Intel Core i5-1240P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "14\" OLED FHD (1920x1080)",
      graphics: "Intel Iris Xe Graphics",
      battery: "63Wh, ~12 jam",
      weight: "1.39 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["kuliah", "kerja", "desain"],
    strengths: ["ringan", "baterai", "performa"],
    budgetRange: ["mid"],
    rating: 4.7,
  },
  {
    id: "5",
    name: "Acer Swift 3",
    brand: "Acer",
    price: 8500000,
    image: "💻",
    specs: {
      processor: "AMD Ryzen 5 5500U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14\" FHD IPS (1920x1080)",
      graphics: "AMD Radeon Graphics",
      battery: "56Wh, ~11 jam",
      weight: "1.2 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["kuliah", "kerja", "desain"],
    strengths: ["ringan", "baterai", "performa"],
    budgetRange: ["mid"],
    rating: 4.6,
  },
  {
    id: "6",
    name: "MSI Modern 14",
    brand: "MSI",
    price: 9800000,
    image: "💻",
    specs: {
      processor: "Intel Core i7-1255U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14\" FHD (1920x1080)",
      graphics: "Intel Iris Xe Graphics",
      battery: "52Wh, ~10 jam",
      weight: "1.4 kg",
      os: "Windows 11 Pro",
    },
    suitableFor: ["kerja", "desain"],
    strengths: ["performa", "baterai"],
    budgetRange: ["mid"],
    rating: 4.5,
  },
  {
    id: "7",
    name: "ASUS TUF Gaming A15",
    brand: "ASUS",
    price: 11500000,
    image: "🎮",
    specs: {
      processor: "AMD Ryzen 5 5600H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD 144Hz",
      graphics: "NVIDIA RTX 3050 4GB",
      battery: "90Wh, ~6 jam",
      weight: "2.3 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["gaming", "editing", "desain"],
    strengths: ["performa"],
    budgetRange: ["high"],
    rating: 4.6,
  },
  {
    id: "8",
    name: "Lenovo IdeaPad Gaming 3",
    brand: "Lenovo",
    price: 10800000,
    image: "🎮",
    specs: {
      processor: "AMD Ryzen 5 5600H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD 120Hz",
      graphics: "NVIDIA GTX 1650 4GB",
      battery: "60Wh, ~5 jam",
      weight: "2.2 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["gaming", "editing"],
    strengths: ["performa", "harga"],
    budgetRange: ["high"],
    rating: 4.4,
  },
  {
    id: "9",
    name: "MSI Creator Z16",
    brand: "MSI",
    price: 18500000,
    image: "🎨",
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: "16\" QHD+ (2560x1600)",
      graphics: "NVIDIA RTX 3060 6GB",
      battery: "90Wh, ~7 jam",
      weight: "2.2 kg",
      os: "Windows 11 Pro",
    },
    suitableFor: ["desain", "editing"],
    strengths: ["performa"],
    budgetRange: ["high"],
    rating: 4.8,
  },
  {
    id: "10",
    name: "MacBook Air M2",
    brand: "Apple",
    price: 17500000,
    image: "🍎",
    specs: {
      processor: "Apple M2 8-core",
      ram: "8GB Unified Memory",
      storage: "256GB SSD",
      display: "13.6\" Liquid Retina (2560x1664)",
      graphics: "Apple M2 10-core GPU",
      battery: "52.6Wh, ~15 jam",
      weight: "1.24 kg",
      os: "macOS",
    },
    suitableFor: ["kuliah", "kerja", "desain"],
    strengths: ["baterai", "ringan", "performa"],
    budgetRange: ["high"],
    rating: 4.9,
  },
  {
    id: "11",
    name: "Dell XPS 13",
    brand: "Dell",
    price: 19500000,
    image: "💻",
    specs: {
      processor: "Intel Core i7-1260P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "13.4\" FHD+ (1920x1200)",
      graphics: "Intel Iris Xe Graphics",
      battery: "51Wh, ~12 jam",
      weight: "1.27 kg",
      os: "Windows 11 Pro",
    },
    suitableFor: ["kerja", "desain"],
    strengths: ["ringan", "baterai", "performa"],
    budgetRange: ["high"],
    rating: 4.8,
  },
  {
    id: "12",
    name: "ASUS ROG Strix G15",
    brand: "ASUS",
    price: 21500000,
    image: "🎮",
    specs: {
      processor: "AMD Ryzen 7 6800H",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6\" QHD 165Hz",
      graphics: "NVIDIA RTX 3070 Ti 8GB",
      battery: "90Wh, ~5 jam",
      weight: "2.5 kg",
      os: "Windows 11 Home",
    },
    suitableFor: ["gaming", "editing"],
    strengths: ["performa"],
    budgetRange: ["high"],
    rating: 4.7,
  },
];

export const getRecommendedLaptops = (
  usage: string | null,
  priority: string | null,
  budget: string | null
): Laptop[] => {
  return laptops
    .filter((laptop) => {
      // Filter by usage
      if (usage && !laptop.suitableFor.includes(usage as any)) return false;
      
      // Filter by budget
      if (budget && !laptop.budgetRange.includes(budget as any)) return false;
      
      return true;
    })
    .sort((a, b) => {
      // Sort by priority
      if (priority) {
        const aHasPriority = a.strengths.includes(priority as any);
        const bHasPriority = b.strengths.includes(priority as any);
        
        if (aHasPriority && !bHasPriority) return -1;
        if (!aHasPriority && bHasPriority) return 1;
      }
      
      // Then by rating
      return b.rating - a.rating;
    })
    .slice(0, 6); // Return top 6 results
};

export const formatPrice = (price: number): string => {
  return `Rp ${(price / 1000000).toFixed(1)} juta`;
};
