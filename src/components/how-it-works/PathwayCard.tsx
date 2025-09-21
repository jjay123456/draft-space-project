import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RoadmapNodes } from './steps/RoadmapNodes';
import { WaveformVisualization } from './steps/WaveformVisualization';
import { TeamBadge } from './steps/TeamBadge';
import { TechnologyIcons } from './steps/TechnologyIcons';
interface PathwayCardProps {
  activeStep: number;
  steps: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
  }>;
  isActive?: boolean;
}
export const PathwayCard: React.FC<PathwayCardProps> = ({
  activeStep,
  steps,
  isActive = true
}) => {
  const currentStep = steps[0] || steps[activeStep];
  const renderStepVisual = () => {
    switch (activeStep) {
      case 0:
        return <RoadmapNodes />;
      case 1:
        return <WaveformVisualization />;
      case 2:
        return <TeamBadge />;
      case 3:
        return <TechnologyIcons />;
      default:
        return null;
    }
  };
  return (
    <Card className="border bg-card shadow-lg">
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Step {activeStep + 1}
                <span className="text-muted-foreground">•</span>
                {currentStep.label}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {currentStep.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          {/* Visual */}
          <div className="h-64 md:h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {renderStepVisual()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};