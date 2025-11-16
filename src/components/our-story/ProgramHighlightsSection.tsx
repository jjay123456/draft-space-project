import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Dedicated Teaching Team",
    description: "One-on-one sessions led by compassionate native English-speaking high school tutors known for patience and empathy."
  },
  {
    title: "Expert Support",
    description: "Speech-language pathologists guide curriculum development and supervise instruction."
  },
  {
    title: "Personalized Instruction",
    description: "Lessons are crafted to match each learner's hearing profile and evolving abilities."
  },
  {
    title: "Comprehensive Care",
    description: "We nurture confidence, resilience, curiosity, and pride in language growth."
  }
];

export const ProgramHighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Full-width background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
        >
          Program Highlights
        </motion.h2>

        <div className="space-y-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
