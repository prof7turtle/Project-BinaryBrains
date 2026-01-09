import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "AlgoHeist", path: "/hackathon" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [showDarkModeHint, setShowDarkModeHint] = useState(() => {
    const hasSeenHint = localStorage.getItem("darkModeHintSeen");
    const savedTheme = localStorage.getItem("theme");
    return !hasSeenHint && savedTheme !== "dark";
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (showDarkModeHint) {
      const timer = setTimeout(() => {
        setShowDarkModeHint(false);
        localStorage.setItem("darkModeHintSeen", "true");
      }, 8000); // Hide after 8 seconds
      return () => clearTimeout(timer);
    }
  }, [showDarkModeHint]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (showDarkModeHint) {
      setShowDarkModeHint(false);
      localStorage.setItem("darkModeHintSeen", "true");
    }
  };

  const dismissHint = () => {
    setShowDarkModeHint(false);
    localStorage.setItem("darkModeHintSeen", "true");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="BinaryBrains"
              className="size-24 object-contain rounded-lg group-hover:scale-105 transition-transform"
            />
            <span className="font-display font-extrabold text-2xl text-foreground hidden sm:block tracking-tight">
              Binary<span className="text-primary">Brains</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors group"
                aria-label="Toggle theme"
                title={isDark ? "Switch to light mode" : "Switch to dark mode for better experience"}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              {/* Animated hint - visible without hover */}
              {showDarkModeHint && !isDark && (
                <div className="absolute -bottom-20 right-0 flex flex-col items-end animate-fade-in">
                  <div className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap mb-2 relative">
                    Try dark mode for better experience! ✨
                    <button 
                      onClick={dismissHint}
                      className="ml-2 hover:opacity-70"
                      aria-label="Dismiss"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-primary text-3xl -mt-3 mr-2 animate-bounce">↑</div>
                </div>
              )}
            </div>
            <Link to="/hackathon">
              <Button variant="hero" size="default">
                Register Now
              </Button>
            </Link>
            <Link to="/sponsors">
              <Button variant="hero" size="default">
                Become a Sponsor
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-3 relative">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  {showDarkModeHint && !isDark && (
                    <span className="text-xs text-primary mt-0.5 animate-pulse">Try dark mode for better experience ✨</span>
                  )}
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
              <Link to="/hackathon" onClick={() => setIsOpen(false)} className="mt-2">
                <Button variant="hero" size="lg" className="w-full">
                  Register Now
                </Button>
              </Link>
              <Link to="/sponsors" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
