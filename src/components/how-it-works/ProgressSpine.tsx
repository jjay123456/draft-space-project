import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressSpineProps {
  activeStep: number;
  steps: Array<{
    id: string;
    label: string;
    title: string;
  }>;
  onStepClick: (stepIndex: number) => void;
}

export const ProgressSpine: React.FC<ProgressSpineProps> = ({
  activeStep,
  steps,
  onStepClick,
}) => {
  return (
    <div className="flex flex-col space-y-6">
      {steps.map((step, index) => (
        <motion.button
          key={step.id}
          onClick={() => onStepClick(index)}
          className={cn(
            "flex items-center space-x-4 text-left transition-all duration-300 group p-3 rounded-lg",
            "hover:bg-primary-subtle focus:outline-none focus:ring-2 focus:ring-primary",
            activeStep === index && "bg-primary-subtle"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300",
              activeStep === index
                ? "bg-primary text-primary-foreground border-primary scale-110"
                : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
            )}
            animate={{
              scale: activeStep === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {index + 1}
          </motion.div>
          <div>
            <div className={cn(
              "font-medium transition-colors duration-300",
              activeStep === index 
                ? "text-primary" 
                : "text-foreground group-hover:text-primary"
            )}>
              {step.label}
            </div>
            <div className="text-xs text-muted-foreground line-clamp-1">
              {step.title}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};