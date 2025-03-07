
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import FeaturedImage from '@/components/FeaturedImage';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Apply smooth scroll reveal for sections
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      document.querySelectorAll('.cyber-section').forEach((el) => {
        observer.observe(el);
      });
    };
    
    observeElements();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background animation elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <FeaturedImage />
      </main>
      
      {/* Header */}
      <Header />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
