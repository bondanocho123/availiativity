import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/Dev..png" alt="Logo CariLaptop" className="h-20 w-20 object-contain" />
            <img src="/carilaptop.com.png" alt="Logo CariLaptop" className="h-24 w-auto object-contain"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
