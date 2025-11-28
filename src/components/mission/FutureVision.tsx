import { motion } from 'framer-motion';

export const FutureVision = () => {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl md:text-6xl font-bold text-foreground">
        The Future We're Building
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        A world where language barriers dissolve, where hearing differences 
        become strengths, and where every learner has the tools to succeed.
      </p>
      <motion.div 
        className="inline-block px-8 py-4 bg-primary/10 rounded-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-primary font-semibold">
          Join us on this journey
        </span>
      </motion.div>
    </motion.div>
  );
};
