import { useScroll, useTransform } from 'framer-motion';
import { RefObject, useMemo } from 'react';

interface UseScrollProgressProps {
  containerRef: RefObject<HTMLElement>;
  stepCount: number;
}

export const useScrollProgress = ({ containerRef, stepCount }: UseScrollProgressProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const activeStep = useTransform(
    scrollYProgress,
    [0, 1],
    [0, stepCount - 1]
  );

  const getStepProgress = useMemo(() => {
    return (stepIndex: number) => {
      const stepStart = stepIndex / stepCount;
      const stepEnd = (stepIndex + 1) / stepCount;
      
      return useTransform(
        scrollYProgress,
        [stepStart, stepEnd],
        [0, 1]
      );
    };
  }, [scrollYProgress, stepCount]);

  return {
    scrollYProgress,
    activeStep,
    getStepProgress
  };
};