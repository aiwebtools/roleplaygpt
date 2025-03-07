
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";
import FloatingElements from "@/components/FloatingElements";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <FloatingElements />
      
      <div className="cyber-panel p-8 max-w-md w-full text-center z-10 animate-fade-in">
        <div className="text-6xl font-cyber-alt font-bold mb-6">
          <span className="text-cyber-neon-pink">4</span>
          <span className="text-cyber-neon-blue">0</span>
          <span className="text-cyber-neon-purple">4</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-white">System Malfunction</h1>
        
        <p className="text-gray-300 mb-8">
          The neural pathway you're looking for doesn't exist in our network. 
          Return to the main grid to continue your experience.
        </p>
        
        <Button href="/" variant="primary">
          Return to Main Grid
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cyber-neon-pink/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyber-neon-blue/10 filter blur-3xl"></div>
    </div>
  );
};

export default NotFound;
