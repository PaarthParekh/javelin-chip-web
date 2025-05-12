
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technology />

      {/* Applications Preview Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our LTC platform enables breakthroughs across multiple applications in pharmaceutical research and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Drug Development</h3>
                <p className="text-gray-600 mb-4">
                  Accelerate your drug discovery pipeline with more predictive human-relevant data earlier in the process.
                </p>
                <Button asChild variant="ghost" className="text-purple-700 hover:text-purple-800 p-0">
                  <Link to="/applications">Learn More →</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-orange-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5" />
                  <path d="M14 10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                  <path d="M18 15v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6" />
                  <path d="M6 8h8" />
                  <path d="M6 12h2" />
                  <path d="M9 18h9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Disease Modeling</h3>
                <p className="text-gray-600 mb-4">
                  Create accurate models of liver diseases to better understand disease mechanisms and develop targeted therapies.
                </p>
                <Button asChild variant="ghost" className="text-purple-700 hover:text-purple-800 p-0">
                  <Link to="/applications">Learn More →</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12a4.86 4.86 0 0 0 4 2 4.86 4.86 0 0 0 4-2" />
                  <path d="M8 12a4.86 4.86 0 0 1 4-2 4.86 4.86 0 0 1 4 2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Toxicology Studies</h3>
                <p className="text-gray-600 mb-4">
                  Evaluate compound toxicity with greater physiological relevance and mechanistic insight than traditional methods.
                </p>
                <Button asChild variant="ghost" className="text-purple-700 hover:text-purple-800 p-0">
                  <Link to="/applications">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/applications">Explore All Applications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Liver-on-Chip Technology</h2>
              <p className="text-gray-600 mb-6">
                Our revolutionary LTC platform combines advanced microfluidics, human cell biology, and real-time monitoring to create the most physiologically relevant in vitro liver model available.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500 mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Recreates physiological fluid flow and mechanical forces</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500 mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Supports multiple primary human cell types</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500 mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Built-in sensors for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500 mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Maintains cell viability for extended study periods</span>
                </li>
              </ul>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link to="/products">Explore Our Technology</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-purple-400 opacity-20 rounded-full blur-3xl -z-10"></div>
              <img
                src="/lovable-uploads/279f40b1-bfc3-42ec-bb19-b9b37f27e875.png"
                alt="Javelin LTC Chip"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog & News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Insights</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest advancements in organ-on-chip technology and company news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://source.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Blog Post"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">Research</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  <Link to="/blog" className="hover:text-purple-700">Advancing Liver Disease Research with Organ-on-Chip Technology</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  How our LTC platform is transforming the study of complex liver diseases and enabling more effective therapeutic development.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">April 15, 2025</span>
                  <Button asChild variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 p-0">
                    <Link to="/blog">Read More →</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://source.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Blog Post"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">Innovation</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  <Link to="/blog" className="hover:text-purple-700">The Future of Drug Toxicity Testing: Moving Beyond Animal Models</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Examining the ethical and scientific advantages of organ-on-chip technologies as alternatives to animal testing in drug development.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">April 2, 2025</span>
                  <Button asChild variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 p-0">
                    <Link to="/blog">Read More →</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Blog Post"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">Applications</span>
                <h3 className="text-lg font-bold mt-2 mb-2 line-clamp-2">
                  <Link to="/blog" className="hover:text-purple-700">Precision Medicine Revolution: Patient-Specific Drug Response Testing</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  How organ-on-chip technology using patient-derived cells is enabling truly personalized medicine approaches.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March 21, 2025</span>
                  <Button asChild variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 p-0">
                    <Link to="/blog">Read More →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/blog">View All News & Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our LTC platform can accelerate your drug development pipeline and deliver more predictive results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
