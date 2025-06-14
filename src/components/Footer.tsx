
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-center relative z-10">
      <div className="container mx-auto px-4">
        <div className="decorated-hr mb-8"></div>
        
        <div className="grid md:grid-cols-1 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-3">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
            This is an AI interpretation of the Gita's wisdom. For deeper study, please consult authentic texts.</p>
          </div>
        
        </div>
        
        <p className="text-sm text-muted-foreground pt-8">
          © {new Date().getFullYear()} ThattuvamAI. Built with love for the community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
