
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle click outside to close the mobile menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Handle escape key to close the mobile menu
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Lock body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "py-2 bg-cyber-dark/80 backdrop-blur-lg shadow-md" 
        : "py-4 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-cyber-alt font-bold">
            <span className="text-cyber-neon-blue">Roleplay</span>
            <span className="text-cyber-neon-purple"> GPT</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            href="https://chatgpt.com/g/g-yfs0iWcFN-roleplay-companion" 
            target="_blank"
            variant="primary"
            className="font-cyber-alt"
          >
            USE FREE AI TOOLS NOW
          </Button>
          
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-white hover:text-cyber-neon-blue transition-colors"
          >
            AI Tools FAQ
          </button>
          
          <button 
            onClick={() => scrollToSection('disclaimer')}
            className="text-white hover:text-cyber-neon-blue transition-colors"
          >
            Disclaimer
          </button>
          
          <Button 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            variant="outline"
          >
            More Free AI Tools
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          ref={menuButtonRef}
          className="md:hidden text-white hover:text-cyber-neon-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-cyber-dark/95 backdrop-blur-lg transition-transform duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container px-4 mx-auto py-16 flex flex-col items-center space-y-6">
          {/* Close button at the top of the mobile menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-cyber-neon-blue p-2 rounded-full bg-cyber-dark/50"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <Button 
            href="https://chatgpt.com/g/g-yfs0iWcFN-roleplay-companion" 
            target="_blank"
            variant="primary"
            size="lg"
            className="w-full justify-center font-cyber-alt"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            USE FREE AI TOOLS NOW
          </Button>
          
          <button 
            onClick={() => scrollToSection('faq')}
            className="w-full text-xl text-white hover:text-cyber-neon-blue transition-colors py-4 border-b border-white/10"
          >
            AI Tools FAQ
          </button>
          
          <button 
            onClick={() => scrollToSection('disclaimer')}
            className="w-full text-xl text-white hover:text-cyber-neon-blue transition-colors py-4 border-b border-white/10"
          >
            Disclaimer
          </button>
          
          <Button 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            variant="outline"
            size="lg"
            className="w-full justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More Free AI Tools
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
