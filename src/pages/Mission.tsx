import { motion } from 'framer-motion';
import GridBackground from '@/components/layout/GridBackground';
import { MissionHero } from '@/components/mission/MissionHero';
import { MissionStatement } from '@/components/mission/MissionStatement';
import { WhyWeExist } from '@/components/mission/WhyWeExist';
import { UniqueApproach } from '@/components/mission/UniqueApproach';
import { ImpactTiles } from '@/components/mission/ImpactTiles';
import { FutureVision } from '@/components/mission/FutureVision';
import { FloatingSidebar } from '@/components/mission/FloatingSidebar';
import { VisualBreaker } from '@/components/mission/VisualBreaker';

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <GridBackground>
        {/* Zone 1: Mission Clarity */}
        <MissionHero />
        
        {/* Staggered block - left aligned with right whitespace */}
        <div className="container mx-auto px-6 py-24">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MissionStatement />
          </motion.div>
        </div>

        {/* Visual breaker */}
        <VisualBreaker />

        {/* Zone 2: Why We Exist - Right aligned with floating sidebar */}
        <div className="container mx-auto px-6 py-24 relative">
          <FloatingSidebar text="Purpose" position="left" />
          <motion.div 
            className="max-w-3xl ml-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WhyWeExist />
          </motion.div>
        </div>

        {/* Blank space as shape */}
        <div className="h-32" />

        {/* Zone 3: Unique Approach - Asymmetric 60/40 split */}
        <div className="container mx-auto px-6 py-24">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-3">
              <UniqueApproach />
            </div>
            <div className="lg:col-span-2">
              {/* Empty whitespace intentionally */}
            </div>
          </motion.div>
        </div>

        {/* Zone 4: Impact - Tile grid section */}
        <div className="container mx-auto px-6 py-24">
          <ImpactTiles />
        </div>

        {/* Visual breaker */}
        <VisualBreaker variant="gradient" />

        {/* Zone 5: Future Vision - Centered for emphasis */}
        <div className="container mx-auto px-6 py-32">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FloatingSidebar text="Tomorrow" position="right" />
            <FutureVision />
          </motion.div>
        </div>

        {/* Final blank space */}
        <div className="h-48" />
      </GridBackground>
    </div>
  );
};

export default Mission;
