
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Shuffle } from "lucide-react";
import { useGeneration } from "@/context/GenerationContext";

interface GitaVerse {
  chapter: number;
  verse: number;
  slok: string;
  [key: string]: any; // For various author translations
}

const GitaPage = () => {
  const [verses, setVerses] = useState<GitaVerse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVerses, setFilteredVerses] = useState<GitaVerse[]>([]);
  const [randomVerse, setRandomVerse] = useState<GitaVerse | null>(null);
  const { generation } = useGeneration();

  // Mock data since we can't directly read CSV in browser
  // In a real implementation, this would come from an API
  useEffect(() => {
    const mockVerses: GitaVerse[] = [
      {
        chapter: 1,
        verse: 1,
        slok: "धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
        prabhupada_et: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
        gambhirananda_et: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they had assembled together on the holy plain of Kurukshetra, eager for battle?"
      },
      {
        chapter: 2,
        verse: 47,
        slok: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        prabhupada_et: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results, and never be attached to inaction.",
        gambhirananda_et: "Your right is for action alone, never for the results. Do not become the agent of the results of action. May you not have any inclination for inaction."
      },
      {
        chapter: 4,
        verse: 7,
        slok: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        prabhupada_et: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
        gambhirananda_et: "O scion of the Bharata dynasty, whenever there is a decline of virtue and increase of vice, then I manifest Myself."
      },
      {
        chapter: 18,
        verse: 66,
        slok: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        prabhupada_et: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
        gambhirananda_et: "Giving up all duties, take refuge in Me alone. I shall liberate you from all sins; do not grieve."
      }
    ];
    
    setVerses(mockVerses);
    setFilteredVerses(mockVerses);
    setRandomVerse(mockVerses[Math.floor(Math.random() * mockVerses.length)]);
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredVerses(verses);
      return;
    }

    const filtered = verses.filter(verse => {
      const chapterMatch = verse.chapter.toString().includes(searchTerm);
      const verseMatch = verse.verse.toString().includes(searchTerm);
      const slokMatch = verse.slok.toLowerCase().includes(searchTerm.toLowerCase());
      
      return chapterMatch || verseMatch || slokMatch;
    });
    
    setFilteredVerses(filtered);
  };

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    setRandomVerse(verses[randomIndex]);
  };

  const getPageTitle = () => {
    switch (generation) {
      case "boomer": return "Sacred Verses of Wisdom";
      case "millennial": return "Timeless Gita Teachings";
      case "genz": return "Ancient Wisdom Collection";
      default: return "Bhagavad Gita Verses";
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${generation ? `generation-${generation}` : ''}`}>
      <Header />
      
      <main className="flex-1 py-6 md:py-12 container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{getPageTitle()}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the profound teachings of the Bhagavad Gita through its timeless verses
          </p>
        </div>

        {/* Random Verse Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Verse of the Moment</h2>
            <Button onClick={getRandomVerse} variant="outline" size="sm" className="gap-2">
              <Shuffle className="h-4 w-4" />
              New Verse
            </Button>
          </div>
          
          {randomVerse && (
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-primary">
                    Chapter {randomVerse.chapter}, Verse {randomVerse.verse}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <p className="text-lg font-sanskrit mb-3 text-primary">{randomVerse.slok}</p>
                </div>
                <div className="space-y-2">
                  {randomVerse.prabhupada_et && (
                    <div className="border-l-4 border-primary/30 pl-4">
                      <p className="text-sm font-medium text-primary mb-1">Prabhupada Translation:</p>
                      <p className="text-muted-foreground italic">{randomVerse.prabhupada_et}</p>
                    </div>
                  )}
                  {randomVerse.gambhirananda_et && (
                    <div className="border-l-4 border-accent/30 pl-4">
                      <p className="text-sm font-medium text-accent mb-1">Gambhirananda Translation:</p>
                      <p className="text-muted-foreground italic">{randomVerse.gambhirananda_et}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Verses</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Search by chapter number, verse number, or text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} className="gap-2">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVerses.map((verse, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Chapter {verse.chapter}, Verse {verse.verse}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <p className="text-base font-sanskrit text-primary leading-relaxed">{verse.slok}</p>
                </div>
                <div className="space-y-3">
                  {verse.prabhupada_et && (
                    <div className="border-l-4 border-primary/30 pl-3">
                      <p className="text-xs font-medium text-primary mb-1">Prabhupada:</p>
                      <p className="text-sm text-muted-foreground italic">{verse.prabhupada_et}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVerses.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No verses found matching your search.</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setFilteredVerses(verses);
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default GitaPage;
