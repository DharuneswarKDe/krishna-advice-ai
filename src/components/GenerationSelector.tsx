
import { useGeneration, Generation } from "@/context/GenerationContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, User, MessageCircle } from "lucide-react";

interface GenerationCardProps {
  id: Generation;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const GenerationCard = ({ id, title, description, icon, onClick, isSelected }: GenerationCardProps) => (
  <Card 
    className={`cursor-pointer transition-all duration-300 ${
      isSelected 
        ? "border-primary shadow-lg scale-105" 
        : "border-primary/10 hover:border-primary/50"
    }`}
    onClick={onClick}
  >
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className={`mb-5 p-3 rounded-full ${isSelected ? "bg-primary/20" : "bg-accent/10"}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Button 
        variant={isSelected ? "default" : "outline"} 
        className="mt-2" 
        asChild
      >
        <Link to="/chat">
          {isSelected ? "Continue Your Journey" : "Select & Begin"}
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const GenerationSelector = () => {
  const { generation, setGeneration } = useGeneration();
  
  const generations = [
    {
      id: "boomer" as Generation,
      title: "Boomer Bhaktas",
      description: "Wise, reflective, and leaning into life's bigger questions. Revisit the roots. Timeless Gita truths for navigating life's next chapter with grace and clarity.",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      id: "millennial" as Generation,
      title: "Hustle Hermits",
      description: "Grinding 9 to 9 but craving peace of mind and purpose in life. Feeling lost in the grind? Tap into timeless vibes to help you adult better and find your flow.",
      icon: <User className="h-8 w-8 text-primary" />
    },
    {
      id: "genz" as Generation,
      title: "Woke Warriors",
      description: "On a quest for truth, identity, and change—with memes, reels, and existential dread. Get real talk from ancient wisdom—no cap. Answers that hit different when life gets chaotic.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Choose Your Path
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Select the generation that resonates with you for personalized guidance from Krishna's teachings
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {generations.map((gen) => (
            <GenerationCard
              key={gen.id}
              id={gen.id}
              title={gen.title}
              description={gen.description}
              icon={gen.icon}
              onClick={() => setGeneration(gen.id)}
              isSelected={generation === gen.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenerationSelector;
