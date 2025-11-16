import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Headphones, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Customized Learning Plans",
    description: "Adaptive curriculum tailored to each learner's hearing profile, skills, and goals."
  },
  {
    icon: Headphones,
    title: "Hearing & Assistive Device Optimization",
    description: "Specialized audio calibration improves clarity for cochlear implant and hearing-aid users."
  },
  {
    icon: Users,
    title: "Dual Instructor Guidance",
    description: "Native English-speaking teachers drive lessons; speech/hearing specialists ensure accuracy."
  },
  {
    icon: Cpu,
    title: "Technology-Integrated Teaching",
    description: "AI tools and multisensory methods combine visual, tactile, and available auditory input."
  }
];

export const ProgramFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Program Features
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full border border-border rounded-2xl hover:scale-[1.02] transition-transform duration-300 bg-card">
              <feature.icon className="w-12 h-12 mb-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
