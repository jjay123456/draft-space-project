import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useTreeGrowth = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  const isInView = useInView(containerRef, { 
    amount: 0.3,
    once: true 
  });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      
      // Animation sequence
      const phases = [
        { delay: 0, phase: 1 }, // Start growing trees
        { delay: 800, phase: 2 }, // Trees half grown
        { delay: 1200, phase: 3 }, // Trees fully grown
        { delay: 1600, phase: 4 }, // Left card appears
        { delay: 2000, phase: 5 }, // Right card appears
        { delay: 2200, phase: 6 }, // Sapling glows
      ];

      phases.forEach(({ delay, phase }) => {
        setTimeout(() => {
          setAnimationPhase(phase);
        }, delay);
      });
    }
  }, [isInView, isVisible]);

  return {
    containerRef,
    isVisible,
    animationPhase,
    showLeftTree: animationPhase >= 1,
    showRightTree: animationPhase >= 1,
    treesFullyGrown: animationPhase >= 3,
    showLeftCard: animationPhase >= 4,
    showRightCard: animationPhase >= 5,
    showSaplingGlow: animationPhase >= 6,
  };
};