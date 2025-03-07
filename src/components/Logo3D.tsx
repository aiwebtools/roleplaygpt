
import React, { useEffect, useRef } from 'react';

const Logo3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let rotationX = 0;
    let rotationY = 0;
    let requestId: number;
    
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate rotation based on mouse position relative to center
      rotationY = ((e.clientX - centerX) / width) * 15; // Max 15 degrees
      rotationX = ((e.clientY - centerY) / height) * -15; // Max 15 degrees
      
      updateLogoTransform();
    };
    
    const updateLogoTransform = () => {
      const logo = container.querySelector('.logo-inner') as HTMLElement;
      if (logo) {
        logo.style.transform = `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
    };
    
    const animate = () => {
      // Add a gentle floating animation when not interacting
      if (Math.abs(rotationX) < 0.1 && Math.abs(rotationY) < 0.1) {
        const time = Date.now() / 2000;
        rotationX = Math.sin(time) * 3;
        rotationY = Math.cos(time) * 3;
        updateLogoTransform();
      }
      
      requestId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    requestId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-32 md:h-40 flex items-center justify-center my-4"
    >
      <div className="logo-inner transition-transform duration-200 ease-out">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-cyber-alt font-bold">
            <span className="text-cyber-neon-blue">Roleplay</span>
            <span className="text-cyber-neon-purple"> Companion</span>
            <span className="text-cyber-neon-pink"> GPT</span>
          </div>
          <div className="text-xs mt-1 text-gray-400">
            Presented by <a href="https://www.aiwebtools.ai" className="hover:text-cyber-neon-blue transition-colors">AiWebTools.Ai</a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyber-neon-blue to-transparent opacity-50"></div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyber-neon-blue/5 blur-xl animate-pulse-neon"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
