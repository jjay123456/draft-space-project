import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap } from 'lucide-react';

export const TeamBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="perspective-1000"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-48 h-32 transform-style-preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front side - Individual cards sliding together */}
          <motion.div
            className="absolute inset-0 backface-hidden"
            initial={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center h-full space-x-4">
              {/* Tutor card */}
              <motion.div
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center space-y-2 shadow-sm"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-8 h-8 bg-primary-subtle rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs font-medium text-center">Native Tutor</div>
              </motion.div>

              {/* Plus indicator */}
              <motion.div
                className="text-primary font-bold text-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                +
              </motion.div>

              {/* SLP card */}
              <motion.div
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center space-y-2 shadow-sm"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-8 h-8 bg-accent-subtle rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <div className="text-xs font-medium text-center">Speech Expert</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Back side - Team badge */}
          <motion.div
            className="absolute inset-0 rotate-y-180 backface-hidden"
          >
            <div className="h-full flex items-center justify-center">
              <motion.div
                className="bg-gradient-to-br from-primary-subtle to-accent-subtle border-2 border-primary rounded-xl p-6 flex flex-col items-center space-y-3 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                    <GraduationCap className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>
                <div className="text-sm font-bold text-primary text-center">
                  Expert Team
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Conversation + Expertise
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};