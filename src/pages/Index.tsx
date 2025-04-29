
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Applications from "@/components/Applications";
import Research from "@/components/Research";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technology />
      <Applications />
      <Research />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
