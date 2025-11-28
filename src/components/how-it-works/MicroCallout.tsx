import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MicroCalloutProps {
  text: string;
  position?: string;
  className?: string;
}

export const MicroCallout = ({ text, position = '-top-4 right-12', className }: MicroCalloutProps) => {
  return (
    <motion.div
      className={cn(
        'absolute px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/20',
        position,
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: 1, 
        y: [0, -5, 0],
      }}
      transition={{ 
        opacity: { duration: 0.4 },
        y: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
    >
      {text}
    </motion.div>
  );
};
