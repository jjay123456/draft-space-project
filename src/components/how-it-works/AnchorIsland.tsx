import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';

interface AnchorIslandProps {
  children: ReactNode;
  title?: string;
}

export const AnchorIsland = ({ children, title }: AnchorIslandProps) => {
  return (
    <div className="w-[85%] md:w-[70%] mx-auto py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="p-8 md:p-12 bg-card/30 backdrop-blur-lg border-primary/20">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {title}
            </h2>
          )}
          <div className="text-base md:text-lg text-muted-foreground text-center">
            {children}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
