"use client";

import { useEffect, useRef, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0" result="tint" />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient className="absolute inset-0 w-full h-full" colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]} speed={0.3} />
      <MeshGradient className="absolute inset-0 w-full h-full opacity-60" colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]} speed={0.2} />

      <main className="absolute inset-0 z-20 flex items-center justify-center pt-12">
        <div className="text-center max-w-4xl px-8">
          

           <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" initial={{
           opacity: 0,
           y: 30
         }} animate={{
           opacity: 1,
           y: 0
         }} transition={{
           duration: 0.8,
           delay: 0.4
         }}>
             <span className="block font-bold text-white drop-shadow-2xl">Accessible Learning</span>
             <span className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-wider">
               Powered By iHear.
             </span>
           </motion.h1>

           {/* Subtitle */}
           <motion.p 
             className="text-xl md:text-2xl text-white/80 mb-12 font-light tracking-wide"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
           >
             Empowering voices. Breaking barriers. Transforming futures.
           </motion.p>

          <motion.div className="flex justify-center items-center gap-6 flex-wrap" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }}>
            
             <motion.a 
               href="https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-lg transition-all duration-300 hover:bg-white/90 cursor-pointer shadow-2xl hover:shadow-xl hover:scale-105"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Register as a Tutor
             </motion.a>
          </motion.div>
        </div>
      </main>

      <div className="absolute bottom-8 right-8 z-30">
        
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 1.2
    }}>
        <motion.div className="flex flex-col items-center space-y-2" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }}>
          <span className="text-white/60 text-xs font-light">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }} transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }} />
        </motion.div>
      </motion.div>
    </div>;
}