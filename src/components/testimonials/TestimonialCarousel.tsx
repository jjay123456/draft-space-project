import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOrbitAnimation } from '@/hooks/useOrbitAnimation';
import { useDragOrbit } from '@/hooks/useDragOrbit';
import TestimonialCard from './TestimonialCard';
import TestimonialModal from './TestimonialModal';

const testimonials = [
  {
    id: 1,
    quote: "My English has never been very good, and I've always hoped to improve. That's why I decided to join the one-on-one English tutoring program. During this learning journey, I truly felt so much encouragement and support. I want to especially thank Teacher Howard and Teacher Bryan. The tutors are very patient—they never get frustrated with me even when my level isn't high. Instead, they guide me step by step, making me more and more willing to speak up. I've even started to feel that English isn't so scary anymore. I really enjoy this teaching style. Every class is fun, something I always look forward to, and it has given me growing confidence in my English. Thank you for making sure I don't feel alone on this learning path.",
    author: "16-year-old student",
    since: "since Dec 2024"
  },
  {
    id: 2,
    quote: "In the past, I had almost no experience speaking English, and I lacked confidence to even try. Since the education system didn't really require spoken English, I always chose to avoid it. But after joining this program, I now have a set time each week to interact fully in English with my tutor. At first, I was really nervous—worried that I wouldn't understand or that I would speak poorly. But the tutor's teaching style gradually eased my stress and helped me open up. Each lesson starts with simple, clear conversations and guidance, then moves into pronunciation practice, vocabulary explanations, and sentence application. Finally, we do role-play and reading exercises. The whole arrangement is systematic and well-structured. Along the way, my tutor has given me specific feedback on my pronunciation, and often uses visuals and examples to help me understand. For instance, I sometimes add an unnecessary 's' or drop certain sounds, and the tutor always reminds me and helps me correct it. I'm still practicing, but compared to before, I feel much less resistance to English and have more courage to try. This has been such an important learning experience for me. Thank you to the teachers for giving me this opportunity and helping me realize that I can slowly learn to express myself in English.",
    author: "College student (male)",
    since: "since Apr 2025"
  }
];

const TestimonialCarousel = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalTestimonial, setModalTestimonial] = useState<typeof testimonials[0] | null>(null);

  // Desktop orbit animation
  const { rotation, orbitRadius, rotationValue } = useOrbitAnimation(currentIndex, isPaused);
  const { dragControls, handleDrag } = useDragOrbit(setCurrentIndex, setIsPaused);

  // Auto-rotation every 12 seconds
  useEffect(() => {
    if (!isPaused && !isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [isPaused, isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openModal = (testimonial: typeof testimonials[0]) => {
    setModalTestimonial(testimonial);
  };

  const closeModal = () => {
    setModalTestimonial(null);
  };

  if (isMobile) {
    // Mobile: Swipe carousel
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-4"
            >
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                isActive={true}
                onReadMore={() => openModal(testimonials[currentIndex])}
                className="mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full bg-card border-border hover:bg-accent hover:text-accent-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full bg-card border-border hover:bg-accent hover:text-accent-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop: 3D Dual-Orbit animation
  return (
    <div 
      className="relative w-full max-w-6xl mx-auto h-[600px] perspective-[1100px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Orbit container */}
      <div className="absolute inset-0 flex items-center justify-center transform-style-preserve-3d">
        <motion.div
          className="relative transform-style-preserve-3d"
          style={{ 
            width: orbitRadius * 2,
            height: orbitRadius * 2,
          }}
          drag="x"
          dragControls={dragControls}
          onDrag={handleDrag}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
        >
          {/* Central anchor point (invisible) */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1 -translate-y-1 opacity-0" />

          {/* Testimonial cards in orbit */}
          {testimonials.map((testimonial, index) => {
            const angle = (index * Math.PI) + (rotationValue?.get() || 0);
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={testimonial.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  x: x - 200, // Offset by half card width
                  y: y - 150, // Offset by half card height
                }}
                animate={{
                  scale: isActive ? 1.05 : 0.92,
                  opacity: isActive ? 1 : 0.75,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] // power2.inOut equivalent
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={isActive}
                  onClick={() => setCurrentIndex(index)}
                  onReadMore={() => openModal(testimonial)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full bg-card/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full bg-card/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${50 + Math.cos(rotationValue?.get() || 0) * 10}% ${50 + Math.sin(rotationValue?.get() || 0) * 10}%, 
            hsl(var(--primary) / 0.05) 0%, 
            transparent 50%)`
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Modal */}
      <TestimonialModal
        testimonial={modalTestimonial}
        isOpen={!!modalTestimonial}
        onClose={closeModal}
      />
    </div>
  );
};

export default TestimonialCarousel;