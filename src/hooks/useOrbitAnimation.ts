import { useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useOrbitAnimation = (currentIndex: number, isPaused: boolean) => {
  const rotation = useMotionValue(0);
  const orbitRadius = 250; // Fixed radius for consistent orbit
  const animationRef = useRef<any>(null);

  // Transform rotation for smooth circular movement
  const transformedRotation = useTransform(rotation, (value) => value);

  useEffect(() => {
    // Calculate target rotation based on current index
    const targetRotation = currentIndex * Math.PI;
    
    // Stop any existing animation
    if (animationRef.current) {
      animationRef.current.stop();
    }

    if (!isPaused) {
      // Animate to target rotation with spring physics
      animationRef.current = animate(rotation, targetRotation, {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1,
        duration: 0.8
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [currentIndex, isPaused, rotation]);

  return {
    rotation: transformedRotation,
    orbitRadius,
    rotationValue: rotation
  };
};