import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTreeGrowth } from '@/hooks/useTreeGrowth';
import TreeTestimonialCard from './TreeTestimonialCard';
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

const GardenOfGrowth = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { 
    containerRef, 
    showLeftTree, 
    showRightTree, 
    treesFullyGrown,
    showLeftCard, 
    showRightCard, 
    showSaplingGlow 
  } = useTreeGrowth();

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
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, hsl(197 71% 85%), hsl(142 69% 90%))'
        }}
      >
        {/* Ground line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/40" />

        {/* Garden scene container */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-end">
            
            {/* Left Tree & Card */}
            <div className="relative">
              {/* Left Tree SVG */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={showLeftTree ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <svg
                  width="200"
                  height="300"
                  viewBox="0 0 200 300"
                  className="overflow-visible"
                >
                  <defs>
                    <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(30 30% 30%)" />
                      <stop offset="100%" stopColor="hsl(30 30% 40%)" />
                    </linearGradient>
                    <radialGradient id="leavesGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(142 76% 45%)" />
                      <stop offset="100%" stopColor="hsl(142 76% 35%)" />
                    </radialGradient>
                  </defs>

                  {/* Trunk */}
                  <motion.rect
                    x="90"
                    y="200"
                    width="20"
                    height="100"
                    fill="url(#trunkGradient)"
                    initial={{ scaleY: 0 }}
                    animate={showLeftTree ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ transformOrigin: "bottom" }}
                  />

                  {/* Main branches */}
                  <motion.path
                    d="M100 220 Q80 200 70 180 M100 210 Q120 190 130 170 M100 230 Q85 210 75 190"
                    stroke="url(#trunkGradient)"
                    strokeWidth="8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={showLeftTree ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  />

                  {/* Leaves clusters */}
                  <motion.ellipse
                    cx="70"
                    cy="170"
                    rx="35"
                    ry="30"
                    fill="url(#leavesGradient)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="130"
                    cy="160"
                    rx="40"
                    ry="35"
                    fill="url(#leavesGradient)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="100"
                    cy="140"
                    rx="45"
                    ry="40"
                    fill="url(#leavesGradient)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="75"
                    cy="180"
                    rx="30"
                    ry="25"
                    fill="url(#leavesGradient)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>

              {/* Left testimonial card */}
              <TreeTestimonialCard
                testimonial={testimonials[0]}
                side="left"
                isVisible={showLeftCard}
                onReadMore={() => handleReadMore(testimonials[0])}
              />
            </div>

            {/* Center Sapling */}
            <div className="flex flex-col items-center justify-end">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={showSaplingGlow ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Sapling SVG */}
                <motion.svg
                  width="80"
                  height="120"
                  viewBox="0 0 80 120"
                  className="mb-6"
                  animate={showSaplingGlow ? { 
                    filter: [
                      "drop-shadow(0 0 5px hsl(142 76% 45%))",
                      "drop-shadow(0 0 15px hsl(142 76% 45%))",
                      "drop-shadow(0 0 5px hsl(142 76% 45%))"
                    ]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <defs>
                    <linearGradient id="saplingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(142 76% 55%)" />
                      <stop offset="100%" stopColor="hsl(142 76% 35%)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Stem */}
                  <rect x="35" y="80" width="10" height="40" fill="hsl(142 76% 40%)" />
                  
                  {/* Leaves */}
                  <ellipse cx="25" cy="70" rx="20" ry="15" fill="url(#saplingGradient)" />
                  <ellipse cx="55" cy="65" rx="18" ry="12" fill="url(#saplingGradient)" />
                  <ellipse cx="40" cy="50" rx="25" ry="20" fill="url(#saplingGradient)" />
                </motion.svg>

                {/* Tagline */}
                <motion.div
                  className="text-center px-6 py-4 bg-background/90 backdrop-blur-sm rounded-xl border border-accent/30 shadow-xl"
                  animate={showSaplingGlow ? { 
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 20px hsl(142 76% 45% / 0.2)",
                      "0 0 30px hsl(142 76% 45% / 0.4)",
                      "0 0 20px hsl(142 76% 45% / 0.2)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                >
                  <p className="text-sm md:text-base font-semibold text-accent">
                    Growth takes root when voices are nurtured
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Tree & Card */}
            <div className="relative">
              {/* Right Tree SVG (mirrored) */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={showRightTree ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <svg
                  width="200"
                  height="300"
                  viewBox="0 0 200 300"
                  className="overflow-visible scale-x-[-1]"
                >
                  <defs>
                    <linearGradient id="trunkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(30 30% 30%)" />
                      <stop offset="100%" stopColor="hsl(30 30% 40%)" />
                    </linearGradient>
                    <radialGradient id="leavesGradient2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(142 76% 45%)" />
                      <stop offset="100%" stopColor="hsl(142 76% 35%)" />
                    </radialGradient>
                  </defs>

                  {/* Trunk */}
                  <motion.rect
                    x="90"
                    y="200"
                    width="20"
                    height="100"
                    fill="url(#trunkGradient2)"
                    initial={{ scaleY: 0 }}
                    animate={showRightTree ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    style={{ transformOrigin: "bottom" }}
                  />

                  {/* Main branches */}
                  <motion.path
                    d="M100 220 Q80 200 70 180 M100 210 Q120 190 130 170 M100 230 Q85 210 75 190"
                    stroke="url(#trunkGradient2)"
                    strokeWidth="8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={showRightTree ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  />

                  {/* Leaves clusters */}
                  <motion.ellipse
                    cx="70"
                    cy="170"
                    rx="35"
                    ry="30"
                    fill="url(#leavesGradient2)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="130"
                    cy="160"
                    rx="40"
                    ry="35"
                    fill="url(#leavesGradient2)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="100"
                    cy="140"
                    rx="45"
                    ry="40"
                    fill="url(#leavesGradient2)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  />
                  <motion.ellipse
                    cx="75"
                    cy="180"
                    rx="30"
                    ry="25"
                    fill="url(#leavesGradient2)"
                    initial={{ scale: 0 }}
                    animate={treesFullyGrown ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>

              {/* Right testimonial card */}
              <TreeTestimonialCard
                testimonial={testimonials[1]}
                side="right"
                isVisible={showRightCard}
                onReadMore={() => handleReadMore(testimonials[1])}
              />
            </div>
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

export default GardenOfGrowth;