
import { Message } from "@/types/message";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 message-appear",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div 
        className={cn(
          "max-w-[80%] rounded-xl px-4 py-3 whitespace-pre-wrap",
          isUser 
            ? "bg-primary text-primary-foreground rounded-br-none" 
            : "bg-secondary/10 rounded-bl-none"
        )}
      >
        {!isUser && message.content.includes("In the Bhagavad Gita") ? (
          <div>
            {message.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className={cn("mb-2", i === 0 && "font-medium")}>
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p>{message.content}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
