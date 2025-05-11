
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGeneration } from "@/context/GenerationContext";

const HeroSection = () => {
  const { generation } = useGeneration();
  
  // Dynamic content based on generation
  const getTitle = () => {
    switch (generation) {
      case "boomer": return "Timeless Wisdom for Life's Later Chapters";
      case "millennial": return "Ancient Balance for Your Modern Hustle";
      case "genz": return "Real Talk from 5000-Year-Old Wisdom";
      default: return "Ancient Wisdom for Modern Questions with";
    }
  };
  
  const getSubtitle = () => {
    switch (generation) {
      case "boomer": 
        return "Discover deeper meaning and purpose through the timeless teachings of the Bhagavad Gita";
      case "millennial": 
        return "Find harmony between ambition and inner peace with guidance from the Bhagavad Gita";
      case "genz": 
        return "Cut through the noise and find your authentic path with no-filter wisdom from the Bhagavad Gita";
      default:
        return "Receive guidance from the timeless teachings of the Bhagavad Gita, personalized for your life's challenges";
    }
  };
  
  const getPrimaryButtonText = () => {
    switch (generation) {
      case "boomer": return "Seek Guidance";
      case "millennial": return "Find Balance";
      case "genz": return "Get Answers";
      default: return "Ask Krishna";
    }
  };

  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {getTitle()} {!generation && <span className="gradient-text">Krishna AI</span>}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {getSubtitle()}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/chat">
                {getPrimaryButtonText()} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="lotus-decoration top-20 left-[10%] rotate-45" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary/20">
            <path d="M256,0c-17.7,0-32,14.3-32,32v32c-106,0-192,86-192,192c0,35.3,28.7,64,64,64h42.8c-15.5-19.1-26.5-41.7-31.1-66.2C99,228.2,92,203.7,92,178c0-29.4,11.8-56,30.6-75.4C140.5,83.9,168.4,74,197.5,70.3C208.9,45.1,230.2,25,256,13.9c25.8,11.1,47.1,31.2,58.5,56.5c29.1,3.6,57,13.5,74.9,32.1C408.2,122,420,148.6,420,178c0,25.7-7,50.2-15.7,75.8c-4.6,24.4-15.6,47.1-31.1,66.2H416c35.3,0,64-28.7,64-64C480,150,394,64,288,64V32C288,14.3,273.7,0,256,0z"/>
          </svg>
        </div>
        <div className="lotus-decoration bottom-20 right-[10%] -rotate-45" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary/20">
            <path d="M256,0c-17.7,0-32,14.3-32,32v32c-106,0-192,86-192,192c0,35.3,28.7,64,64,64h42.8c-15.5-19.1-26.5-41.7-31.1-66.2C99,228.2,92,203.7,92,178c0-29.4,11.8-56,30.6-75.4C140.5,83.9,168.4,74,197.5,70.3C208.9,45.1,230.2,25,256,13.9c25.8,11.1,47.1,31.2,58.5,56.5c29.1,3.6,57,13.5,74.9,32.1C408.2,122,420,148.6,420,178c0,25.7-7,50.2-15.7,75.8c-4.6,24.4-15.6,47.1-31.1,66.2H416c35.3,0,64-28.7,64-64C480,150,394,64,288,64V32C288,14.3,273.7,0,256,0z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
