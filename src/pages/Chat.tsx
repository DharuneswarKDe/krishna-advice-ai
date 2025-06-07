import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatContainer from "@/components/ChatContainer";
import { Card } from "@/components/ui/card";
import { useGeneration } from "@/context/GenerationContext";
import { Badge } from "@/components/ui/badge";

const Chat = () => {
  const { generation } = useGeneration();

  const getPageTitle = () => {
    switch (generation) {
      case "boomer": return "Spiritual Guidance";
      case "millennial": return "Balanced Living";
      case "genz": return "Real Talk";
      default: return "Krishna's Wisdom";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 md:py-12 container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
          {generation && (
            <Badge variant="outline" className="bg-primary/10">
              {generation === "boomer" ? "Boomer Bhaktas" :
              generation === "millennial" ? "Hustle Hermits" :
              "Woke Warriors"}
            </Badge>
          )}
        </div>
        
        <Card className="h-[70vh] md:h-[75vh] bg-card/75 backdrop-blur-sm border-primary/10 overflow-hidden flex flex-col shadow-lg">
          <ChatContainer />
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
