import { motion } from 'framer-motion';
import { Sparkles, Users, Target } from 'lucide-react';

export const UniqueApproach = () => {
  const approaches = [
    {
      icon: Sparkles,
      title: "Adaptive Learning",
      description: "Every student's journey is unique"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built by educators, for learners"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Measurable progress at every step"
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-foreground">
        Our Approach
      </h2>
      <div className="space-y-8">
        {approaches.map((approach, index) => (
          <motion.div
            key={approach.title}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <approach.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {approach.title}
              </h3>
              <p className="text-muted-foreground">
                {approach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
