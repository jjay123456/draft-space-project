import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, User, TrendingUp } from 'lucide-react';

export const GrowthMeter: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(75), 500);
    const timer2 = setTimeout(() => setShowTransition(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      {/* Confidence Meter */}
      <div className="w-48 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Confidence Level</span>
          <span className="text-sm text-primary font-semibold">{progress}%</span>
        </div>
        
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-primary rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Icon Transition: Parent → Student */}
      <div className="flex items-center space-x-4">
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ 
            opacity: showTransition ? 0.5 : 1,
            scale: showTransition ? 0.9 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">Family Support</span>
        </motion.div>

        {/* Arrow transition */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <TrendingUp className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ 
            opacity: showTransition ? 1 : 0.5,
            scale: showTransition ? 1 : 0.9
          }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-primary-subtle rounded-full flex items-center justify-center border-2 border-primary">
            <User className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs text-primary font-medium">Independence</span>
        </motion.div>
      </div>

      {/* Subtle confetti particles */}
      {showTransition && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{
                left: `${50 + (Math.random() - 0.5) * 40}%`,
                top: `${50 + (Math.random() - 0.5) * 40}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -20, -40],
                x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};