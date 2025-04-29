
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

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
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-700">Javelin Biotech</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#technology" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Technology</a>
            <a href="#applications" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Applications</a>
            <a href="#research" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Research</a>
            <a href="#team" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Team</a>
            <Button asChild className="ml-4 bg-orange-600 hover:bg-orange-700">
              <a href="#contact">Contact Us</a>
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
          <a href="#technology" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Technology</a>
          <a href="#applications" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Applications</a>
          <a href="#research" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Research</a>
          <a href="#team" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Team</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium bg-orange-600 text-white hover:bg-orange-700 rounded-md">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
