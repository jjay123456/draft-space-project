import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  since: string;
}

interface BridgeTestimonialCardProps {
  testimonial: Testimonial;
  intensity: MotionValue<number>;
  side: 'left' | 'right';
  onReadMore: () => void;
}

const BridgeTestimonialCard = ({ testimonial, intensity, side, onReadMore }: BridgeTestimonialCardProps) => {
  // Enhanced animation transforms based on mouse proximity
  const opacity = useTransform(intensity, [0, 1], [0.7, 1]);
  const scale = useTransform(intensity, [0, 1], [1, 1.02]);
  const y = useTransform(intensity, [0, 1], [0, -8]);
  const glowIntensity = useTransform(intensity, [0, 1], [0, 0.3]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="relative"
      whileHover={{ scale: 1.03, y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Connection Line to Bridge */}
      <motion.div
        className={`absolute top-1/2 ${side === 'left' ? 'right-0' : 'left-0'} w-16 h-px bg-gradient-to-${side === 'left' ? 'r' : 'l'} from-primary/60 to-transparent`}
        style={{ opacity: intensity }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Card className="bg-card/90 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg"
          style={{ opacity: glowIntensity }}
        />
        
        {/* Enhanced Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: useTransform(intensity, [0, 1], [
              "0 0 0px hsl(var(--primary) / 0)",
              "0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)"
            ])
          }}
        />

        <CardContent className="p-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary"
              animate={{ 
                boxShadow: [
                  "0 0 0px hsl(var(--primary) / 0.5)",
                  "0 0 10px hsl(var(--primary) / 0.8)",
                  "0 0 0px hsl(var(--primary) / 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <p className="font-semibold text-primary">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">Student since {testimonial.since}</p>
            </div>
          </div>
          
          <blockquote className="text-sm leading-relaxed text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
            "{testimonial.quote.slice(0, 200)}..."
          </blockquote>
          
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

export default BridgeTestimonialCard;