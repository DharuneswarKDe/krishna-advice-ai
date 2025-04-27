
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Star, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Ancient Wisdom",
    description: "Access timeless knowledge from the Bhagavad Gita, one of humanity's most profound spiritual texts."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Personalized Guidance",
    description: "Receive advice tailored to your specific questions and life situations."
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Spiritual Insights",
    description: "Gain deeper understanding of karma, dharma, and your purpose in life through Krishna's teachings."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Inner Peace",
    description: "Discover practical ways to find balance, reduce stress, and cultivate equanimity in daily life."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Wisdom from the Bhagavad Gita at Your Fingertips
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-full bg-accent/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
