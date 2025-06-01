
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
                  viewBox="0 0 512 512" 
                  className="fill-current animate-float"
                  aria-hidden="true"
                >
                  <path d="M270.3,36c-10.1,0.9-20,3.9-28.3,9.7c-11.8,8.2-20,21-20,36.3c0,8.5,2.5,16.4,6.8,23.1c-3.8,0.7-7.4,2-10.8,3.9c-9.2,5.1-15.4,14.9-15.4,26c0,5.9,1.8,11.4,4.8,16c-14.8,8.2-24.8,23.9-24.8,42c0,7.5,1.7,14.6,4.8,21c-9.2,8-15,19.8-15,33c0,8.1,2.2,15.7,6,22.2c-3.1,6.1-4.8,13-4.8,20c0,9.7,3,18.6,8.1,26c-8.1,9-13,21-13,34c0,10,2.9,19.3,7.9,27.2c-5,7.9-7.9,17.2-7.9,27.2c0,28.2,23,51.2,51.2,51.2h52c28.2,0,51.2-23,51.2-51.2c0-10-2.9-19.3-7.9-27.2c5-7.9,7.9-17.2,7.9-27.2c0-13-4.9-25-13-34c5.1-7.4,8.1-16.3,8.1-26c0-7-1.7-13.9-4.8-20c3.8-6.5,6-14.1,6-22.2c0-13.2-5.8-25-15-33c3.1-6.4,4.8-13.5,4.8-21c0-18.1-10-33.8-24.8-42c3-4.6,4.8-10.1,4.8-16c0-11.1-6.2-20.9-15.4-26c-3.4-1.9-7-3.2-10.8-3.9c4.3-6.7,6.8-14.6,6.8-23.1c0-23.6-19.2-42.8-42.8-42.8c-0.3,0-0.6,0-0.9,0z"/>
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
                 Thattivam AI is designed to bridge ancient wisdom with modern questions. When you ask a question, 
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
                 Thattivam AI offers interpretations of the Bhagavad Gita's wisdom but is not a replacement for 
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
                <Link to="/chat">Ask Thattivam Now</Link>
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
