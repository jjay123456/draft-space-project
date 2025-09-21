import { useDragControls, PanInfo } from 'framer-motion';
import { useCallback, useRef } from 'react';

export const useDragOrbit = (
  setCurrentIndex: (updater: number | ((prev: number) => number)) => void,
  setIsPaused: (paused: boolean) => void
) => {
  const dragControls = useDragControls();
  const dragStartX = useRef(0);
  const totalDrag = useRef(0);

  const handleDragStart = useCallback(() => {
    setIsPaused(true);
    totalDrag.current = 0;
  }, [setIsPaused]);

  const handleDrag = useCallback((event: Event, info: PanInfo) => {
    totalDrag.current += info.delta.x;
  }, []);

  const handleDragEnd = useCallback(() => {
    const threshold = 100; // Minimum drag distance to change testimonial
    
    if (Math.abs(totalDrag.current) > threshold) {
      if (totalDrag.current > 0) {
        // Dragged right - go to previous
        setCurrentIndex(prev => (prev - 1 + 2) % 2);
      } else {
        // Dragged left - go to next
        setCurrentIndex(prev => (prev + 1) % 2);
      }
    }

    // Resume auto-rotation after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);

    totalDrag.current = 0;
  }, [setCurrentIndex, setIsPaused]);

  return {
    dragControls,
    handleDrag,
    handleDragStart,
    handleDragEnd
  };
};