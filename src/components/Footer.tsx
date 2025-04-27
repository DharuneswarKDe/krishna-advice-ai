
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-center relative z-10">
      <div className="container mx-auto px-4">
        <div className="decorated-hr mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-3">Krishna AI</h3>
            <p className="text-sm text-muted-foreground">
              Guidance from ancient wisdom for modern life challenges.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-3">Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <a 
                href="https://www.bhagavad-gita.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
              >
                Bhagavad Gita
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-lg mb-3">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              This is an AI interpretation of the Gita's wisdom. For deeper study, please consult authentic texts.
            </p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground pt-8">
          © {new Date().getFullYear()} Krishna AI Advisor. Built with love and devotion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
