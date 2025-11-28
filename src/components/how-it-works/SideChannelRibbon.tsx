import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SideChannelRibbonProps {
  text: string;
  side: 'left' | 'right';
  position?: string;
}

export const SideChannelRibbon = ({ text, side, position = 'top-1/3' }: SideChannelRibbonProps) => {
  return (
    <motion.div
      className={cn(
        'fixed z-10 w-1 h-40 bg-primary/20',
        side === 'left' ? 'left-0' : 'right-0',
        position
      )}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span 
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary/60 whitespace-nowrap',
          side === 'left' ? 'rotate-90 origin-center translate-y-[-50%]' : '-rotate-90 origin-center translate-y-[-50%]'
        )}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {text}
      </span>
    </motion.div>
  );
};
