
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Research = () => {
  const publications = [
    {
      title: "Recapitulating complex biological signaling environments using a multiplexed, DNA-patterning approach",
      authors: "Chen MB, Whisler JA, Jeon JS, et al.",
      journal: "Science Advances",
      year: "2022",
      url: "#"
    },
    {
      title: "Human Organ-on-Chip Platform for Drug Safety Assessment",
      authors: "Johnson R, Smith A, Williams D, et al.",
      journal: "Nature Biomedical Engineering",
      year: "2023",
      url: "#"
    },
    {
      title: "Integrated multi-organ-on-chip platform for assessment of drug pharmacokinetics and toxicity",
      authors: "Martinez C, Garcia L, Chen Y, et al.",
      journal: "Lab on a Chip",
      year: "2021",
      url: "#"
    }
  ];
  
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientific innovations are backed by peer-reviewed research and industry collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {publications.map((pub, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-1 bg-biotech-600 mr-3"></div>
                  <p className="text-sm font-medium text-biotech-600">{pub.journal} • {pub.year}</p>
                </div>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{pub.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{pub.authors}</p>
                <a 
                  href={pub.url} 
                  className="text-biotech-600 hover:text-biotech-800 font-medium text-sm flex items-center"
                >
                  View Publication
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-biotech-700 to-biotech-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Research Collaborations</h3>
              <p className="text-biotech-100 mb-6">
                We partner with academic institutions, pharmaceutical companies, and government agencies to advance organ-on-chip technology and applications. Our collaborative approach accelerates innovation in drug discovery and development.
              </p>
              <Button asChild className="bg-white text-biotech-800 hover:bg-gray-100 self-start">
                <a href="#contact">Explore Partnerships</a>
              </Button>
            </div>
            <div className="relative h-64 md:h-auto bg-biotech-900">
              <div className="absolute inset-0">
                <img 
                  src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Research collaboration" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-biotech-700/90 via-biotech-800/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
