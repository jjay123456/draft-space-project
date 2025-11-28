import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const DualTrackFooter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6 lg:gap-8">
      {/* Track A: Wide horizontal bar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 md:p-10 bg-card/30 backdrop-blur-sm border-border/50">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of learners who have discovered their voice and unlocked new opportunities through our accessible English learning platform.
          </p>
          <RainbowButton 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
          >
            Start Your Journey
          </RainbowButton>
        </Card>
      </motion.div>

      {/* Track B: Tall narrow sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-6 h-full bg-card/20 backdrop-blur-sm border-primary/20 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="border-l-2 border-primary/40 pl-4">
              <p className="text-sm font-semibold text-foreground">Empower</p>
              <p className="text-xs text-muted-foreground">Your Voice</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-4">
              <p className="text-sm font-semibold text-foreground">Connect</p>
              <p className="text-xs text-muted-foreground">Your World</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-4">
              <p className="text-sm font-semibold text-foreground">Transform</p>
              <p className="text-xs text-muted-foreground">Your Future</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
