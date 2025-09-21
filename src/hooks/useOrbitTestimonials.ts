import { useState, useEffect, useCallback } from 'react';

export const useOrbitTestimonials = (totalTestimonials: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotation every 7 seconds
  useEffect(() => {
    if (isPaused || isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, isAnimating, totalTestimonials]);

  const rotateToNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, totalTestimonials]);

  const rotateToPrevious = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, totalTestimonials]);

  const rotateToIndex = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, currentIndex]);

  return {
    currentIndex,
    isPaused,
    setIsPaused,
    isAnimating,
    rotateToNext,
    rotateToPrevious,
    rotateToIndex
  };
};