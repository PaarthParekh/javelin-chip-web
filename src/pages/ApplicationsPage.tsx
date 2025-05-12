
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState("drug-development");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Applications
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center mb-6">
            Discover how our Liver-on-Chip technology is revolutionizing multiple fields and accelerating scientific discovery.
          </p>
          <div className="w-16 h-1 bg-orange-400 mx-auto"></div>
        </div>
      </section>

      {/* Main Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <img
              src="/lovable-uploads/dfcc8a55-cea3-4d10-90e0-0a33578dac10.png"
              alt="LTC Applications Diagram"
              className="max-w-3xl mx-auto"
            />
          </div>

          <Tabs defaultValue="drug-development" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
              <TabsTrigger value="drug-development" className="text-left px-4 py-3 data-[state=active]:bg-purple-100">
                Drug Development & Screening
              </TabsTrigger>
              <TabsTrigger value="disease-modeling" className="text-left px-4 py-3 data-[state=active]:bg-purple-100">
                Disease Modeling
              </TabsTrigger>
              <TabsTrigger value="toxicology" className="text-left px-4 py-3 data-[state=active]:bg-purple-100">
                Toxicology Studies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="drug-development" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Drug Development & Screening</h2>
                  <p className="text-gray-600 mb-4">
                    Our LTC platform accelerates the drug development pipeline by providing more predictive data earlier in the process. This allows pharmaceutical companies to identify promising candidates and potential failures before costly clinical trials.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Early efficacy testing with human-relevant models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Mechanistic studies of drug action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Drug-drug interaction assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Dose optimization studies</span>
                    </li>
                  </ul>
                  <Button className="bg-orange-600 hover:bg-orange-700">Request Collaboration</Button>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Case Study: Accelerated Screening</h3>
                  <p className="mb-4">
                    A leading pharmaceutical company utilized our LTC platform to screen a library of 200 compounds for hepatotoxicity in just two weeks, identifying 15 promising candidates that showed no liver toxicity while maintaining efficacy.
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Time Savings</span>
                      <span className="text-green-600 font-medium">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Cost Reduction</span>
                      <span className="text-green-600 font-medium">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="disease-modeling" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Disease Modeling</h2>
                  <p className="text-gray-600 mb-4">
                    Our platform enables researchers to create accurate models of liver diseases, helping to understand disease mechanisms and develop targeted therapies for conditions previously difficult to study in vitro.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Non-alcoholic fatty liver disease (NAFLD) modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Viral hepatitis research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Fibrosis progression studies</span>
                    </li>
                  </ul>
                  <Button className="bg-orange-600 hover:bg-orange-700">Explore Disease Models</Button>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Featured Research: NASH Model</h3>
                  <p className="mb-4">
                    Researchers have successfully developed a model of Non-alcoholic Steatohepatitis (NASH) using our LTC platform, demonstrating key disease hallmarks including fat accumulation, inflammation, and early fibrosis.
                  </p>
                  <img
                    src="https://source.unsplash.com/photo-1518770660439-4636190af475"
                    alt="NASH Disease Model"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-sm text-gray-500 italic">
                    "The LTC platform has enabled us to observe disease progression in ways that were impossible with traditional models." - Dr. Elena Rodriguez, Research Lead
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="toxicology" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Toxicology Studies</h2>
                  <p className="text-gray-600 mb-4">
                    Our LTC technology provides superior toxicological assessment compared to traditional methods, enabling detailed evaluation of compound toxicity mechanisms with greater relevance to human physiology.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Acute and chronic toxicity testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Mechanism-based toxicity evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Metabolism-dependent toxicity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Idiosyncratic toxicity investigation</span>
                    </li>
                  </ul>
                  <Button className="bg-orange-600 hover:bg-orange-700">Download Toxicology Whitepaper</Button>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Toxicology Assay Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-purple-100 text-purple-800">
                          <th className="py-2 px-4 text-left">Feature</th>
                          <th className="py-2 px-4 text-left">2D Culture</th>
                          <th className="py-2 px-4 text-left">Animal Models</th>
                          <th className="py-2 px-4 text-left">LTC Platform</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 px-4 font-medium">Physiological Relevance</td>
                          <td className="py-2 px-4">Low</td>
                          <td className="py-2 px-4">Medium</td>
                          <td className="py-2 px-4 text-green-600 font-medium">High</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 px-4 font-medium">Long-term Studies</td>
                          <td className="py-2 px-4">Limited (3-5 days)</td>
                          <td className="py-2 px-4">Possible</td>
                          <td className="py-2 px-4 text-green-600 font-medium">Up to 28 days</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 px-4 font-medium">Throughput</td>
                          <td className="py-2 px-4">High</td>
                          <td className="py-2 px-4">Low</td>
                          <td className="py-2 px-4 text-green-600 font-medium">Medium-High</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium">Cost</td>
                          <td className="py-2 px-4">Low</td>
                          <td className="py-2 px-4">Very High</td>
                          <td className="py-2 px-4 text-green-600 font-medium">Moderate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our LTC platform can accelerate your specific application and deliver more predictive results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
              <a href="/contact">Request Demo</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationsPage;
