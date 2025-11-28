import { motion } from 'framer-motion';
import PublicNavbar from '@/components/layout/PublicNavbar';
import GridBackground from '@/components/layout/GridBackground';
import { FragmentedSpine } from '@/components/how-it-works/FragmentedSpine';
import { TieredTileGrid } from '@/components/how-it-works/TieredTileGrid';
import { SideChannelRibbon } from '@/components/how-it-works/SideChannelRibbon';
import { OffsetPanel } from '@/components/how-it-works/OffsetPanel';
import { AnchorIsland } from '@/components/how-it-works/AnchorIsland';
import { MicroCallout } from '@/components/how-it-works/MicroCallout';
import { DualTrackFooter } from '@/components/how-it-works/DualTrackFooter';
import { Card } from '@/components/ui/card';
import { Mic, Users, BookOpen, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const impactTiles = [
    { number: "1000+", label: "Students Empowered", span: "col-span-2 row-span-2", delay: 0 },
    { number: "95%", label: "Progress Rate", span: "col-span-1", delay: 1 },
    { number: "50+", label: "Expert Tutors", span: "col-span-1", delay: 2 },
    { number: "24/7", label: "Support Access", span: "col-span-1 row-span-2", delay: 3 },
    { number: "∞", label: "Possibilities", span: "col-span-2", delay: 4 },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <GridBackground />
      <PublicNavbar />
      
      {/* Side Channel Ribbons */}
      <SideChannelRibbon text="EMPOWER" side="left" position="top-1/3" />
      <SideChannelRibbon text="TRANSFORM" side="right" position="top-2/3" />

      <div className="relative pt-24 pb-16">
        {/* HERO - Full Width */}
        <FragmentedSpine alignment="full" className="px-6 md:px-12 mb-24">
          <motion.div
            className="max-w-[90%] mx-auto text-center py-16 md:py-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Breaking barriers through accessible English education
            </p>
          </motion.div>
        </FragmentedSpine>

        {/* LEFT STREAM - Mission Statement */}
        <FragmentedSpine alignment="left" width="w-[90%] md:w-[40%]" className="px-6 md:px-12 mb-16 md:mb-24">
          <div className="relative">
            <MicroCallout text="Innovation" position="-top-4 right-8" />
            <OffsetPanel offset={0}>
              <Mic className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Accessible Learning for All
              </h2>
              <p className="text-muted-foreground">
                We believe language should never be a barrier to opportunity. Our platform combines cutting-edge technology with personalized instruction to create an inclusive learning environment.
              </p>
            </OffsetPanel>
          </div>
        </FragmentedSpine>

        {/* Horizontal Empty Bar */}
        <div className="h-16 md:h-32 w-full" />

        {/* RIGHT STREAM - Program Features */}
        <FragmentedSpine alignment="right" width="w-[90%] md:w-[65%]" className="px-6 md:px-12 mb-16 md:mb-24">
          <div className="relative">
            <MicroCallout text="Impact" position="-top-4 left-8" />
            <OffsetPanel offset={80} delay={0.2}>
              <Users className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Community-Driven Approach
              </h2>
              <p className="text-muted-foreground">
                Our expert tutors work one-on-one with students, creating personalized learning paths that adapt to individual needs and goals. Every session is tailored to maximize progress and build confidence.
              </p>
            </OffsetPanel>
          </div>
        </FragmentedSpine>

        {/* CENTRAL ANCHOR ISLAND - Why We Exist */}
        <AnchorIsland title="Why We Exist">
          <p className="mb-4">
            Education is a fundamental right, not a privilege. We exist to ensure that everyone, regardless of their background or circumstances, has access to quality English education that opens doors to new opportunities.
          </p>
          <p>
            Through technology, dedication, and community support, we're creating a world where language barriers no longer limit potential.
          </p>
        </AnchorIsland>

        {/* Diagonal Whitespace Created by Offset */}
        <div className="h-16 md:h-24 w-full" />

        {/* TIERED TILE GRID - Impact Metrics */}
        <FragmentedSpine alignment="full" className="px-6 md:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Measurable Impact
            </h2>
            <TieredTileGrid tiles={impactTiles} />
          </motion.div>
        </FragmentedSpine>

        {/* LEFT STREAM - Who We Serve with Vertical Drift */}
        <FragmentedSpine alignment="left" width="w-[90%] md:w-[55%]" className="px-6 md:px-12 mb-16 md:mb-24">
          <div className="space-y-8">
            <OffsetPanel offset={0}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who We Serve
              </h2>
              <p className="text-muted-foreground">
                Our platform is designed for learners from diverse backgrounds who are ready to transform their future through English proficiency.
              </p>
            </OffsetPanel>
            
            <OffsetPanel offset={-60} delay={0.2}>
              <BookOpen className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Adult Learners
              </h3>
              <p className="text-sm text-muted-foreground">
                Professionals seeking career advancement and personal growth
              </p>
            </OffsetPanel>

            <OffsetPanel offset={40} delay={0.4}>
              <Sparkles className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Students
              </h3>
              <p className="text-sm text-muted-foreground">
                Young learners preparing for academic and professional success
              </p>
            </OffsetPanel>
          </div>
        </FragmentedSpine>

        {/* Vertical Void Column - Empty space on right */}
        <div className="h-16 md:h-32 w-full" />

        {/* RIGHT STREAM - Program Outcomes with Offset */}
        <FragmentedSpine alignment="right" width="w-[90%] md:w-[60%]" className="px-6 md:px-12 mb-24">
          <div className="relative">
            <MicroCallout text="Access" position="-top-4 right-12" />
            <OffsetPanel offset={-40}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Expected Outcomes
              </h2>
              <div className="space-y-4">
                <Card className="p-4 bg-card/20 backdrop-blur-sm border-border/30">
                  <p className="text-foreground font-semibold">Enhanced Communication</p>
                  <p className="text-sm text-muted-foreground">Speak with confidence in professional and social settings</p>
                </Card>
                <Card className="p-4 bg-card/20 backdrop-blur-sm border-border/30">
                  <p className="text-foreground font-semibold">Career Advancement</p>
                  <p className="text-sm text-muted-foreground">Unlock new opportunities in global markets</p>
                </Card>
                <Card className="p-4 bg-card/20 backdrop-blur-sm border-border/30">
                  <p className="text-foreground font-semibold">Cultural Connection</p>
                  <p className="text-sm text-muted-foreground">Bridge communities and expand your worldview</p>
                </Card>
              </div>
            </OffsetPanel>
          </div>
        </FragmentedSpine>

        {/* DUAL-TRACK FOOTER */}
        <FragmentedSpine alignment="full" className="px-6 md:px-12 mt-16 md:mt-24">
          <DualTrackFooter />
        </FragmentedSpine>
      </div>
    </div>
  );
};

export default HowItWorks;
