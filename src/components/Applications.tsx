
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Applications = () => {
  const applications = [
    {
      id: "drug-discovery",
      title: "Drug Discovery",
      description: "Accelerate drug discovery by evaluating drug candidates in human-relevant models before animal testing.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-biotech-800">Revolutionizing Preclinical Testing</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Earlier detection of drug safety issues with human-relevant models</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">More accurate prediction of drug efficacy and toxicity</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Reduced reliance on animal testing with better human relevance</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Screening of drug candidates in disease-specific conditions</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 opacity-20 rounded-full blur-3xl -z-10 translate-x-1/4"></div>
            <img 
              src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Drug discovery on chip" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    {
      id: "disease-modeling",
      title: "Disease Modeling",
      description: "Replicate complex disease states to better understand pathophysiology and identify new therapeutic targets.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <h3 className="text-2xl font-semibold mb-4 text-biotech-800">Disease Insights & Drug Response</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Model specific disease phenotypes including cancer, fibrosis, and inflammatory conditions</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Study disease progression and therapeutic intervention in real-time</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Patient-specific disease modeling using donor or iPSC-derived cells</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Discover novel therapeutic targets through disease pathway analysis</p>
              </li>
            </ul>
          </div>
          <div className="relative md:order-1">
            <div className="absolute inset-0 bg-biotech-400 opacity-20 rounded-full blur-3xl -z-10 -translate-x-1/4"></div>
            <img 
              src="https://source.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
              alt="Disease modeling" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    {
      id: "personalized-medicine",
      title: "Personalized Medicine",
      description: "Test drug responses using patient-derived cells to guide personalized treatment approaches.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-biotech-800">Patient-Specific Drug Testing</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Create patient avatars using biopsy-derived or iPSC-derived cells</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Test multiple treatment options to identify optimal therapy</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Predict individual drug responses and potential adverse effects</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-teal-700">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700">Support clinical decision-making with rapid, relevant drug testing data</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 opacity-20 rounded-full blur-3xl -z-10 translate-x-1/4"></div>
            <img 
              src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Personalized medicine" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our versatile platform supports diverse applications across the drug discovery and development pipeline.
          </p>
        </div>

        <Tabs defaultValue="drug-discovery" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full mb-8 bg-transparent">
            {applications.map((app) => (
              <TabsTrigger 
                key={app.id} 
                value={app.id}
                className="data-[state=active]:bg-biotech-600 data-[state=active]:text-white data-[state=active]:shadow-lg py-3 px-4"
              >
                {app.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {applications.map((app) => (
            <TabsContent key={app.id} value={app.id} className="mt-8">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                {app.content}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Applications;
