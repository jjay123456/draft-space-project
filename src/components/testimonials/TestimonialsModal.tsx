import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  since: string;
}

interface TestimonialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: Testimonial[];
}

const TestimonialsModal = ({ isOpen, onClose, testimonials }: TestimonialsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  All Student Stories
                </h2>
                <p className="text-muted-foreground mt-1">
                  Complete testimonials from our students
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto p-6 space-y-6 max-h-[calc(100%-120px)]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/95 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-500 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/20" />
                        <div>
                          <h3 className="font-bold text-lg text-foreground">
                            {testimonial.author}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Student since {testimonial.since}
                          </p>
                        </div>
                      </div>
                      
                      <blockquote className="text-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TestimonialsModal;