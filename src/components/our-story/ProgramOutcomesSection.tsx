import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Volume2, MessageCircle } from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "Develop English Thinking Habits",
    description: "Immersive experiences help learners think and express ideas naturally in English without translation."
  },
  {
    icon: Volume2,
    title: "Enhance Auditory & Speaking Abilities",
    description: "Structured exposure strengthens listening, pronunciation, and expressive confidence."
  },
  {
    icon: MessageCircle,
    title: "Build Communication Confidence",
    description: "Learners gain stable skills for real-world English interaction and self-expression."
  }
];

export const ProgramOutcomesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-foreground text-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Program Outcomes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <outcome.icon className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {outcome.title}
              </h3>
              <p className="text-lg leading-relaxed opacity-90">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
