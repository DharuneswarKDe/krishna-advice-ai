
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-10 pt-6 pb-4">
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 text-primary animate-float">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512" 
              className="fill-current"
              aria-hidden="true"
            >
              <path d="M270.3,36c-10.1,0.9-20,3.9-28.3,9.7c-11.8,8.2-20,21-20,36.3c0,8.5,2.5,16.4,6.8,23.1c-3.8,0.7-7.4,2-10.8,3.9c-9.2,5.1-15.4,14.9-15.4,26c0,5.9,1.8,11.4,4.8,16c-14.8,8.2-24.8,23.9-24.8,42c0,7.5,1.7,14.6,4.8,21c-9.2,8-15,19.8-15,33c0,8.1,2.2,15.7,6,22.2c-3.1,6.1-4.8,13-4.8,20c0,9.7,3,18.6,8.1,26c-8.1,9-13,21-13,34c0,10,2.9,19.3,7.9,27.2c-5,7.9-7.9,17.2-7.9,27.2c0,28.2,23,51.2,51.2,51.2h52c28.2,0,51.2-23,51.2-51.2c0-10-2.9-19.3-7.9-27.2c5-7.9,7.9-17.2,7.9-27.2c0-13-4.9-25-13-34c5.1-7.4,8.1-16.3,8.1-26c0-7-1.7-13.9-4.8-20c3.8-6.5,6-14.1,6-22.2c0-13.2-5.8-25-15-33c3.1-6.4,4.8-13.5,4.8-21c0-18.1-10-33.8-24.8-42c3-4.6,4.8-10.1,4.8-16c0-11.1-6.2-20.9-15.4-26c-3.4-1.9-7-3.2-10.8-3.9c4.3-6.7,6.8-14.6,6.8-23.1c0-23.6-19.2-42.8-42.8-42.8c-0.3,0-0.6,0-0.9,0z"/>
            </svg>
          </div>
          <span className="text-2xl font-semibold gradient-text">Krishna AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <a 
            href="https://www.bhagavad-gita.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Bhagavad Gita
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
