
import React, { useEffect, useRef } from 'react';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('slide-up');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="cyber-panel opacity-0"
    >
      <div className="bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple p-[1px] rounded-full w-16 h-16 mb-6 mx-auto flex items-center justify-center">
        <div className="bg-cyber-dark rounded-full w-full h-full flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="cyber-section">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text">How It Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Roleplay Companion GPT sets a new standard for AI interaction, combining advanced language capabilities
            with unbounded creativity to deliver the most immersive roleplay experience available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎭"
            title="Limitless Characters"
            description="From historical figures to fantastical beings, Roleplay Companion embodies any character with unprecedented depth and authenticity."
            delay={100}
          />
          
          <FeatureCard
            icon="💬"
            title="Perfect Immersion"
            description="Once in character, the AI never breaks the illusion, maintaining consistent personality, knowledge, and mannerisms throughout your interaction."
            delay={200}
          />
          
          <FeatureCard
            icon="🔍"
            title="Research Capable"
            description="Access to web search and extensive knowledge enables historically accurate portrayals and informed conversations on any topic."
            delay={300}
          />
          
          <FeatureCard
            icon="🖼️"
            title="Visual Creation"
            description="Generate images that match your scenario, enhancing immersion with visual representations of characters and scenes."
            delay={400}
          />
          
          <FeatureCard
            icon="💻"
            title="Advanced Capabilities"
            description="Beyond conversation, the AI can create code, analyze data, and generate visualizations while staying perfectly in character."
            delay={500}
          />
          
          <FeatureCard
            icon="🔒"
            title="Adult Content Ready"
            description="Designed for mature users with content that adapts to your comfort level while maintaining respect and consent standards."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
