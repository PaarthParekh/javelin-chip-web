
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  const features = [
    {
      title: "Microfluidic Precision",
      description: "Our proprietary microfluidic chip design provides precise control over fluid flow, mimicking in vivo conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1 2-2h1" />
          <path d="M7 8h8" />
          <path d="M7 6h8" />
          <path d="M11 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </svg>
      )
    },
    {
      title: "Human Cell Integration",
      description: "Culture multiple primary human cell types in a physiologically relevant microenvironment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12a4.86 4.86 0 0 0 4 2 4.86 4.86 0 0 0 4-2" />
          <path d="M8 12a4.86 4.86 0 0 1 4-2 4.86 4.86 0 0 1 4 2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of cellular responses using embedded biosensors and imaging capabilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <path d="m13 13 6 6" />
        </svg>
      )
    },
    {
      title: "Multi-Organ Systems",
      description: "Connect multiple organ models to study complex inter-organ interactions and systemic drug effects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
          <path d="M4 6V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M8 18v-7.7a4 4 0 0 1 8 0V18" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Platform</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Javelin's proprietary organ-on-chip platform enables more accurate modeling of human physiology for better drug development decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Microfluidic Design</h3>
            <p className="text-gray-600 mb-6">
              Our platform utilizes state-of-the-art microfluidic technology to recreate the dynamic microenvironment of human tissues and organs. This allows for precise control of fluid flow, nutrient delivery, and mechanical forces that are critical for proper cell function.
            </p>
            <p className="text-gray-600">
              By integrating multiple cell types within a physiologically relevant 3D structure, we enable more predictive modeling of drug effects than traditional in vitro methods, leading to better translation to human outcomes.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-orange-400 opacity-20 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://source.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="Microfluidic chip design" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
