
import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  
  const handleAgree = () => {
    // Set a cookie to remember that the user has agreed
    document.cookie = "disclaimerAgreed=true;max-age=2592000;path=/"; // 30 days
    toast({
      title: "Welcome!",
      description: "You can now enjoy Roleplay GPT fully.",
      variant: "default",
    });
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative cyber-panel max-w-md w-full overflow-hidden rounded-xl border border-cyber-neon-purple/50"
        style={{
          backgroundImage: 'linear-gradient(225deg, rgba(33, 15, 69, 0.9) 0%, rgba(18, 18, 37, 0.9) 100%)',
          boxShadow: '0 0 30px rgba(189, 0, 255, 0.3)'
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-cyber-dark/70 hover:bg-cyber-neon-purple/20 text-cyber-neon-purple transition-all"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-cyber-alt mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple">
            DISCLAIMER
          </h2>
          
          <div className="text-gray-300 space-y-4 text-sm">
            <p>
              <span className="text-cyber-neon-blue font-semibold">Age Restriction:</span> This service is intended for users 18+ years old and may contain adult content.
            </p>
            
            <p>
              <span className="text-cyber-neon-blue font-semibold">Entertainment Only:</span> Roleplay GPT is for entertainment purposes only. Content is fictional and should not be considered advice.
            </p>
            
            <p>
              <span className="text-cyber-neon-blue font-semibold">User Responsibility:</span> You agree not to use this service for illegal activities or content that violates others' rights.
            </p>
            
            <p className="text-xs text-gray-400">
              By clicking "I AGREE" you confirm you are at least 18 years old and accept our terms.
            </p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleAgree}
              className="relative group overflow-hidden rounded-md py-2.5 px-8 font-cyber-alt font-bold text-white transition-all duration-300
              bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-pink to-cyber-neon-purple bg-size-200 bg-pos-0
              hover:bg-pos-100 hover:scale-105 active:scale-95
              shadow-xl shadow-cyber-neon-purple/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Check size={18} className="stroke-[3]" />
                I AGREE
              </span>
              <span className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 
              bg-gradient-to-r from-cyber-neon-pink via-cyber-neon-purple to-cyber-neon-pink
              transition-transform duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
