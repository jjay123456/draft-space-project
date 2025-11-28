import { motion } from 'framer-motion';

interface FloatingSidebarProps {
  text: string;
  position: 'left' | 'right';
}

export const FloatingSidebar = ({ text, position }: FloatingSidebarProps) => {
  return (
    <motion.div
      className={`absolute top-1/2 -translate-y-1/2 ${
        position === 'left' ? 'left-0' : 'right-0'
      } hidden lg:block`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className={`w-1 h-32 bg-primary/20 ${
        position === 'left' ? 'ml-4' : 'mr-4'
      } relative`}>
        <span className={`absolute top-1/2 -translate-y-1/2 ${
          position === 'left' ? 'left-6' : 'right-6'
        } text-sm font-semibold text-primary uppercase tracking-widest whitespace-nowrap ${
          position === 'left' ? '' : 'text-right'
        }`}>
          {text}
        </span>
      </div>
    </motion.div>
  );
};
