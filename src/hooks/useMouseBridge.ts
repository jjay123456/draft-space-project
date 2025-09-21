import { useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useMouseBridge = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovering = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth spring animations for bridge lighting
  const bridgeProgress = useSpring(0, { stiffness: 100, damping: 25 });
  const leftCardIntensity = useSpring(0, { stiffness: 80, damping: 20 });
  const rightCardIntensity = useSpring(0, { stiffness: 80, damping: 20 });
  const centerGlow = useSpring(0, { stiffness: 60, damping: 30 });

  // Transform mouse position to bridge progress (0 to 1)
  const normalizedProgress = useTransform(mouseX, [0, 800], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Normalize coordinates relative to container
      const normalizedX = Math.max(0, Math.min(1, x / rect.width));
      const normalizedY = Math.max(0, Math.min(1, y / rect.height));

      mouseX.set(x);
      mouseY.set(y);

      // Update bridge progress based on mouse X position
      bridgeProgress.set(normalizedX);

      // Update card intensities based on mouse proximity
      leftCardIntensity.set(normalizedX < 0.5 ? (0.5 - normalizedX) * 2 : 0);
      rightCardIntensity.set(normalizedX > 0.5 ? (normalizedX - 0.5) * 2 : 0);

      // Center glow when mouse is in the middle area
      const centerDistance = Math.abs(normalizedX - 0.5);
      centerGlow.set(centerDistance < 0.2 ? (0.2 - centerDistance) * 5 : 0);
    };

    const handleMouseEnter = () => {
      isHovering.set(1);
    };

    const handleMouseLeave = () => {
      isHovering.set(0);
      bridgeProgress.set(0);
      leftCardIntensity.set(0);
      rightCardIntensity.set(0);
      centerGlow.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, isHovering, bridgeProgress, leftCardIntensity, rightCardIntensity, centerGlow]);

  return {
    containerRef,
    mouseX,
    mouseY,
    isHovering,
    bridgeProgress,
    leftCardIntensity,
    rightCardIntensity,
    centerGlow,
    normalizedProgress
  };
};