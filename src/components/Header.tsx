
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            USE ROLEPLAY GPT NOW
          </Button>
          
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-white hover:text-cyber-neon-blue transition-colors"
          >
            FAQ
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
            More AI Tools
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cyber-neon-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-cyber-dark/95 backdrop-blur-lg transition-transform duration-300 transform",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container px-4 mx-auto py-16 flex flex-col items-center space-y-6">
          <Button 
            href="https://chatgpt.com/g/g-yfs0iWcFN-roleplay-companion" 
            target="_blank"
            variant="primary"
            size="lg"
            className="w-full justify-center font-cyber-alt"
          >
            USE ROLEPLAY GPT NOW
          </Button>
          
          <button 
            onClick={() => scrollToSection('faq')}
            className="w-full text-xl text-white hover:text-cyber-neon-blue transition-colors py-4 border-b border-white/10"
          >
            FAQ
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
          >
            More AI Tools
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
