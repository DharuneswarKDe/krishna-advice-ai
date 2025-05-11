
import { Button } from "@/components/ui/button";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
  isProcessing: boolean;
}

const SuggestedQuestions = ({ questions, onSelectQuestion, isProcessing }: SuggestedQuestionsProps) => {
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
