import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Hand, Volume2, Captions } from 'lucide-react';

export const TechnologyIcons: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const technologies = [
    { 
      icon: Eye, 
      label: 'Visual', 
      color: 'hsl(var(--primary))',
      description: 'Interactive visuals & demonstrations'
    },
    { 
      icon: Hand, 
      label: 'Tactile', 
      color: 'hsl(var(--accent))',
      description: 'Hands-on exercises & gestures'
    },
    { 
      icon: Volume2, 
      label: 'Auditory', 
      color: 'hsl(var(--warning))',
      description: 'Optimized audio & pronunciation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      {/* Technology Icons */}
      <div className="flex items-center space-x-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.label}
            className="flex flex-col items-center space-y-2"
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              opacity: activeIndex === index ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center border-2"
              animate={{
                borderColor: activeIndex === index ? tech.color : 'hsl(var(--border))',
                backgroundColor: activeIndex === index ? `${tech.color}15` : 'transparent'
              }}
              transition={{ duration: 0.3 }}
            >
              <tech.icon 
                className="w-6 h-6"
                style={{ 
                  color: activeIndex === index ? tech.color : 'hsl(var(--muted-foreground))'
                }}
              />
            </motion.div>
            <div className={`text-xs font-medium transition-colors duration-300 ${
              activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {tech.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active description */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-sm text-center text-muted-foreground"
      >
        {technologies[activeIndex].description}
      </motion.div>

      {/* Captions Demo */}
      <motion.div
        className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <Captions className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">Live Captions</span>
        </div>
        <motion.div
          className="text-sm text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          "Hello! Let's practice pronunciation..."
        </motion.div>
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-primary/30 pointer-events-none"
          animate={{ 
            boxShadow: [
              '0 0 0 0 hsl(var(--primary) / 0)',
              '0 0 0 4px hsl(var(--primary) / 0.1)',
              '0 0 0 0 hsl(var(--primary) / 0)'
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </motion.div>
    </div>
  );
};