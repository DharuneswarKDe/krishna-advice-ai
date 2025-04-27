
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { Message } from "@/types/message";
import { generateResponse } from "@/lib/gitaDatabase";
import { cn } from "@/lib/utils";

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      content: "Namaste 🙏 I am Krishna AI, ready to share wisdom from the Bhagavad Gita. How may I assist you on your path today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

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

    // Simulate thinking time for a more natural experience
    setTimeout(() => {
      const response = generateResponse(userMessage);
      addMessage(response, "assistant");
      setIsProcessing(false);
    }, 1500);
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
                viewBox="0 0 512 512" 
                className="fill-current animate-float"
                aria-hidden="true"
              >
                <path d="M270.3,36c-10.1,0.9-20,3.9-28.3,9.7c-11.8,8.2-20,21-20,36.3c0,8.5,2.5,16.4,6.8,23.1c-3.8,0.7-7.4,2-10.8,3.9c-9.2,5.1-15.4,14.9-15.4,26c0,5.9,1.8,11.4,4.8,16c-14.8,8.2-24.8,23.9-24.8,42c0,7.5,1.7,14.6,4.8,21c-9.2,8-15,19.8-15,33c0,8.1,2.2,15.7,6,22.2c-3.1,6.1-4.8,13-4.8,20c0,9.7,3,18.6,8.1,26c-8.1,9-13,21-13,34c0,10,2.9,19.3,7.9,27.2c-5,7.9-7.9,17.2-7.9,27.2c0,28.2,23,51.2,51.2,51.2h52c28.2,0,51.2-23,51.2-51.2c0-10-2.9-19.3-7.9-27.2c5-7.9,7.9-17.2,7.9-27.2c0-13-4.9-25-13-34c5.1-7.4,8.1-16.3,8.1-26c0-7-1.7-13.9-4.8-20c3.8-6.5,6-14.1,6-22.2c0-13.2-5.8-25-15-33c3.1-6.4,4.8-13.5,4.8-21c0-18.1-10-33.8-24.8-42c3-4.6,4.8-10.1,4.8-16c0-11.1-6.2-20.9-15.4-26c-3.4-1.9-7-3.2-10.8-3.9c4.3-6.7,6.8-14.6,6.8-23.1c0-23.6-19.2-42.8-42.8-42.8c-0.3,0-0.6,0-0.9,0z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Welcome to Krishna AI</h2>
            <p className="text-muted-foreground mb-6">
              Ask any question and receive wisdom from the Bhagavad Gita's timeless teachings
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
            onSelectQuestion={processMessage}
            isProcessing={isProcessing}
          />
        )}
        <ChatInput 
          onSendMessage={processMessage} 
          isProcessing={isProcessing} 
        />
      </div>
    </div>
  );
};

export default ChatContainer;
