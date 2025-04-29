
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const executives = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "Ph.D. in Biomedical Engineering with over 15 years experience in microfluidics and organ-on-chip technology.",
      image: "https://source.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Dr. Michael Chen",
      title: "Chief Scientific Officer",
      bio: "Former professor of Tissue Engineering with expertise in cell biology and biomaterials design.",
      image: "https://source.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "VP of Research & Development",
      bio: "Specialist in stem cell biology and disease modeling with extensive pharmaceutical industry experience.",
      image: "https://source.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Robert Williams",
      title: "Chief Technology Officer",
      bio: "Expert in microfluidic design and automation with background in semiconductor fabrication.",
      image: "https://source.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    }
  ];
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary team combines expertise in engineering, cell biology, and drug development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={executive.image} 
                  alt={executive.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold text-gray-900">{executive.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{executive.title}</p>
                <p className="text-gray-600 text-sm">{executive.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Team</h3>
            <p className="text-gray-600">
              We're looking for passionate scientists, engineers, and business professionals to help advance our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Research Scientists</h4>
              <p className="text-gray-600 text-sm mb-4">Join our R&D team to develop next-generation organ models and applications.</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium text-sm inline-flex items-center">
                View Open Positions
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Engineering</h4>
              <p className="text-gray-600 text-sm mb-4">Design and build microfluidic systems and automation solutions.</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium text-sm inline-flex items-center">
                View Open Positions
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">Business Development</h4>
              <p className="text-gray-600 text-sm mb-4">Build partnerships and identify new market opportunities.</p>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium text-sm inline-flex items-center">
                View Open Positions
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
