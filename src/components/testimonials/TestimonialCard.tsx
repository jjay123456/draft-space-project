import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  since: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onClick?: () => void;
  onReadMore?: () => void;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  isActive, 
  onClick,
  onReadMore,
  className 
}) => {
  return (
    <motion.div
      className={cn(
        "w-[400px] cursor-pointer", 
        "h-[420px] md:h-[460px]", // Desktop height 420-460px
        "max-md:h-[360px] max-md:w-[340px]", // Mobile height 360-400px
        className
      )}
      onClick={onClick}
      whileHover={{ 
        rotateX: 3, 
        rotateY: -2,
        scale: 1.02,
        transition: { 
          duration: 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94] // power2.inOut equivalent
        }
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        filter: isActive ? 'blur(0px)' : 'blur(1px)', // Depth-of-field effect
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      <Card className={cn(
        "h-full glass-panel transition-all duration-300",
        "border border-border/20 backdrop-blur-sm rounded-2xl",
        isActive 
          ? "shadow-2xl shadow-primary/15 border-primary/30" 
          : "shadow-lg hover:shadow-xl hover:border-primary/20"
      )}>
        <CardContent className="p-6 h-full flex flex-col">
          {/* Header with quote icon and student info */}
          <div className="flex items-start justify-between mb-4">
            <Quote className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-medium">
                {testimonial.author}
              </p>
              <p className="text-xs text-muted-foreground/80">
                {testimonial.since}
              </p>
            </div>
          </div>

          {/* Testimonial quote with gradient fade */}
          <div className="flex-1 relative">
            <blockquote className="text-sm leading-relaxed text-foreground/90 line-clamp-[10] md:line-clamp-[12]">
              "{testimonial.quote}"
            </blockquote>
            
            {/* Gradient fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            
            {/* Read more button */}
            <div className="mt-3 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onReadMore?.();
                }}
                className="text-xs text-primary hover:text-primary-hover hover:bg-primary/5 h-6 px-2"
              >
                Read full story
              </Button>
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div 
            className="mt-4 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full"
            animate={{
              scaleX: isActive ? 1 : 0.7,
              opacity: isActive ? 1 : 0.5
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;