
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GitaFlashcard from "@/components/GitaFlashcard";
import { useGeneration } from "@/context/GenerationContext";

const GitaPage = () => {
  const { generation } = useGeneration();

  const getPageTitle = () => {
    switch (generation) {
      case "boomer": return "Sacred Verses of Wisdom";
      case "millennial": return "Timeless Gita Teachings";
      case "genz": return "Ancient Wisdom Collection";
      default: return "Bhagavad Gita Verses";
    }
  };

  const getPageDescription = () => {
    switch (generation) {
      case "boomer": return "Discover profound spiritual guidance through the sacred verses of the Bhagavad Gita";
      case "millennial": return "Find balance and purpose through Krishna's timeless teachings";
      case "genz": return "Real wisdom that hits different - explore ancient truths for modern life";
      default: return "Explore the profound teachings of the Bhagavad Gita through its timeless verses";
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${generation ? `generation-${generation}` : ''}`}>
      <Header />
      
      <main className="flex-1 py-6 md:py-12 container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{getPageTitle()}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getPageDescription()}
          </p>
        </div>

        <GitaFlashcard />
      </main>
      
      <Footer />
    </div>
  );
};

export default GitaPage;
