
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChipFeature = {
  id: number;
  title: string;
  description: string;
  position: string;
  color: string;
};

const ProductPage = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: ChipFeature[] = [
    {
      id: 1,
      title: "Cell Culture Chamber",
      description: "Transparent microchamber designed for optimal cell growth and visualization, supporting various cell types in a physiologically relevant environment.",
      position: "top-[25%] right-[20%]",
      color: "border-orange-500",
    },
    {
      id: 2,
      title: "Media Reservoir",
      description: "Provides continuous nutrient supply and waste removal through microfluidic channels, maintaining stable culture conditions.",
      position: "top-[20%] right-[10%]",
      color: "border-orange-500",
    },
    {
      id: 3,
      title: "Central Hub",
      description: "Control center that integrates fluid flow and sensor data, ensuring precise experimental conditions.",
      position: "top-[35%] left-[50%] transform -translate-x-1/2",
      color: "border-orange-500",
    },
    {
      id: 4,
      title: "Flow Regulator",
      description: "Purple valve system that controls fluid dynamics with precision, simulating physiological shear stress on cells.",
      position: "top-[40%] left-[15%]",
      color: "border-purple-500",
    },
    {
      id: 5,
      title: "Sensor Interface",
      description: "Integrated biosensors for real-time monitoring of cellular responses and microenvironment parameters.",
      position: "top-[50%] left-[15%]",
      color: "border-orange-500",
    },
    {
      id: 6,
      title: "Base Platform",
      description: "Durable foundation that houses all components and provides stable temperature control for consistent experiments.",
      position: "bottom-[15%] left-[20%]",
      color: "border-orange-500",
    }
  ];

  const handleFeatureClick = (id: number) => {
    setActiveFeature(id === activeFeature ? null : id);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Liver-on-Chip Technology (LTC)
          </h1>
          <p className="text-xl max-w-3xl text-center mb-8">
            Advanced microfluidic platform that replicates human liver function for more predictive drug testing and toxicology studies.
          </p>
          <div className="w-16 h-1 bg-orange-400 mb-8"></div>
          <Button className="bg-white text-purple-700 hover:bg-gray-100">
            Download Technical Specifications
          </Button>
        </div>
      </section>
      
      {/* Interactive Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Interactive LTC Chip</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Explore our breakthrough Liver-on-Chip technology by clicking on different components to learn about their function and capabilities.
          </p>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Product Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/279f40b1-bfc3-42ec-bb19-b9b37f27e875.png" 
                alt="Javelin LTC Chip" 
                className="w-full"
              />
              
              {/* Feature Points */}
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature.id)}
                  className={cn(
                    "absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all",
                    activeFeature === feature.id ? "scale-125 z-20" : "z-10",
                    activeFeature && activeFeature !== feature.id ? "opacity-50" : "opacity-100",
                    feature.color === "border-purple-500" ? "bg-purple-500" : "bg-orange-500"
                  )}
                  style={{
                    left: feature.position.includes("left") ? feature.position.split("left-")[1].split("]")[0] : "auto",
                    right: feature.position.includes("right") ? feature.position.split("right-")[1].split("]")[0] : "auto",
                    top: feature.position.includes("top") ? feature.position.split("top-")[1].split("]")[0] : "auto",
                    bottom: feature.position.includes("bottom") ? feature.position.split("bottom-")[1].split("]")[0] : "auto",
                    transform: feature.position.includes("transform") ? "translate(-50%, -50%)" : "none"
                  }}
                >
                  <span className="text-white font-bold">{feature.id}</span>
                </div>
              ))}
            </div>
            
            {/* Feature Description Box */}
            <div className="mt-8">
              {activeFeature ? (
                <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded-r-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {features.find(f => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-gray-600">
                    {features.find(f => f.id === activeFeature)?.description}
                  </p>
                </div>
              ) : (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Click on a numbered point to learn about each feature</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Benefits of LTC Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-600">
                  <path d="M9 12h.01M15 12h.01M12 9a3 3 0 0 0-2.83 4" />
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Predictivity</h3>
              <p className="text-gray-600">More accurately predicts human responses compared to traditional cell culture and animal models.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
                  <path d="M9 18h6" />
                  <path d="M20 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
                  <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">Continuous observation of cellular responses provides dynamic data throughout experiments.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-600">
                  <path d="M20 12V8H6a2 2 0 1 1 0-4h12v4" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                  <path d="M18 12a2 2 0 1 0 0 4h2v-4Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Reduces drug development costs by identifying failures earlier in the process.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Physical Properties</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Dimensions:</span> 75mm × 25mm × 15mm
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Material:</span> Medical-grade transparent polymer
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Cell Chamber Volume:</span> 50-200 μL (adjustable)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Media Reservoir Capacity:</span> Up to 2mL
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Performance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Flow Rate Range:</span> 0.1-10 μL/min
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Cell Viability:</span> >95% for up to 14 days
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Sensor Types:</span> Oxygen, pH, metabolite detection
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium">Imaging Compatibility:</span> Compatible with standard microscopy techniques
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
