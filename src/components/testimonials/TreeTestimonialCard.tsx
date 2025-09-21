import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  since: string;
}

interface TreeTestimonialCardProps {
  testimonial: Testimonial;
  side: 'left' | 'right';
  isVisible: boolean;
  onReadMore: () => void;
}

const TreeTestimonialCard = ({ testimonial, side, isVisible, onReadMore }: TreeTestimonialCardProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : {}}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: side === 'left' ? 0 : 0.2
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Branch connection line */}
      <motion.div
        className={`absolute top-6 ${side === 'left' ? '-right-8' : '-left-8'} w-8 h-0.5 bg-accent/60`}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transformOrigin: side === 'left' ? 'left' : 'right' }}
      />

      {/* Glass card hanging from tree */}
      <Card className="bg-card/95 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group shadow-lg">
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />

        <CardContent className="p-6 relative z-10">
          {/* Leaf tag header */}
          <motion.div 
            className="flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/20" />
            <div>
              <p className="font-semibold text-foreground">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">Growing since {testimonial.since}</p>
            </div>
          </motion.div>
          
          {/* Testimonial text with gradient fade */}
          <div className="relative mb-4">
            <blockquote className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-[10]">
              "{testimonial.quote}"
            </blockquote>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
          </div>
          
          {/* Read more button */}
          <motion.button 
            onClick={onReadMore}
            className="text-primary hover:text-primary/80 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group/button relative"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Read full story</span>
            <motion.span 
              className="transform transition-transform group-hover/button:translate-x-1"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              →
            </motion.span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TreeTestimonialCard;