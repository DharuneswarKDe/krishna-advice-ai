
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-10 pt-6 pb-4">
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold gradient-text">Thattuvam AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/gita" className="text-sm font-medium hover:text-primary transition-colors">
            Bhagavad Gita
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
