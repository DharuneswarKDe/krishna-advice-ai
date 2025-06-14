
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Thattuvam AI</h1>
            
            <div className="mb-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 text-primary">
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
            </div>
            
            <div className="space-y-8">
              <Card className="bg-card/75 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">The Bhagavad Gita</h2>
                  <p className="text-muted-foreground mb-4">
                    The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the 
                    Indian epic Mahabharata. It is a conversation between Prince Arjuna and the divin Thattivam, who serves 
                    as his charioteer and guide.
                  </p>
                  <p className="text-muted-foreground">
                    Written approximately 2000 years ago, the Gita addresses universal questions about purpose, duty, 
                    right action, and the nature of reality. Its teachings transcend religious boundaries and offer 
                    practical wisdom for navigating life's complex moral and existential challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/75 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">How Thattuvam AI Works</h2>
                  <p className="text-muted-foreground mb-4">
                 Thattuvam AI is designed to bridge ancient wisdom with modern questions. When you ask a question, 
                    our system analyzes it to find relevant teachings from the Bhagavad Gita.
                  </p>
                  <p className="text-muted-foreground">
                    The AI provides guidance based on interpretations of the Gita's verses, offering spiritual 
                    insights that can help with personal growth, ethical dilemmas, relationships, work challenges, 
                    and finding inner peace in today's busy world.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/75 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
                  <p className="text-muted-foreground">
                 Thattuvam AI offers interpretations of the Bhagavad Gita's wisdom but is not a replacement for 
                    spiritual teachers, religious guidance, or professional advice. The responses are AI-generated 
                    based on our training data and should be considered as thoughtful reflections rather than 
                    absolute spiritual truths. For deeper study, we encourage consulting authentic texts, qualified 
                    teachers, and appropriate professionals for specialized advice.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/chat">Ask ThattuvamAI Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
