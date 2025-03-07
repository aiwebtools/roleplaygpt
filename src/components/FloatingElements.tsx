
import React, { useEffect, useRef } from 'react';

const FloatingElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create elements
    const elements = [];
    const shapes = ['circle', 'square', 'triangle', 'line'];
    const colors = ['cyber-neon-blue', 'cyber-neon-purple', 'cyber-neon-pink', 'cyber-neon-yellow'];
    
    for (let i = 0; i < 15; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 20 + 5;
      const opacity = Math.random() * 0.2 + 0.05;
      
      // Set basic styles
      element.style.position = 'absolute';
      element.style.opacity = opacity.toString();
      element.style.zIndex = '-1';
      
      // Set random position
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      // Set shape-specific styles
      if (shape === 'circle') {
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.borderRadius = '50%';
        element.style.background = `var(--${color})`;
      } else if (shape === 'square') {
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.background = `var(--${color})`;
      } else if (shape === 'triangle') {
        element.style.width = '0';
        element.style.height = '0';
        element.style.borderLeft = `${size/2}px solid transparent`;
        element.style.borderRight = `${size/2}px solid transparent`;
        element.style.borderBottom = `${size}px solid var(--${color})`;
      } else if (shape === 'line') {
        element.style.width = `${size * 3}px`;
        element.style.height = '1px';
        element.style.background = `var(--${color})`;
        element.style.transform = `rotate(${Math.random() * 360}deg)`;
      }
      
      // Add animation
      element.style.animation = `float ${Math.random() * 10 + 20}s linear infinite`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(element);
      elements.push(element);
    }
    
    // Cleanup
    return () => {
      elements.forEach(el => {
        if (el.parentNode === container) {
          container.removeChild(el);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
      style={{
        '--cyber-neon-blue': '#00f6ff',
        '--cyber-neon-purple': '#bd00ff',
        '--cyber-neon-pink': '#ff00e6',
        '--cyber-neon-yellow': '#ffde00',
      } as React.CSSProperties}
    />
  );
};

export default FloatingElements;
