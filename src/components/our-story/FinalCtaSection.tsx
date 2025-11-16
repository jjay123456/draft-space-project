import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const FinalCtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient background with subtle glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)',
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 70%)',
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Ready to Begin?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
          Join iHear to create accessible English-learning pathways for students with 
          hearing loss—unlocking new possibilities and transforming their language experience.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 bg-white text-foreground hover:bg-white/90"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
        >
          Start Your Learning Journey
        </Button>
      </motion.div>
    </section>
  );
};
