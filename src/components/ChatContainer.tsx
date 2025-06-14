import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { Message } from "@/types/message";
import { sendChatMessage, checkBackendStatus } from "@/lib/api";
import { useGeneration } from "@/context/GenerationContext";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBackendAvailable, setIsBackendAvailable] = useState(true);
  const { generation } = useGeneration();
  const { toast } = useToast();
  
  // Welcome messages based on generation
  const welcomeMessages = {
    boomer: "Namaste 🙏 I am Thattuvam AI, ready to share the timeless wisdom of the Bhagavad Gita. How may I guide you on your spiritual journey today?",
    millennial: "Hey there 👋 I'm Thattuvam AI, here to help you find balance in the chaos. What's on your mind today?",
    genz: "Sup ✨ I'm Thattuvam AI, bringing you ancient wisdom with modern vibes. What's bothering you rn?",
    default: "Namaste 🙏 I am Thattuvam AI, ready to share wisdom from the Bhagavad Gita. How may I assist you on your path today?"
  };

  // Initialize welcome message based on generation
  useEffect(() => {
    const welcomeMessage = generation 
      ? welcomeMessages[generation] 
      : welcomeMessages.default;
      
    setMessages([
      {
        id: "welcome-message",
        content: welcomeMessage,
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
    
    // Check backend connectivity
    const checkBackend = async () => {
      const status = await checkBackendStatus();
      setIsBackendAvailable(status);
      if (!status) {
        toast({
          title: "Backend Connection Issue",
          description: "Using local responses as fallback. Reconnecting...",
          variant: "destructive",
        });
      }
    };
    
    checkBackend();
  }, [generation, toast]);

  const addMessage = (content: string, role: "user" | "assistant") => {
    const newMessage: Message = {
      id: uuidv4(),
      content,
      role,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const processMessage = async (userMessage: string) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    addMessage(userMessage, "user");
    try {
      if (isBackendAvailable) {
        // Use the backend API
        const response = await sendChatMessage(userMessage, generation || "default");
        addMessage(response.content, "assistant");
      } else {
        // Fallback to local response generation
        import("@/lib/gitaDatabase").then(({ generateResponse }) => {
          setTimeout(() => {
            const response = generateResponse(userMessage);
            addMessage(response, "assistant");
            setIsProcessing(false);
          }, 1500);
        });
      }
    } catch (error) {
      console.error("Error processing message:", error);
      addMessage("I'm having trouble connecting to my wisdom source. Please try again later.", "assistant");
      toast({
        title: "Connection Error",
        description: "Could not reach the knowledge source. Falling back to local responses.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Get suggested questions based on generation
  const getSuggestedQuestions = () => {
    if (generation === "boomer") {
      return [
        "How can I find deeper meaning in retirement?",
        "What does the Gita say about legacy and family?",
        "How do I maintain inner peace during life changes?",
        "What is the purpose of spiritual practice in later years?"
      ];
    } else if (generation === "millennial") {
      return [
        "How can I balance ambition with inner peace?",
        "What does the Gita say about career purpose?",
        "How do I manage work stress mindfully?",
        "How can I build authentic relationships?"
      ];
    } else if (generation === "genz") {
      return [
        "How do I find my authentic self?",
        "What does the Gita say about social justice?",
        "How do I deal with constant digital overwhelm?",
        "How can I make meaningful change in the world?"
      ];
    } else {
      return [
        "How can I find my purpose in life?",
        "How do I deal with stress and anxiety?",
        "What is the right way to make decisions?",
        "How can I balance worldly duties and spiritual growth?"
      ];
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Decorative elements */}
      <div className="lotus-decoration top-10 left-10 rotate-45" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary/20">
          <path d="M256,0c-17.7,0-32,14.3-32,32v32c-106,0-192,86-192,192c0,35.3,28.7,64,64,64h42.8c-15.5-19.1-26.5-41.7-31.1-66.2C99,228.2,92,203.7,92,178c0-29.4,11.8-56,30.6-75.4C140.5,83.9,168.4,74,197.5,70.3C208.9,45.1,230.2,25,256,13.9c25.8,11.1,47.1,31.2,58.5,56.5c29.1,3.6,57,13.5,74.9,32.1C408.2,122,420,148.6,420,178c0,25.7-7,50.2-15.7,75.8c-4.6,24.4-15.6,47.1-31.1,66.2H416c35.3,0,64-28.7,64-64C480,150,394,64,288,64V32C288,14.3,273.7,0,256,0z"/>
        </svg>
      </div>
      <div className="lotus-decoration bottom-10 right-10 -rotate-45" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-primary/20">
          <path d="M256,0c-17.7,0-32,14.3-32,32v32c-106,0-192,86-192,192c0,35.3,28.7,64,64,64h42.8c-15.5-19.1-26.5-41.7-31.1-66.2C99,228.2,92,203.7,92,178c0-29.4,11.8-56,30.6-75.4C140.5,83.9,168.4,74,197.5,70.3C208.9,45.1,230.2,25,256,13.9c25.8,11.1,47.1,31.2,58.5,56.5c29.1,3.6,57,13.5,74.9,32.1C408.2,122,420,148.6,420,178c0,25.7-7,50.2-15.7,75.8c-4.6,24.4-15.6,47.1-31.1,66.2H416c35.3,0,64-28.7,64-64C480,150,394,64,288,64V32C288,14.3,273.7,0,256,0z"/>
        </svg>
      </div>

      {/* Chat messages */}
      <div className={cn(
        "flex-1 overflow-y-auto py-4 px-2 md:px-4",
        messages.length <= 1 ? "flex items-center justify-center" : ""
      )}>
        {messages.length <= 1 ? (
          <div className="text-center max-w-md">

            <div className="w-20 h-20 mx-auto mb-6 text-secondary">
            <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 200 200" 
  className="fill-current animate-float"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="customGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(195, 61%, 22%)" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
    <clipPath id="clip0_119_289">
      <rect width="200" height="200" fill="white"/>
    </clipPath>
  </defs>
  <g clip-path="url(#clip0_119_289)">
    <path 
      d="M99.552 18.9087C99.552 -35.1254 133.316 41.4697 119.834 64.8658C133.34 41.4697 216.568 32.4143 169.764 59.4373C216.568 32.4143 167.116 100.002 140.104 100.002C167.116 100.002 216.568 167.553 169.764 140.566C216.568 167.589 133.34 158.534 119.834 135.138C133.34 158.534 99.552 235.129 99.552 181.095C99.552 235.129 65.7762 158.534 79.2698 135.138C65.7642 158.534 -17.4643 167.589 29.3398 140.566C-17.4643 167.589 31.9884 100.002 59.0114 100.002C31.9884 100.002 -17.4643 32.4501 29.3398 59.4373C-17.4643 32.4143 65.7642 41.4697 79.2698 64.8658C65.7762 41.4458 99.552 -35.1254 99.552 18.9087Z" 
      fill="url(#customGradient)"
    />
  </g>
</svg>

            </div>
            <h2 className="text-xl font-semibold mb-2">
              {generation === "boomer" ? "Wisdom Awaits You" :
               generation === "millennial" ? "Find Your Balance" :
               generation === "genz" ? "Get Real Talk" :
               "Welcome to Thattuvam AI"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {generation === "boomer" ? "Ask any question and receive timeless wisdom to guide your spiritual journey" :
               generation === "millennial" ? "Ask any question and discover how ancient wisdom applies to your modern hustle" :
               generation === "genz" ? "Ask any question and get authentic insights that actually make sense for your life" :
               "Ask any question and receive wisdom from the Bhagavad Gita's timeless teachings"}
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
      </div>

      {/* Input area */}
      <div className="mt-auto pt-4 pb-6 flex flex-col gap-6 px-4">
        {messages.length <= 2 && (
          <SuggestedQuestions 
            questions={getSuggestedQuestions()}
            onSelectQuestion={processMessage}
            isProcessing={isProcessing}
          />
        )}
        <ChatInput 
          onSendMessage={processMessage} 
          isProcessing={isProcessing}
          placeholder={generation === "boomer" ? "Ask for wisdom from the Bhagavad Gita..." :
                      generation === "millennial" ? "Ask how ancient wisdom applies to your life..." :
                      generation === "genz" ? "What's on your mind? Ask anything..." :
                      "Ask for wisdom from the Bhagavad Gita..."}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
