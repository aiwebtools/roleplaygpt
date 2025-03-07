
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex K.",
    role: "Fiction Writer",
    content: "Roleplay Companion has revolutionized my character development process. I can prototype dialogues and personalities before putting them on paper, saving me countless revisions.",
    avatar: "AK",
  },
  {
    name: "Morgan T.",
    role: "D&D Enthusiast",
    content: "As a Dungeon Master, having Roleplay Companion to create diverse NPCs on the fly has added incredible depth to our campaigns. My players can't tell which characters are pre-planned anymore!",
    avatar: "MT",
  },
  {
    name: "Jamie L.",
    role: "Psychologist",
    content: "I use Roleplay Companion to create roleplay scenarios for my patients dealing with social anxiety. The AI's ability to adapt its communication style has been invaluable.",
    avatar: "JL",
  },
  {
    name: "Riley S.",
    role: "Cosplayer",
    content: "Perfecting a character's mannerisms and dialogue has never been easier. I use Roleplay Companion to practice interactions before conventions. It's like having the actual character to study!",
    avatar: "RS",
  },
  {
    name: "Taylor P.",
    role: "Adult Content Creator",
    content: "The flexibility and creativity of the AI has helped me develop more nuanced and engaging scenarios for my audience. The unrestricted nature means I can explore all facets of human desire.",
    avatar: "TP",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    testimonialRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      if (index === activeIndex) {
        ref.classList.add('opacity-100', 'translate-x-0');
        ref.classList.remove('opacity-0', 'translate-x-20');
      } else {
        ref.classList.add('opacity-0', 'translate-x-20');
        ref.classList.remove('opacity-100', 'translate-x-0');
      }
    });
  }, [activeIndex]);

  return (
    <section className="cyber-section">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text">What Users Are Saying</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how Roleplay Companion GPT is transforming creative expression, entertainment, and learning
            for users around the world.
          </p>
        </div>
        
        <div className="cyber-panel min-h-[300px] relative overflow-hidden">
          {/* Testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className={cn(
                "absolute inset-0 p-8 transition-all duration-500 ease-in-out",
                index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              )}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="text-cyber-neon-blue text-5xl font-serif mb-4">"</div>
                  <p className="text-gray-300 text-lg mb-6">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-cyber-neon-blue"
                    : "bg-gray-600 hover:bg-gray-400"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
