import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Volume2, Users, Zap } from 'lucide-react';
interface SupportNotesProps {
  activeStep: number;
}
const supportTips = [{
  icon: Lightbulb,
  title: "Personalization Tip",
  tips: ["Share your interests during onboarding to get tailored conversation topics", "Update your learning goals monthly as your confidence grows", "Practice vocabulary related to your hobbies for better retention"]
}, {
  icon: Volume2,
  title: "Device Optimization",
  tips: ["Use headphones in a quiet room for best audio clarity", "Adjust your device settings before each session", "Let us know if audio needs adjustment during lessons"]
}, {
  icon: Users,
  title: "Team Support",
  tips: ["Don't hesitate to ask for slower speech when needed", "Practice active listening techniques with your tutor", "Share feedback to help your team serve you better"]
}, {
  icon: Zap,
  title: "Technology Tips",
  tips: ["Enable captions and visual aids for better comprehension", "Use the interactive whiteboard for visual learning", "Practice with tactile exercises between sessions"]
}];
export const SupportNotes: React.FC<SupportNotesProps> = ({
  activeStep
}) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentStepTips = supportTips[activeStep];
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % currentStepTips.tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, currentStepTips.tips.length]);
  return <div className="space-y-6 sticky top-24">
      <Card className="glass-panel border-0 bg-card/60 backdrop-blur-lg" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <currentStepTips.icon className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">{currentStepTips.title}</h3>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTipIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {currentStepTips.tips[currentTipIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Tip indicators */}
          <div className="flex space-x-2 mt-4">
            {currentStepTips.tips.map((_, index) => <motion.button key={index} onClick={() => setCurrentTipIndex(index)} className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentTipIndex ? 'bg-primary' : 'bg-border'}`} whileTap={{
            scale: 0.9
          }} />)}
          </div>
        </CardContent>
      </Card>
    </div>;
};