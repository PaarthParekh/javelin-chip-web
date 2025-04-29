
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-purple-600 text-white">
      {/* Background abstract shape */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="400" cy="400" r="150" fill="white" opacity="0.1" filter="url(#glow)" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Precision Organ-On-Chip <br className="hidden md:block" />
              <span className="text-orange-300">Technology Platform</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg animate-fade-up">
              Accelerating drug discovery with microfluidic human-relevant in vitro models that revolutionize preclinical testing.
            </p>
            <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-200 group">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-10 w-full h-full bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
              <div className="glass-panel p-6 rounded-xl shadow-2xl relative">
                <img 
                  src="/lovable-uploads/279f40b1-bfc3-42ec-bb19-b9b37f27e875.png" 
                  alt="Organ-on-chip technology visualization" 
                  className="rounded-lg w-full"
                />
                <div className="mt-6 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-white">Liver-Tissue-Chip Platform</h3>
                  <p className="text-sm text-gray-200 mb-2">
                    Advanced microfluidic system with real-time monitoring capabilities
                  </p>
                  <Button asChild variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    <Link to="/products">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured section */}
      <div className="relative z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Predictive Data</h3>
              </div>
              <p className="text-sm text-gray-200">Human-relevant results that better predict clinical outcomes</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Global Impact</h3>
              </div>
              <p className="text-sm text-gray-200">Advancing healthcare through innovative technology solutions</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Ethical Testing</h3>
              </div>
              <p className="text-sm text-gray-200">Reducing animal testing with more accurate human models</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 80C960 70 1056 50 1152 45C1248 40 1344 50 1392 55L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
