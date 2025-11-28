import { motion } from 'framer-motion';

export const MissionHero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-start container mx-auto px-6 pt-32">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Mission
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-primary mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>
    </section>
  );
};
