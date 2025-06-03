
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import Logo3D from './Logo3D';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center as a percentage
      const moveX = (e.clientX - centerX) / width * 20; // Max 20px movement
      const moveY = (e.clientY - centerY) / height * 20; // Max 20px movement
      
      // Apply the parallax effect to elements
      const elements = containerRef.current!.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.speed || '1');
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-neon-blue/20 filter blur-3xl parallax" data-speed="-0.3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyber-neon-purple/20 filter blur-3xl parallax" data-speed="0.4"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-cyber-neon-pink/20 filter blur-2xl parallax" data-speed="0.2"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,246,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,246,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1]"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* 3D Logo */}
          <Logo3D />
          
          {/* SEO-optimized tagline */}
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto italic">
            "Free AI Tools by AIWebTools.ai - There are no limits to what you can accomplish, except the limits you place on your own thinking."
            <span className="block text-gray-400 mt-1 text-sm">– Brian Tracy</span>
          </p>
          
          {/* SEO-optimized main headline */}
          <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="block text-white">Free AI Tools: Unleash the Ultimate</span>
            <span className="block mt-2 neon-text animate-pulse-neon">AI Character Roleplay Experience</span>
          </h1>
          
          {/* SEO-enhanced description */}
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the best free AI tools for character roleplaying and entertainment. Our advanced AI companion by AIWebTools.ai 
            offers unlimited creativity, vivid storytelling, and boundless scenarios — bringing your imagination to life with 
            unprecedented realism. Join thousands using our free AI tools for immersive roleplay experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              href="https://chatgpt.com/g/g-yfs0iWcFN-roleplay-companion" 
              target="_blank"
              variant="primary"
              size="lg"
              className="min-w-[220px] font-cyber-alt"
            >
              START ROLEPLAYING NOW - FREE
            </Button>
            
            <Button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
            >
              HOW OUR FREE AI TOOLS WORK
            </Button>
          </div>
          
          {/* SEO-enhanced floating badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="cyber-panel px-4 py-2 flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyber-neon-blue mr-2 animate-pulse"></div>
              <span className="text-sm">100% Free AI Tools</span>
            </div>
            
            <div className="cyber-panel px-4 py-2 flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyber-neon-purple mr-2 animate-pulse"></div>
              <span className="text-sm">Unlimited Characters</span>
            </div>
            
            <div className="cyber-panel px-4 py-2 flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyber-neon-pink mr-2 animate-pulse"></div>
              <span className="text-sm">By AIWebTools.ai</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyber-neon-blue flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyber-neon-blue rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
