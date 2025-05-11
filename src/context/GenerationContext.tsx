
import { createContext, useContext, useState, ReactNode } from "react";

export type Generation = "boomer" | "millennial" | "genz" | undefined;

interface GenerationContextType {
  generation: Generation;
  setGeneration: (generation: Generation) => void;
}

const GenerationContext = createContext<GenerationContextType | undefined>(undefined);

export function GenerationProvider({ children }: { children: ReactNode }) {
  const [generation, setGeneration] = useState<Generation>(undefined);

  return (
    <GenerationContext.Provider value={{ generation, setGeneration }}>
      {children}
    </GenerationContext.Provider>
  );
}

export function useGeneration() {
  const context = useContext(GenerationContext);
  if (context === undefined) {
    throw new Error("useGeneration must be used within a GenerationProvider");
  }
  return context;
}
