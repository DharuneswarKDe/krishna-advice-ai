
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGeneration } from "@/context/GenerationContext";
import type { Generation } from "@/context/GenerationContext";

const GenerationDropdown = () => {
  const { generation, setGeneration } = useGeneration();

  const handleGenerationChange = (value: string) => {
    setGeneration(value === "none" ? undefined : value as Generation);
  };

  const getDisplayName = (gen: Generation) => {
    switch (gen) {
      case "boomer": return "Boomer Bhaktas";
      case "millennial": return "Hustle Hermits";
      case "genz": return "Woke Warriors";
      default: return "Select Generation";
    }
  };

  return (
    <Select value={generation || "none"} onValueChange={handleGenerationChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Generation" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">Default Mode</SelectItem>
        <SelectItem value="boomer">Boomer Bhaktas</SelectItem>
        <SelectItem value="millennial">Hustle Hermits</SelectItem>
        <SelectItem value="genz">Woke Warriors</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default GenerationDropdown;
