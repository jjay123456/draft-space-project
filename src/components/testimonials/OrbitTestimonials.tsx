import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import TestimonialsModal from './TestimonialsModal';

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

interface OrbitTestimonialsProps {
  onSeeAllClick?: () => void;
}

const OrbitTestimonials = ({ onSeeAllClick }: OrbitTestimonialsProps) => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0);
  const [currentOrbitIndex, setCurrentOrbitIndex] = useState(1);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const orbitRotation = useMotionValue(0);
  
  // Reactive counter-rotation to keep orbit card upright
  const cardRotation = useTransform(orbitRotation, (value) => -value);

  const handleSeeAllClick = (e: React.MouseEvent) => {
    console.log('See All button clicked!');
    e.preventDefault();
    e.stopPropagation();
    
    if (onSeeAllClick) {
      console.log('Calling onSeeAllClick prop');
      onSeeAllClick();
    } else {
      console.log('Opening modal');
      setIsModalOpen(true);
    }
  };

  const handleSwapClick = (e: React.MouseEvent) => {
    console.log('Swap button clicked!');
    e.preventDefault();
    e.stopPropagation();
    
    if (isSwapping) return;
    
    setIsSwapping(true);
    
    // Simply swap the indices
    const newCenterIndex = currentOrbitIndex;
    const newOrbitIndex = currentCenterIndex;
    
    setCurrentCenterIndex(newCenterIndex);
    setCurrentOrbitIndex(newOrbitIndex);
    
    // Reset swapping state
    setTimeout(() => {
      setIsSwapping(false);
    }, 600);
  };

  // Continuous orbit rotation - visual effect only with optimized performance
  useEffect(() => {
    const controls = animate(orbitRotation, orbitRotation.get() + 360, {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [orbitRotation]);

  const centerTestimonial = testimonials[currentCenterIndex];
  const orbitTestimonial = testimonials[currentOrbitIndex];

  // Calculate orbit position for perfect centering on circle
  const orbitRadius = 280; // Distance from center to card center  
  const orbitAngle = Math.PI / 2; // Start at bottom of circle (90 degrees)
  const orbitCardX = Math.cos(orbitAngle) * orbitRadius;
  const orbitCardY = Math.sin(orbitAngle) * orbitRadius;

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center px-6">
      {/* TEST BUTTON - Remove this after testing */}
      <button 
        onClick={() => alert('Basic button works!')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 z-50 relative"
      >
        Test Button (Remove After Testing)
      </button>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/90 bg-clip-text text-transparent mb-4">
          Student Testimonials
        </h2>
        <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto font-light tracking-wide">
          Student stories orbiting around transformative English learning experiences
        </p>
      </div>

      {/* Orbit Container */}
      <div 
        className="relative w-full max-w-5xl h-[500px] flex items-center justify-center orbit-container"
      >
        {/* Glowing Gradient Circle Orbit */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            width="620" 
            height="620" 
            viewBox="0 0 620 620" 
            className="absolute overflow-visible orbit-line pointer-events-none"
          >
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3BA9FF" />
                <stop offset="50%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#4ADE80" />
              </linearGradient>
              <filter id="orbitGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="310"
              cy="310"
              r="280"
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="3"
              filter="url(#orbitGlow)"
              opacity={0.7}
              className="transition-opacity duration-500"
            />
            
            {/* Multiple floating orbs around the circle - synced with card rotation */}
            <g>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 310 310"
                to="360 310 310"
                dur="30s"
                repeatCount="indefinite"
              />
              {/* Main orbit orbs */}
              <circle cx="310" cy="30" r="4" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.8" />
              <circle cx="590" cy="310" r="3" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="310" cy="590" r="4" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.8" />
              <circle cx="30" cy="310" r="3" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="502" cy="118" r="2" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="502" cy="502" r="2" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="118" cy="502" r="2" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="118" cy="118" r="2" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
            </g>
            
            {/* Additional slower rotating orbs */}
            <g>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 310 310"
                to="360 310 310"
                dur="30s"
                repeatCount="indefinite"
              />
              <circle cx="370" cy="65" r="2.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.5" />
              <circle cx="555" cy="250" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.3" />
              <circle cx="450" cy="450" r="3" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.7" />
              <circle cx="170" cy="450" r="2" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="65" cy="250" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.3" />
              <circle cx="250" cy="65" r="2.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.5" />
            </g>
            
            {/* Fastest rotating small orbs */}
            <g>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 310 310"
                to="360 310 310"
                dur="30s"
                repeatCount="indefinite"
              />
              <circle cx="420" cy="90" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="530" cy="190" r="1" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="530" cy="430" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="420" cy="530" r="1" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="200" cy="530" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="90" cy="430" r="1" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
              <circle cx="90" cy="190" r="1.5" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.6" />
              <circle cx="200" cy="90" r="1" fill="url(#orbitGradient)" filter="url(#orbitGlow)" opacity="0.4" />
            </g>
          </svg>
        </div>

        {/* Center (Active) Card */}
        <motion.div
          key={`center-${currentCenterIndex}`}
          initial={false}
          animate={{ 
            scale: 1,
            opacity: 1
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-20 w-80 md:w-96 bg-card border border-border rounded-xl p-6 shadow-lg overflow-hidden"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="mb-4">
            <h3 className="font-bold text-lg text-card-foreground">
              {centerTestimonial.author}
            </h3>
            <p className="text-muted-foreground text-sm">
              Since {centerTestimonial.since}
            </p>
          </div>
          <div className="relative">
            <p className="text-card-foreground leading-relaxed line-clamp-[8]">
              {centerTestimonial.quote}
            </p>
            {/* Gradient fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            
            {/* See All button - Fixed with better z-index and pointer events */}
            <button
              onClick={handleSeeAllClick}
              onMouseDown={(e) => {
                console.log('See All mousedown event');
                e.stopPropagation();
              }}
              className="absolute bottom-4 right-4 px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-foreground backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 font-medium shadow-lg cursor-pointer"
              style={{ 
                zIndex: 100,
                pointerEvents: 'auto',
                position: 'relative'
              }}
            >
              See All
            </button>
          </div>
        </motion.div>

        {/* Orbiting Card Container - Fixed pointer events */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            rotate: orbitRotation,
            transformOrigin: '310px 310px',
            left: '50%',
            top: '50%',
            marginLeft: '-310px',
            marginTop: '-310px',
            willChange: 'transform'
          }}
        >
          {/* Orbiting Card - Fixed click handling */}
          <motion.div
            key={`orbit-${currentOrbitIndex}`}
            className="absolute w-64 md:w-72 bg-card/90 border border-border rounded-xl p-5 shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200 z-30"
            animate={{
              scale: 0.7,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              rotate: cardRotation,
              transformOrigin: 'center',
              left: orbitCardX - 144,
              top: orbitCardY - 120,
              willChange: 'transform',
              pointerEvents: 'auto'
            }}
            onClick={handleSwapClick}
            onMouseDown={(e) => {
              console.log('Orbit card mousedown event');
              e.stopPropagation();
            }}
          >
            <div className="mb-3">
              <h3 className="font-bold text-base text-card-foreground">
                {orbitTestimonial.author}
              </h3>
              <p className="text-muted-foreground text-xs">
                Since {orbitTestimonial.since}
              </p>
            </div>
            <div className="relative">
              <p className="text-card-foreground text-sm leading-relaxed line-clamp-3">
                {orbitTestimonial.quote}
              </p>
              {/* Gradient fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card/90 to-transparent pointer-events-none" />
              
              {/* Click to swap indicator */}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 text-xs bg-white/10 text-foreground backdrop-blur-md rounded-full border border-white/20 font-medium shadow-lg pointer-events-none">
                Click to swap
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile version - Fixed click handling */}
      <div className="md:hidden w-full max-w-sm mx-auto mt-8">
        <motion.div
          key={`mobile-${currentCenterIndex}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-card border border-border rounded-xl p-6 shadow-lg cursor-pointer overflow-hidden transition-all duration-300"
          onClick={(e) => {
            console.log('Mobile testimonial card clicked!');
            e.preventDefault();
            setCurrentCenterIndex((prev) => (prev + 1) % testimonials.length);
          }}
        >
          <div className="mb-4">
            <h3 className="font-bold text-lg text-card-foreground">
              {centerTestimonial.author}
            </h3>
            <p className="text-muted-foreground text-sm">
              Since {centerTestimonial.since}
            </p>
          </div>
          <div className="relative">
            <p className="text-card-foreground leading-relaxed line-clamp-[6]">
              {centerTestimonial.quote}
            </p>
            {/* Gradient fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            
            {/* Mobile See All button - Fixed */}
            <button
              onClick={(e) => {
                console.log('Mobile See All button clicked!');
                handleSeeAllClick(e);
              }}
              className="absolute bottom-4 right-4 px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-foreground backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 font-medium shadow-lg cursor-pointer"
              style={{ 
                zIndex: 100,
                pointerEvents: 'auto'
              }}
            >
              See All
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-muted-foreground text-sm">
              Tap to see next testimonial
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Testimonials Modal */}
      <TestimonialsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonials={testimonials}
      />
    </div>
  );
};

export default OrbitTestimonials;