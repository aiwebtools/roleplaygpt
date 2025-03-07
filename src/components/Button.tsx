
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', href, target, ...props }, ref) => {
    const baseStyles = "cyber-button inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple text-white shadow-neon-blue",
      secondary: "bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-pink text-white shadow-neon-purple",
      outline: "border border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue/10",
      ghost: "bg-transparent hover:bg-cyber-neon-blue/10 text-cyber-neon-blue"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 py-2 px-6",
      lg: "h-12 px-8 text-lg"
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    // If href is provided, render as an anchor tag
    if (href) {
      return (
        <a 
          href={href}
          className={buttonClasses}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    // Otherwise render as a button
    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
