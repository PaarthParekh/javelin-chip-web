
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-700">Javelin Biotech</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Products</Link>
            <Link to="/applications" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Applications</Link>
            <Link to="/blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">About</Link>
            <Button asChild className="ml-4 bg-orange-600 hover:bg-orange-700">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link to="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Products</Link>
          <Link to="/applications" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Applications</Link>
          <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Blog</Link>
          <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">About</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium bg-orange-600 text-white hover:bg-orange-700 rounded-md">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
