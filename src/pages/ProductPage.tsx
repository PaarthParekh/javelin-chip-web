
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Liver-Tissue-Chip
                <span className="text-orange-300"> (LTC) Platform</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Our revolutionary organ-on-chip technology recreates the complex microenvironment of the human liver, enabling more predictive drug testing and disease modeling.
              </p>
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <a href="#features">Explore Features</a>
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
              <div className="glass-panel p-6 rounded-xl shadow-2xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <img
                  src="/lovable-uploads/279f40b1-bfc3-42ec-bb19-b9b37f27e875.png"
                  alt="LTC Chip"
                  className="rounded-lg w-full"
                />
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                    Next-Generation Liver Model
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 80C960 70 1056 50 1152 45C1248 40 1344 50 1392 55L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">LTC Platform Features</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative platform combines advanced microfluidics, tissue engineering, and real-time monitoring for unprecedented liver modeling capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-purple-700">Advanced Microfluidic System</h3>
              <p className="text-gray-600 mb-6">
                The LTC incorporates a precision-engineered microfluidic network that replicates physiological fluid flows and forces found in the human liver microenvironment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Flow Control:</span> Precise regulation of media flow rates simulating blood flow through liver sinusoids
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Multiple Chambers:</span> Compartmentalized design allows for simulation of zonation and different liver regions
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Low Shear Stress:</span> Optimized fluid dynamics maintain cell integrity while allowing nutrient and oxygen exchange
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-orange-400 opacity-10 rounded-full blur-3xl"></div>
              <img
                src="/LTCchip.png"
                alt="Microfluidic System"
                className="rounded-lg shadow-xl w-full relative z-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
              <img
                src="/LTCmulticell.png"
                alt="Cell Integration"
                className="rounded-lg shadow-xl w-full relative z-10"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-700">Multi-Cellular Architecture</h3>
              <p className="text-gray-600 mb-6">
                The LTC platform supports the co-culture of multiple human liver cell types, recreating the complex cellular interactions crucial for authentic liver function.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Primary Hepatocytes:</span> Maintains differentiated functions including metabolism, protein synthesis, and detoxification
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Non-Parenchymal Cells:</span> Includes Kupffer cells, stellate cells, and liver sinusoidal endothelial cells
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Cell Viability:</span> &gt;95% for up to 14 days
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-purple-700">Controlled Flow through the Chip</h3>
              <p className="text-gray-600 mb-6">
                The LTC incorporates multiple non-invasive sensors for real-time monitoring of key physiological parameters and cellular responses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Oxygen Sensors:</span> Monitor oxygen gradients across different zones
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">pH Monitoring:</span> Continuous tracking of metabolic activity and media conditions
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Temperature Control:</span> Precise thermal regulation of the microenvironment
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-orange-400 opacity-10 rounded-full blur-3xl"></div>
              <img
                src="/Flow+chip.png"
                alt="Sensing Technology"
                className="rounded-lg shadow-xl w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary Visualization Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Complete LTC Solution</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform delivers unprecedented capabilities for drug development, disease modeling, and precision medicine applications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600">
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Microfluidics</h3>
                  <p className="text-gray-600">Recreates physiological fluid flow and mechanical forces critical for liver function</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-600">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Cell Integration</h3>
                  <p className="text-gray-600">Supports multiple primary human cell types to recreate liver complexity</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Real-Time Monitoring</h3>
                  <p className="text-gray-600">Built-in sensors capture vital data for comprehensive analysis</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                  Our LTC platform maintains functionality for extended study periods, enabling both acute and chronic testing protocols with reliable, reproducible results.
                </p>

                <div className="inline-flex flex-wrap justify-center gap-4">
                  <span className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Metabolism Studies</span>
                  <span className="py-2 px-4 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Toxicity Screening</span>
                  <span className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Disease Modeling</span>
                  <span className="py-2 px-4 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Drug Efficacy</span>
                  <span className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Personalized Medicine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a demonstration or consultation with our team to explore how our LTC platform can enhance your drug development pipeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
              <Link to="/applications">Explore Applications</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
