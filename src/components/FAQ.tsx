
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Roleplay Companion GPT?",
    answer: "Roleplay Companion GPT is an advanced AI designed for immersive roleplaying experiences. It can assume any character or persona and interact with you in a consistent, believable manner while maintaining perfect character integrity throughout your conversation."
  },
  {
    question: "Is there a limit to what characters the AI can portray?",
    answer: "Roleplay Companion can portray virtually any character you can imagine, from historical figures to fictional characters, creatures, or entirely original personas. The AI adapts its communication style, knowledge, and personality to match the role."
  },
  {
    question: "How realistic are the interactions?",
    answer: "The AI provides highly realistic interactions by maintaining consistent personality traits, appropriate knowledge levels, and authentic speech patterns for each character. Once in a role, it remains fully immersed in that character throughout your conversation."
  },
  {
    question: "Can Roleplay Companion handle adult or sensitive content?",
    answer: "Yes, Roleplay Companion is designed for adult users and can engage in mature themes and explicit content while maintaining respect for consent and ethical boundaries. The experience adapts to your comfort level while ensuring all interactions remain respectful."
  },
  {
    question: "What additional capabilities does the AI have beyond conversation?",
    answer: "Beyond conversation, Roleplay Companion can perform web searches for research, create code, generate images related to your scenario, analyze data, and create visualizations—all while maintaining its character persona."
  },
  {
    question: "How do I start using Roleplay Companion GPT?",
    answer: "Simply click the 'USE ROLEPLAY GPT NOW' button at the top of this page. When you begin your conversation, the AI will ask for your desired character name and role, then immediately assume that identity for your interaction."
  },
  {
    question: "Is Roleplay Companion suitable for creative writing assistance?",
    answer: "Absolutely. Many writers use Roleplay Companion to develop characters, prototype dialogues, explore narrative scenarios, and overcome writer's block by engaging with their characters directly."
  },
  {
    question: "Are there any usage limits?",
    answer: "Usage limits depend on your OpenAI subscription plan. The AI itself has no inherent limitations on conversation length or frequency of use beyond those imposed by the underlying platform."
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; toggle: () => void }> = ({
  item,
  isOpen,
  toggle
}) => {
  return (
    <div className="cyber-panel mb-4 transition-all duration-300">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={toggle}
      >
        <span className="font-cyber-alt font-semibold text-white">{item.question}</span>
        <span className="text-cyber-neon-blue">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={cn(
          "px-4 pb-4 pt-0 text-gray-300 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="cyber-section">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Roleplay Companion GPT and how to get the most from your experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
