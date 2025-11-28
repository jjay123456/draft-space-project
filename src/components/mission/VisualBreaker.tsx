import { motion } from 'framer-motion';

interface VisualBreakerProps {
  variant?: 'solid' | 'gradient';
}

export const VisualBreaker = ({ variant = 'solid' }: VisualBreakerProps) => {
  if (variant === 'gradient') {
    return (
      <motion.div 
        className="w-full h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent my-24"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    );
  }

  return (
    <motion.div 
      className="container mx-auto px-6 my-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-px bg-border/50" />
    </motion.div>
  );
};
