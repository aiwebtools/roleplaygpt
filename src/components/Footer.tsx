
import React from 'react';
import Button from './Button';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-neon-blue/20 pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-cyber-alt font-bold mb-4">
              <span className="text-cyber-neon-blue">Roleplay</span>
              <span className="text-cyber-neon-purple"> GPT</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 text-center md:text-left">
              "There are no limits to what you can accomplish, except the limits you place on your own thinking."
              <span className="block mt-1">– Brian Tracy</span>
            </p>
            
            <Button 
              href="https://chatgpt.com/g/g-yfs0iWcFN-roleplay-companion" 
              target="_blank"
              variant="primary"
              size="sm"
              className="mb-4"
            >
              USE ROLEPLAY GPT NOW
            </Button>
          </div>
          
          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('disclaimer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  Privacy Policy <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  Terms of Service <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" /> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            {/* More AI Tools button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple 
                           px-6 py-2 rounded-full text-white font-cyber-alt
                           transform hover:-translate-y-1 transition-transform duration-300
                           shadow-neon-blue hover:shadow-neon-purple"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright and image */}
        <div className="pt-6 border-t border-white/10 flex flex-col items-center">
          <a 
            href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-medium-shot-of-two-robots-standing.png/:/cr=t:3.48%25,l:0%25,w:100%25,h:93.05%25/rs=w:1200,h:600,cg:true" 
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 block cyber-panel p-1 max-w-xl w-full mx-auto"
          >
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-medium-shot-of-two-robots-standing.png/:/cr=t:3.48%25,l:0%25,w:100%25,h:93.05%25/rs=w:1200,h:600,cg:true"
              alt="Cinematic shot of two robots"
              className="w-full h-auto rounded"
              loading="lazy"
            />
          </a>
          
          <p className="text-gray-500 text-sm text-center">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-neon-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
