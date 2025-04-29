
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const AboutPage = () => {
  const leadership: TeamMember[] = [
    {
      name: "Dr. Jennifer Parker",
      role: "Founder & CEO",
      bio: "Jennifer founded Javelin Biotech after a distinguished academic career at MIT, where she pioneered innovative microfluidic technologies for biomedical applications.",
      image: "https://source.unsplash.com/photo-1487412720507-e7ab37603c6f"
    },
    {
      name: "Dr. Robert Chen",
      role: "Chief Scientific Officer",
      bio: "With over 20 years of experience in liver biology and drug development, Robert leads our scientific strategy and research initiatives.",
      image: "https://source.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Dr. Sarah Williams",
      role: "VP of Technology",
      bio: "Sarah oversees the development of our microfluidic chip technology, driving innovation and ensuring product reliability and performance.",
      image: "https://source.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Thompson",
      role: "Chief Business Officer",
      bio: "Michael brings extensive experience in biotechnology commercialization and strategic partnerships to drive Javelin's market growth.",
      image: "https://source.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];
  
  const timeline: TimelineEvent[] = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Javelin Biotech was established to commercialize revolutionary organ-on-chip technology developed at MIT."
    },
    {
      year: "2019",
      title: "Seed Funding",
      description: "Secured $5.2M seed funding to accelerate platform development and expand research capabilities."
    },
    {
      year: "2020",
      title: "First Prototype",
      description: "Developed and validated first-generation LTC prototype, demonstrating superior predictive capabilities."
    },
    {
      year: "2021",
      title: "Key Partnerships",
      description: "Established partnerships with three top pharmaceutical companies for collaborative research projects."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $28M in Series A financing to expand operations and accelerate product development."
    },
    {
      year: "2023",
      title: "Commercial Launch",
      description: "Official commercial launch of the LTC platform, with first customer deployments."
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded facilities and doubled team size to meet growing demand. Launched next-generation LTC platform."
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Established presence in Europe and Asia, with clients spanning 15 countries and all major pharma companies."
    }
  ];
  
  const values = [
    {
      title: "Scientific Integrity",
      description: "We uphold the highest standards of scientific rigor in all our research and development activities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M9 12h.01M15 12h.01M12 9a3 3 0 0 0-2.83 4" />
          <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We continuously push technological boundaries to develop solutions that transform biomedical research.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M9 18h6" />
          <path d="M20 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      )
    },
    {
      title: "Impact",
      description: "We focus on developing technologies that make a meaningful difference in healthcare and drug development.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <path d="m13 13 6 6" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships to accelerate discovery and bring innovations to market faster.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 6c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4Z" />
          <path d="m24 16-4-1-7 4v5" />
          <path d="M11 14v5" />
          <path d="M4 21v-5l7-4 1.3.3" />
          <path d="m22 16-3-5-8 5" />
          <path d="M8 11.1 2 16" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Javelin Biotech
              </h1>
              <p className="text-xl mb-8">
                We're on a mission to transform drug development with breakthrough organ-on-chip technology that provides more predictive human data, earlier.
              </p>
              <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
                <a href="#our-story">Our Story</a>
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/aa2e95a7-f49c-4130-83ec-bc2cd7a9dd52.png" 
                alt="Javelin Biotech Team" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by leaders in bioengineering and pharmaceutical sciences, Javelin Biotech is revolutionizing drug development through advanced organ-on-chip technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Beginning</h3>
              <p className="text-gray-600 mb-4">
                Javelin Biotech was born out of groundbreaking research at the Massachusetts Institute of Technology, where our founding team developed novel microfluidic platforms that could accurately model human liver function outside the body.
              </p>
              <p className="text-gray-600 mb-4">
                Recognizing the transformative potential of this technology for drug development, our founders established Javelin Biotech in 2018 with a mission to bridge the gap between traditional laboratory testing and clinical outcomes.
              </p>
              <p className="text-gray-600">
                Since then, we've grown from a small startup to an established biotechnology company with a team of over 50 scientists, engineers, and business professionals dedicated to advancing our organ-on-chip platforms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At Javelin Biotech, we're dedicated to transforming drug development by providing more predictive human-relevant data earlier in the process. Our goal is to accelerate the path to safer, more effective medicines while reducing the reliance on animal testing.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that organ-on-chip technology represents a paradigm shift in preclinical testing, offering unprecedented insights into human physiology and drug responses that traditional methods simply cannot provide.
              </p>
              <p className="text-gray-600">
                By continuing to innovate and expand the capabilities of our platforms, we aim to enable the development of better treatments for patients worldwide while reducing the time and cost associated with bringing new drugs to market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Javelin Biotech, from research and development to partnerships and customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in Javelin Biotech's evolution from startup to industry leader.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 p-4 md:pr-12 md:text-right md:mb-0 mb-4">
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <h3 className="text-2xl font-bold text-purple-700">{event.year}</h3>
                      <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 border-4 border-white items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="md:w-1/2 p-4 md:pl-12">
                    {/* This side is empty for the layout to work */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving our vision forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="/contact">Join Our Team</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We collaborate with leading pharmaceutical companies, research institutions, and government agencies to advance organ-on-chip technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 flex items-center justify-center bg-gray-100 rounded-md px-6">
                <div className="text-gray-400 font-medium">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our organ-on-chip technology can accelerate your research and development projects.
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
