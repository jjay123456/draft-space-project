import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed hero image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920)',
        }}
      />
      
      {/* Parallax content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          iHear English Learning Program
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-3 font-light">
          Building Language Bridges for Students with Hearing Loss
        </p>
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light italic">
          Language opens access.
        </p>
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
        >
          Start Your Journey
        </Button>
      </motion.div>
    </section>
  );
};
