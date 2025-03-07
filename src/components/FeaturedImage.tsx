
import React from 'react';

const FeaturedImage: React.FC = () => {
  return (
    <section className="cyber-section py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full max-w-4xl hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-medium-shot-of-two-robots-standing.png/:/cr=t:3.48%25,l:0%25,w:100%25,h:93.05%25/rs=w:1200,h:600,cg:true" 
              alt="AI Robots - Roleplay GPT" 
              className="w-full h-auto rounded-lg shadow-neon-blue cyber-panel"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
