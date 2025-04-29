
import { Button } from "@/components/ui/button";

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
              Advanced Organ-On-Chip <br className="hidden md:block" />
              <span className="text-orange-300">Technology Platform</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg animate-fade-up">
              Accelerating drug discovery with microfluidic human-relevant in vitro models that revolutionize preclinical testing.
            </p>
            <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-200">
                <a href="#technology">Learn More</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-full h-full bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
              <div className="relative glass-panel p-6 rounded-xl shadow-2xl">
                <img 
                  src="https://source.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                  alt="Organ-on-chip technology visualization" 
                  className="rounded-lg w-full"
                />
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full">
                    Next-Generation Preclinical Testing
                  </span>
                </div>
              </div>
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
