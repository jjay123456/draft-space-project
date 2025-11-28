import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OffsetPanelProps {
  children: ReactNode;
  offset?: number;
  delay?: number;
  className?: string;
}

export const OffsetPanel = ({ children, offset = 0, delay = 0, className }: OffsetPanelProps) => {
  const offsetClass = offset > 0 ? `mt-[${offset}px]` : offset < 0 ? `-mt-[${Math.abs(offset)}px]` : '';
  
  return (
    <motion.div
      className={cn(offsetClass, className)}
      style={{ marginTop: `${offset}px` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <Card className="p-6 md:p-8 bg-card/30 backdrop-blur-sm border-border/50">
        {children}
      </Card>
    </motion.div>
  );
};
