import React from 'react';

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = "", children }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Enhanced Floating Orbs with more gradients */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/25 via-accent/20 to-primary/15 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 via-success/15 to-accent/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-primary/15 via-success/10 to-accent/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-success/25 via-primary/20 to-accent/15 rounded-full blur-md animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-gradient-to-br from-accent/18 via-primary/12 to-success/15 rounded-full blur-lg animate-pulse delay-1500"></div>
      <div className="absolute top-3/4 left-1/3 w-36 h-36 bg-gradient-to-tl from-primary/12 via-accent/15 to-success/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/90 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background/80 to-transparent"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background/80 to-transparent"></div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default GridBackground;