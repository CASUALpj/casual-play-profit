import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Vision from "@/components/sections/Vision";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;