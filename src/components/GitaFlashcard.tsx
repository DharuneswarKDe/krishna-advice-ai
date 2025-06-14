
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

interface GitaVerse {
  chapter: number;
  verse: number;
  slok: string;
  prabhupada_et: string;
  gambhirananda_et: string;
}

const GitaFlashcard = () => {
  const [verses, setVerses] = useState<GitaVerse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [selectedVerse, setSelectedVerse] = useState("1");
  const [loading, setLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Mock data representing CSV structure - In real implementation, this would come from API
  useEffect(() => {
    const mockGitaData: GitaVerse[] = [
      {
        chapter: 1,
        verse: 1,
        slok: "धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
        prabhupada_et: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
        gambhirananda_et: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they had assembled together on the holy plain of Kurukshetra, eager for battle?"
      },
      {
        chapter: 1,
        verse: 2,
        slok: "सञ्जय उवाच। दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥",
        prabhupada_et: "Sanjaya said: O King, after looking over the army arranged in military formation by the sons of Pandu, King Duryodhana went to his teacher and spoke the following words.",
        gambhirananda_et: "Sanjaya said: At that time, seeing the army of the Pandavas drawn up in battle array, King Duryodhana approached his teacher and spoke these words."
      },
      {
        chapter: 2,
        verse: 47,
        slok: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        prabhupada_et: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results, and never be attached to inaction.",
        gambhirananda_et: "Your right is for action alone, never for the results. Do not become the agent of the results of action. May you not have any inclination for inaction."
      },
      {
        chapter: 2,
        verse: 48,
        slok: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
        prabhupada_et: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
        gambhirananda_et: "By being established in yoga, O Dhananjaya, undertake actions after abandoning attachment and remaining equipoised in success and failure. Equanimity is called yoga."
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
    
    setVerses(mockGitaData);
    setLoading(false);
  }, []);

  const currentVerse = verses[currentIndex];
  const chaptersAvailable = [...new Set(verses.map(v => v.chapter))].sort((a, b) => a - b);
  const versesInChapter = verses.filter(v => v.chapter === parseInt(selectedChapter)).map(v => v.verse);

  const handleChapterChange = (chapter: string) => {
    setSelectedChapter(chapter);
    const firstVerseInChapter = verses.find(v => v.chapter === parseInt(chapter));
    if (firstVerseInChapter) {
      setSelectedVerse(firstVerseInChapter.verse.toString());
      const newIndex = verses.findIndex(v => v.chapter === parseInt(chapter) && v.verse === firstVerseInChapter.verse);
      animateToVerse(newIndex);
    }
  };

  const handleVerseChange = (verse: string) => {
    setSelectedVerse(verse);
    const newIndex = verses.findIndex(v => v.chapter === parseInt(selectedChapter) && v.verse === parseInt(verse));
    if (newIndex !== -1) {
      animateToVerse(newIndex);
    }
  };

  const animateToVerse = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 150);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const newVerse = verses[newIndex];
      setSelectedChapter(newVerse.chapter.toString());
      setSelectedVerse(newVerse.verse.toString());
      animateToVerse(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < verses.length - 1) {
      const newIndex = currentIndex + 1;
      const newVerse = verses[newIndex];
      setSelectedChapter(newVerse.chapter.toString());
      setSelectedVerse(newVerse.verse.toString());
      animateToVerse(newIndex);
    }
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const randomVerse = verses[randomIndex];
    setSelectedChapter(randomVerse.chapter.toString());
    setSelectedVerse(randomVerse.verse.toString());
    animateToVerse(randomIndex);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-muted-foreground">Loading verses...</div>
      </div>
    );
  }

  if (!currentVerse) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-muted-foreground">No verses available</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Chapter:</label>
            <Select value={selectedChapter} onValueChange={handleChapterChange}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {chaptersAvailable.map((chapter) => (
                  <SelectItem key={chapter} value={chapter.toString()}>
                    {chapter}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Verse:</label>
            <Select value={selectedVerse} onValueChange={handleVerseChange}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {versesInChapter.map((verse) => (
                  <SelectItem key={verse} value={verse.toString()}>
                    {verse}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleRandom} variant="outline" size="sm" className="gap-2">
            <Shuffle className="h-4 w-4" />
            Random
          </Button>
        </div>
      </div>

      {/* Flashcard */}
      <Card className={`bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 min-h-[400px] ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} flashcard-transition`}>
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Chapter {currentVerse.chapter}, Verse {currentVerse.verse}
            </span>
          </div>
          
          {/* Sanskrit Sloka */}
          <div className="text-center mb-8">
            <div className="text-xl md:text-2xl font-sanskrit text-primary leading-relaxed mb-4 p-6 bg-card/50 rounded-lg border border-primary/10">
              {currentVerse.slok}
            </div>
          </div>
          
          {/* English Translations */}
          <div className="space-y-4 max-h-48 overflow-y-auto">
            {currentVerse.prabhupada_et && (
              <div className="border-l-4 border-primary/30 pl-4 bg-card/30 p-4 rounded-r-lg">
                <p className="text-sm font-medium text-primary mb-2">Prabhupada Translation:</p>
                <p className="text-muted-foreground italic leading-relaxed">{currentVerse.prabhupada_et}</p>
              </div>
            )}
            {currentVerse.gambhirananda_et && (
              <div className="border-l-4 border-accent/30 pl-4 bg-card/30 p-4 rounded-r-lg">
                <p className="text-sm font-medium text-accent mb-2">Gambhirananda Translation:</p>
                <p className="text-muted-foreground italic leading-relaxed">{currentVerse.gambhirananda_et}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          onClick={handlePrevious} 
          disabled={currentIndex === 0}
          variant="outline"
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {verses.length} verses
        </span>
        
        <Button 
          onClick={handleNext} 
          disabled={currentIndex === verses.length - 1}
          variant="outline"
          className="gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default GitaFlashcard;
