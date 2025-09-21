import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMouseBridge } from '@/hooks/useMouseBridge';
import BridgeTestimonialCard from './BridgeTestimonialCard';
import TestimonialModal from './TestimonialModal';

const testimonials = [
  {
    id: 1,
    quote: "My English has never been very good, and I've always hoped to improve. That's why I decided to join the one-on-one English tutoring program. During this learning journey, I truly felt so much encouragement and support. I want to especially thank Teacher Howard and Teacher Bryan. The tutors are very patient—they never get frustrated with me even when my level isn't high. Instead, they guide me step by step, making me more and more willing to speak up. I've even started to feel that English isn't so scary anymore. I really enjoy this teaching style. Every class is fun, something I always look forward to, and it has given me growing confidence in my English. Thank you for making sure I don't feel alone on this learning path.",
    author: "16-year-old student",
    since: "Dec 2024"
  },
  {
    id: 2,
    quote: "In the past, I had almost no experience speaking English, and I lacked confidence to even try. Since the education system didn't really require spoken English, I always chose to avoid it. But after joining this program, I now have a set time each week to interact fully in English with my tutor. At first, I was really nervous—worried that I wouldn't understand or that I would speak poorly. But the tutor's teaching style gradually eased my stress and helped me open up. Each lesson starts with simple, clear conversations and guidance, then moves into pronunciation practice, vocabulary explanations, and sentence application. Finally, we do role-play and reading exercises. The whole arrangement is systematic and well-structured. Along the way, my tutor has given me specific feedback on my pronunciation, and often uses visuals and examples to help me understand. For instance, I sometimes add an unnecessary 's' or drop certain sounds, and the tutor always reminds me and helps me correct it. I'm still practicing, but compared to before, I feel much less resistance to English and have more courage to try. This has been such an important learning experience for me. Thank you to the teachers for giving me this opportunity and helping me realize that I can slowly learn to express myself in English.",
    author: "College student, male",
    since: "Apr 2025"
  }
];

const BridgeOfVoices = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const { 
    containerRef, 
    bridgeProgress, 
    leftCardIntensity, 
    rightCardIntensity, 
    centerGlow,
    isHovering 
  } = useMouseBridge();

  // Auto-demo animation if no interaction after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        // Trigger a brief demo animation
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const bridgeOpacity = useTransform(bridgeProgress, [0, 1], [0.4, 1]);
  const bridgeLightIntensity = useTransform(bridgeProgress, [0, 1], [0, 0.8]);

  const handleReadMore = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <>
      <div 
        ref={containerRef} 
        className="relative py-20 md:py-32 overflow-hidden cursor-crosshair"
        onMouseEnter={() => setHasInteracted(true)}
      >
        {/* Instruction Text */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: hasInteracted ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm text-center px-4">
            Hover across the bridge to connect voices
          </p>
        </motion.div>

        {/* Enhanced Bridge Structure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-40">
            {/* Desktop Enhanced Bridge */}
            <div className="hidden md:block">
              <svg
                viewBox="0 0 800 160"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Dynamic Bridge Gradient */}
                  <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <motion.stop
                      offset="0%"
                      stopColor="hsl(var(--primary))"
                      style={{ stopOpacity: bridgeOpacity }}
                    />
                    <motion.stop
                      offset="50%"
                      stopColor="hsl(var(--primary))"
                      style={{ stopOpacity: bridgeLightIntensity }}
                    />
                    <motion.stop
                      offset="100%"
                      stopColor="hsl(var(--primary))"
                      style={{ stopOpacity: bridgeOpacity }}
                    />
                  </linearGradient>
                  
                  {/* Glow Filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Bridge Towers */}
                <rect x="80" y="60" width="8" height="60" fill="hsl(var(--primary))" opacity="0.6" />
                <rect x="712" y="60" width="8" height="60" fill="hsl(var(--primary))" opacity="0.6" />
                
                {/* Suspension Cables */}
                <path d="M88 60 Q400 40 712 60" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <path d="M88 65 Q400 45 712 65" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                
                {/* Main Bridge Arch */}
                <motion.path
                  d="M80 100 Q400 40 720 100"
                  stroke="url(#bridgeGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="drop-shadow-lg"
                  filter="url(#glow)"
                />
                
                {/* Bridge Deck */}
                <motion.path
                  d="M80 100 L720 100"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity="0.4"
                />

                {/* Connection Points */}
                <motion.circle 
                  cx="400" 
                  cy="68" 
                  r="4" 
                  fill="hsl(var(--primary))" 
                  style={{ opacity: centerGlow }}
                  filter="url(#glow)"
                />
                
                {/* Floating Particles */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={150 + i * 125}
                    cy={85 - i * 5}
                    r="2"
                    fill="hsl(var(--primary))"
                    style={{ 
                      opacity: useTransform(bridgeProgress, [i * 0.2, (i + 1) * 0.2], [0, 0.8])
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Mobile Enhanced Bridge */}
            <div className="md:hidden flex items-center justify-center h-full">
              <div className="w-full max-w-sm h-2 bg-border/30 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full"
                  style={{ 
                    scaleX: bridgeProgress
                  }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
                  style={{ opacity: centerGlow }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Emblem */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: centerGlow }}
        >
          <motion.div
            className="text-center px-6 py-4 bg-background/90 backdrop-blur-sm rounded-xl border border-primary/30 shadow-xl"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px hsl(var(--primary) / 0.2)",
                "0 0 40px hsl(var(--primary) / 0.4)",
                "0 0 20px hsl(var(--primary) / 0.2)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <p className="text-sm md:text-base font-semibold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Confidence grows when voices connect
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <BridgeTestimonialCard
              testimonial={testimonials[0]}
              intensity={leftCardIntensity}
              side="left"
              onReadMore={() => handleReadMore(testimonials[0])}
            />
            <BridgeTestimonialCard
              testimonial={testimonials[1]}
              intensity={rightCardIntensity}
              side="right"
              onReadMore={() => handleReadMore(testimonials[1])}
            />
          </div>
        </div>
      </div>

      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default BridgeOfVoices;