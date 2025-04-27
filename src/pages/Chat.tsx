
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatContainer from "@/components/ChatContainer";
import { Card } from "@/components/ui/card";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 md:py-12 container max-w-4xl mx-auto px-4">
        <Card className="h-[70vh] md:h-[75vh] bg-card/75 backdrop-blur-sm border-primary/10 overflow-hidden flex flex-col shadow-lg">
          <ChatContainer />
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
