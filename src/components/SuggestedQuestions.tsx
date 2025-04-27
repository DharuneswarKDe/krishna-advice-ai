
import { Button } from "@/components/ui/button";

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
  isProcessing: boolean;
}

const SuggestedQuestions = ({ onSelectQuestion, isProcessing }: SuggestedQuestionsProps) => {
  const questions = [
    "How can I find my purpose in life?",
    "How do I deal with stress and anxiety?",
    "What is the right way to make decisions?",
    "How can I balance worldly duties and spiritual growth?"
  ];

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
        Suggested Questions
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {questions.map((question) => (
          <Button
            key={question}
            variant="outline"
            size="sm"
            onClick={() => onSelectQuestion(question)}
            disabled={isProcessing}
            className="text-xs bg-background/80 backdrop-blur-sm"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
