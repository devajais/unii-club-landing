import React, { useState, useEffect, useRef } from 'react';

// --- Scroll Reveal FadeIn ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '', threshold = 0.1, triggerOnce = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }, delay);
        } else {
            if (!triggerOnce) {
                setIsVisible(false);
            }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, triggerOnce]);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

// --- Shiny Text ---
interface ShinyTextProps {
    children: React.ReactNode;
    className?: string;
}
export const ShinyText: React.FC<ShinyTextProps> = ({ children, className }) => {
    return (
        <span className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue animate-gradient-bg bg-[200%_auto] ${className}`}>
            {children}
        </span>
    );
};


// --- Glass Icon ---
interface GlassIconProps {
    children: React.ReactNode;
    className?: string;
}
export const GlassIcon: React.FC<GlassIconProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-white/5 border border-white/10 shadow-lg ${className}`}>
            {children}
        </div>
    );
};


// --- Button (no changes needed) ---
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary', as = 'button', href }) => {
  const baseClasses = 'inline-block px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-dark-bg text-center';
  const variantClasses = {
    primary: 'bg-brand-purple text-white hover:bg-violet-500 focus:ring-brand-purple',
    secondary: 'bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue',
  };

  if (as === 'a') {
    return (
        <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</a>
    )
  }

  return <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</button>;
};

// --- Card (no changes needed) ---
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-dark-card border border-dark-border rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-purple/50 hover:-translate-y-2 ${className}`}>
      {children}
    </div>
  );
};