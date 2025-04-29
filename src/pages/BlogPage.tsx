
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
};

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Advancing Liver Disease Research with Organ-on-Chip Technology",
      excerpt: "How our LTC platform is transforming the study of complex liver diseases and enabling more effective therapeutic development.",
      date: "April 15, 2025",
      author: "Dr. Sarah Chen",
      category: "Research",
      image: "https://source.unsplash.com/photo-1485827404703-89b55fcc595e",
      tags: ["Liver Disease", "NAFLD", "Research"]
    },
    {
      id: 2,
      title: "The Future of Drug Toxicity Testing: Moving Beyond Animal Models",
      excerpt: "Examining the ethical and scientific advantages of organ-on-chip technologies as alternatives to animal testing in drug development.",
      date: "April 2, 2025",
      author: "Dr. Michael Rodriguez",
      category: "Innovation",
      image: "https://source.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Toxicology", "Animal Testing", "Ethics"]
    },
    {
      id: 3,
      title: "Precision Medicine Revolution: Patient-Specific Drug Response Testing",
      excerpt: "How organ-on-chip technology using patient-derived cells is enabling truly personalized medicine approaches.",
      date: "March 21, 2025",
      author: "Dr. Emily Johnson",
      category: "Applications",
      image: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Precision Medicine", "Personalized Treatment", "Clinical Applications"]
    },
    {
      id: 4,
      title: "Javelin Biotech Announces New Collaboration with Leading Pharmaceutical Company",
      excerpt: "Strategic partnership aims to accelerate drug development for metabolic disorders using our LTC platform.",
      date: "March 10, 2025",
      author: "Marketing Team",
      category: "News",
      image: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      tags: ["Partnership", "Pharmaceutical", "Business"]
    },
    {
      id: 5,
      title: "Technical Advances in Microfluidic Chip Design for Enhanced Cell Function",
      excerpt: "Exploring the engineering innovations behind our next-generation organ-on-chip platforms.",
      date: "February 28, 2025",
      author: "Dr. Alex Freeman",
      category: "Technology",
      image: "https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      tags: ["Microfluidics", "Engineering", "Technical"]
    },
    {
      id: 6,
      title: "Regulatory Perspectives on Organ-on-Chip Data in Drug Approval Processes",
      excerpt: "How regulatory agencies are beginning to consider organ-on-chip data in their evaluation of new drug applications.",
      date: "February 15, 2025",
      author: "Dr. Samantha Lee",
      category: "Regulatory",
      image: "https://source.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      tags: ["Regulatory", "FDA", "Drug Approval"]
    }
  ];

  const categories = ["All", "Research", "Innovation", "Applications", "News", "Technology", "Regulatory"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !activeCategory || activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Blog & Insights
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Latest news, research highlights, and insights from the Javelin Biotech team.
          </p>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm ${activeCategory === category || (category === 'All' && !activeCategory) 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setActiveCategory(category === 'All' ? null : category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-purple-700">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 p-0">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" className="bg-purple-100">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">8</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest advancements in organ-on-chip technology, research highlights, and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
            />
            <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
