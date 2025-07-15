import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Logo will be added later

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Tutorials', path: '/tutorials', color: 'bg-primary text-primary-foreground' },
    { name: 'Beast Moves', path: '/showcase', color: 'bg-accent text-accent-foreground' },
    { name: 'Programs', path: '/programs', color: 'bg-beast-orange text-beast-orange-foreground' },
    { name: 'Workouts', path: '/workouts', color: 'bg-secondary text-secondary-foreground' },
    { name: 'About', path: '/about', color: 'bg-primary/70 text-primary-foreground' },
    { name: 'Products', path: '/products', color: 'bg-gradient-beast text-white' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/6c553d32-054d-4cf2-892a-234d14b6d389.png" 
                alt="Hula Hoop Beast Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bangers text-xl text-gradient-beast">
              HULA HOOP BEAST
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter font-medium px-4 py-2 rounded-full transition-beast hover:scale-105 ${
                    isActive(item.path) 
                      ? `${item.color} shadow-beast` 
                      : `${item.color} opacity-80 hover:opacity-100`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer for logo balance */}
          <div className="w-32"></div>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter font-medium px-4 py-2 rounded-full transition-beast hover:scale-105 ${
                    isActive(item.path) 
                      ? `${item.color} shadow-beast` 
                      : `${item.color} opacity-80 hover:opacity-100`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;