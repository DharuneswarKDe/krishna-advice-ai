
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import GenerationSelector from "@/components/GenerationSelector";
import { useGeneration } from "@/context/GenerationContext";

const Index = () => {
  const { generation } = useGeneration();
  
  return (
    <div className={`min-h-screen flex flex-col ${generation ? `generation-${generation}` : ''}`}>
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Generation selector section */}
        <GenerationSelector />
                
        {/* CTA section with personalized message based on selected generation */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {generation === "boomer" ? "Begin Your Spiritual Journey of Wisdom" :
               generation === "millennial" ? "Find Balance in Your Hustle" :
               generation === "genz" ? "Get Real Talk for Real Life" :
               "Begin Your Spiritual Journey"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {generation === "boomer" ? "Ask Thattuvam AI about your life's deeper questions, purpose, and spiritual growth. Receive guidance based on timeless teachings." :
               generation === "millennial" ? "Ask Thattuvam AI about finding balance, purpose in work, and authentic connections in your busy life." :
               generation === "genz" ? "Ask Thattuvam AI about finding your truth, navigating relationships, and making sense of this chaotic world." :
               "Ask Thattuvam AI about your life's challenges, purpose, relationships, work, and spiritual growth. Receive guidance based on the timeless teachings of the Bhagavad Gita."}
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
