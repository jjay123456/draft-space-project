import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PublicNavbar from '@/components/layout/PublicNavbar';
import { ProgressSpine } from '@/components/how-it-works/ProgressSpine';
import { PathwayCard } from '@/components/how-it-works/PathwayCard';
import { SupportNotes } from '@/components/how-it-works/SupportNotes';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HowItWorks = () => {
  // Create refs for each section
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  const steps = [
    {
      id: 'plans',
      label: 'Plans',
      title: 'Customized Learning Plans',
      description: 'Every learner is unique. Our AI-driven assessment creates personalized learning pathways that adapt to your hearing profile, communication goals, and learning preferences. Whether you\'re working with cochlear implants, hearing aids, or developing natural listening skills, your plan evolves with your progress.'
    },
    {
      id: 'devices', 
      label: 'Devices',
      title: 'Optimized for Hearing Devices',
      description: 'Our platform is specifically engineered for hearing device users. Advanced audio processing ensures crystal-clear sound quality, while our adaptive algorithms automatically adjust to different device types and settings. Practice with confidence knowing every word is optimized for your hearing technology.'
    },
    {
      id: 'team',
      label: 'Team', 
      title: 'A Teaching Team That Works Together',
      description: 'You\'re supported by a collaborative network of certified speech-language pathologists and native-speaking tutors who specialize in hearing accessibility. This integrated approach combines clinical expertise with real-world communication practice for accelerated results.'
    },
    {
      id: 'technology',
      label: 'Technology',
      title: 'Technology That Enhances, Not Replaces',
      description: 'Our multi-sensory learning approach combines visual cues, tactile feedback, and optimized audio to create rich learning experiences. Real-time captions, visual pronunciation guides, and adaptive interfaces work together to support your natural learning process.'
    }
  ];

  const { activeSection, scrollToSection } = useIntersectionObserver({
    sectionRefs
  });

  const [isNavFloating, setIsNavFloating] = useState(false);
  const navTriggerRef = useRef<HTMLDivElement>(null);

  // Track when navigation should float
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavFloating(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px'
      }
    );

    if (navTriggerRef.current) {
      observer.observe(navTriggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our comprehensive approach to accessible language learning designed specifically for the hearing community
        </motion.p>
      </div>

      {/* Section-Based Layout */}
      <div className="scroll-sections">
        {/* Desktop Layout - Progress Navigation */}
        <div className="hidden lg:block sticky top-24 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50 mb-8">
          <div className="max-w-4xl mx-auto px-8 py-4">
            <ProgressSpine 
              activeStep={activeSection}
              steps={steps}
              onStepClick={scrollToSection}
            />
          </div>
        </div>

        {/* Navigation Trigger Point */}
        <div ref={navTriggerRef} className="lg:hidden h-1" />

        {/* Mobile Navigation - Top Position */}
        <AnimatePresence>
          {!isNavFloating && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden sticky top-20 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 z-20"
            >
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => scrollToSection(index)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation - Floating Bottom Left */}
        <AnimatePresence>
          {isNavFloating && (
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -100, y: 100 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="lg:hidden fixed bottom-6 left-6 z-30"
            >
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {steps.map((step, index) => (
                  <motion.button
                    key={step.id}
                    onClick={() => scrollToSection(index)}
                    className={`w-12 h-12 rounded-full text-xs font-bold transition-all duration-300 shadow-lg ${
                      activeSection === index
                        ? 'bg-primary text-primary-foreground scale-110 shadow-primary/30'
                        : 'bg-background/90 text-foreground hover:bg-primary/20 backdrop-blur-sm border border-border/50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sections */}
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-16">
          {steps.map((step, index) => (
            <section
              key={step.id}
              ref={sectionRefs[index]}
              className="py-16"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <PathwayCard 
                    activeStep={index}
                    steps={[step]}
                    isActive={activeSection === index}
                  />
                </div>
                <div className="hidden lg:block">
                  <SupportNotes activeStep={activeSection} />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Mobile Support Notes */}
        <div className="lg:hidden px-4 py-8">
          <SupportNotes activeStep={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;