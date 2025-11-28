import { motion } from 'framer-motion';
import PublicNavbar from '@/components/layout/PublicNavbar';
import GridBackground from '@/components/layout/GridBackground';
import { Card } from '@/components/ui/card';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { 
  Settings, 
  Headphones, 
  Users, 
  Sparkles, 
  Heart, 
  GraduationCap, 
  Target, 
  UserCircle, 
  Globe, 
  Brain, 
  Mic 
} from 'lucide-react';

const HowItWorks = () => {
  // Impact tiles data
  const impactTiles = [
    { number: "1000+", label: "Students Empowered", span: "col-span-2 row-span-2" },
    { number: "95%", label: "Progress Rate", span: "col-span-1" },
    { number: "50+", label: "Expert Tutors", span: "col-span-1" },
    { number: "24/7", label: "Support Access", span: "col-span-1 row-span-2" },
    { number: "∞", label: "Possibilities", span: "col-span-2" },
  ];

  const features = [
    {
      icon: Settings,
      title: "Customized Learning Plans",
      description: "Adaptive curriculum tailored to each learner's hearing profile, skills, and goals."
    },
    {
      icon: Headphones,
      title: "Hearing & Assistive Device Optimization",
      description: "Specialized audio calibration improves clarity for cochlear implant and hearing-aid users."
    },
    {
      icon: Users,
      title: "Dual Instructor Guidance",
      description: "Native English-speaking teachers drive lessons; speech/hearing specialists ensure accuracy."
    },
    {
      icon: Sparkles,
      title: "Technology-Integrated Teaching",
      description: "AI tools and multisensory methods combine visual, tactile, and available auditory input."
    }
  ];

  const whoWeServe = [
    {
      icon: UserCircle,
      title: "Ages 5–21",
      description: "Plus adults with targeted English-learning goals"
    },
    {
      icon: Headphones,
      title: "All Hearing Profiles",
      description: "Cochlear implant users, hearing-aid users, and learners without hearing impairments"
    },
    {
      icon: Globe,
      title: "Worldwide Access",
      description: "Remote instruction through Zoom or Google Meet"
    }
  ];

  const outcomes = [
    {
      icon: Brain,
      title: "English Thinking Habits",
      description: "Think and express naturally in English"
    },
    {
      icon: Mic,
      title: "Auditory & Speaking",
      description: "Strengthen listening and pronunciation"
    },
    {
      icon: Target,
      title: "Communication Confidence",
      description: "Real-world English interaction skills"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <GridBackground>
        {/* ZONE 1: Hero - Full width */}
        <section className="min-h-[70vh] flex items-center justify-start container mx-auto px-6 pt-32 pb-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              iHear English Learning
            </motion.h1>
            <motion.div 
              className="w-32 h-1 bg-primary mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              Building Language Bridges for Students with Hearing Loss
            </p>
            <RainbowButton 
              className="text-lg px-12 py-6 rounded-full"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
            >
              Discover Our Mission
            </RainbowButton>
          </motion.div>
        </section>

        {/* Staggered block - Left aligned, 70% width */}
        <div className="container mx-auto px-6 py-20">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <p className="text-2xl font-light leading-relaxed mb-6 text-foreground">
                In today's AI-driven educational landscape, the iHear Initiative provides uniquely accessible English learning opportunities for students with hearing loss who are learning English as a second language.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground" style={{ lineHeight: '1.8' }}>
                We believe hearing differences should never block language acquisition. Through individualized tutoring and AI-enhanced tools, iHear creates immersive learning experiences that empower students to overcome communication barriers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visual breaker - thin line */}
        <motion.div 
          className="container mx-auto px-6 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px bg-border/50" />
        </motion.div>

        {/* ZONE 2: Features - Right aligned with floating sidebar */}
        <div className="container mx-auto px-6 py-20 relative">
          {/* Floating sidebar */}
          <motion.div
            className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-1 h-32 bg-primary/20 ml-4 relative">
              <span className="absolute top-1/2 -translate-y-1/2 left-6 text-sm font-semibold text-primary uppercase tracking-widest whitespace-nowrap">
                Features
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="max-w-5xl ml-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-12">
              Program Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Blank space */}
        <div className="h-24" />

        {/* ZONE 3: Who We Serve - Asymmetric 40/60 with tiles */}
        <div className="container mx-auto px-6 py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-12">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoWeServe.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:scale-105 transition-transform">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Visual breaker - gradient */}
        <motion.div 
          className="w-full h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent my-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* ZONE 4: Impact Tiles - Full width modular grid */}
        <div className="container mx-auto px-6 py-20">
          <motion.h2 
            className="text-5xl font-bold text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Measurable Impact
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {impactTiles.map((impact, index) => (
              <motion.div
                key={impact.label}
                className={impact.span}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                    {impact.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground text-center">
                    {impact.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ZONE 5: Outcomes - Offset panels, right-aligned */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl ml-auto">
            <motion.h2
              className="text-5xl font-bold text-foreground mb-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Program Outcomes
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={outcome.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 + (index * 10) }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {outcome.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blank space */}
        <div className="h-32" />

        {/* ZONE 6: Future Vision - Centered for emphasis */}
        <div className="container mx-auto px-6 py-32">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Floating sidebar - right */}
            <motion.div
              className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="w-1 h-32 bg-primary/20 mr-4 relative">
                <span className="absolute top-1/2 -translate-y-1/2 right-6 text-sm font-semibold text-primary uppercase tracking-widest whitespace-nowrap text-right">
                  Tomorrow
                </span>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              The Future We're Building
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              A world where language barriers dissolve, where hearing differences 
              become strengths, and where every learner has the tools to succeed.
            </p>
            <motion.div 
              className="inline-block px-8 py-4 bg-primary/10 rounded-full cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-primary font-semibold">
                Join us on this journey
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Final blank space */}
        <div className="h-48" />
      </GridBackground>
    </div>
  );
};

export default HowItWorks;
