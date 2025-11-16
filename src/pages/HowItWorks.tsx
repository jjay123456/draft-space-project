import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import { Card, CardContent } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
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
} from "lucide-react";

const HowItWorks = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

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

  const highlights = [
    {
      icon: Heart,
      title: "Dedicated Teaching Team",
      description: "One-on-one sessions led by compassionate native English-speaking high school tutors known for patience and empathy."
    },
    {
      icon: GraduationCap,
      title: "Expert Support",
      description: "Speech-language pathologists guide curriculum development and supervise instruction."
    },
    {
      icon: Target,
      title: "Personalized Instruction",
      description: "Lessons are crafted to match each learner's hearing profile and evolving abilities."
    },
    {
      icon: Sparkles,
      title: "Comprehensive Care",
      description: "We nurture confidence, resilience, curiosity, and pride in language growth."
    }
  ];

  const whoWeServe = [
    {
      icon: UserCircle,
      title: "Suitable Age",
      description: "Ages 5–21, plus adults with targeted English-learning goals."
    },
    {
      icon: Headphones,
      title: "Hearing Status",
      description: "Serves cochlear implant users, hearing-aid users, and learners without hearing impairments."
    },
    {
      icon: Globe,
      title: "Geographic Reach",
      description: "Worldwide instruction through Zoom or Google Meet."
    },
    {
      icon: Heart,
      title: "Family Support",
      description: "Parents join for younger students; older learners develop independent study habits."
    }
  ];

  const outcomes = [
    {
      icon: Brain,
      title: "Develop English Thinking Habits",
      description: "Immersive experiences help learners think and express ideas naturally in English without translation."
    },
    {
      icon: Mic,
      title: "Enhance Auditory & Speaking Abilities",
      description: "Structured exposure strengthens listening, pronunciation, and expressive confidence."
    },
    {
      icon: Target,
      title: "Build Communication Confidence",
      description: "Learners gain stable skills for real-world English interaction and self-expression."
    }
  ];

  const journeySteps = [
    {
      icon: UserCircle,
      title: "Join iHear",
      description: "Register, complete a consultation, and begin with an initial learning assessment."
    },
    {
      icon: Target,
      title: "Receive a Tailored Pathway",
      description: "A fully personalized plan crafted by instructors and specialists."
    },
    {
      icon: GraduationCap,
      title: "Master English & Global Context",
      description: "Consistent one-on-one sessions build proficiency and cultural awareness."
    }
  ];

  return (
    <GridBackground>
      <PublicNavbar />
      
      {/* SECTION 1: Hero */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
          <img 
            src="/lovable-uploads/4d60d879-18d8-4416-91cf-c8a7734a9d03.png"
            alt="iHear English Learning Program - Students learning together"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 max-w-5xl mx-auto px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
            iHear English Learning Program
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground/90">
            Building Language Bridges for Students with Hearing Loss
          </h2>
          <p className="text-lg italic text-muted-foreground mb-12">
            Language opens access.
          </p>
          <RainbowButton 
            className="text-lg px-12 py-6 rounded-full"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
          >
            Discover Our Mission
          </RainbowButton>
        </motion.div>
      </section>

      {/* SECTION 2: Origin + Purpose */}
      <section className="max-w-7xl mx-auto py-32 px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/4d60d879-18d8-4416-91cf-c8a7734a9d03.png"
              alt="Tutoring interaction with assistive listening setup"
              className="rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <p className="text-2xl font-light leading-relaxed mb-6 text-foreground">
              In today's AI-driven educational landscape, the iHear Initiative provides uniquely accessible English learning opportunities for students with hearing loss who are learning English as a second language.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground" style={{ lineHeight: '1.8' }}>
              We believe hearing differences should never block language acquisition. Through individualized tutoring and AI-enhanced tools, iHear creates immersive learning experiences that empower students to overcome communication barriers, build confidence in both academic and daily English, and achieve inclusive communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Program Features */}
      <section className="max-w-7xl mx-auto py-24 px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Program Features
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* SECTION 4: Program Highlights */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 z-10" />
          <img 
            src="/lovable-uploads/4d60d879-18d8-4416-91cf-c8a7734a9d03.png"
            alt="Educational environment with natural lighting"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-8">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Program Highlights
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="rounded-2xl bg-card/60 backdrop-blur-md p-6 border-border/50">
                    <CardContent className="p-0">
                      <Icon className="w-10 h-10 text-primary mb-3" />
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Who We Serve */}
      <section className="max-w-6xl mx-auto py-24 px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Who We Serve
        </motion.h2>
        
        <div className="space-y-6">
          {whoWeServe.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className={`rounded-2xl p-8 flex items-start gap-6 ${
                  isEven ? 'bg-muted/30' : 'bg-card/50'
                } border-border/50`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Program Outcomes */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-5xl font-bold text-center mb-20 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Program Outcomes
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          >
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Journey/Process Timeline */}
      <section className="max-w-5xl mx-auto py-24 px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Your Journey with iHear
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />
          
          <div className="space-y-16">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } justify-center`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 hidden md:flex">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <Card className={`rounded-2xl border shadow-lg p-6 max-w-md ${
                    isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  } w-full md:w-[calc(50%-3rem)]`}>
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <Icon className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-foreground hidden md:block">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="relative bg-gradient-to-br from-success/20 via-primary/10 to-accent/20 py-32 overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-success/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            Join iHear to Create Accessible English-Learning Pathways
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            For students with hearing loss—unlocking new possibilities and transforming their language experience.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RainbowButton 
              className="text-lg px-12 py-6 rounded-full"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
            >
              Start Your Learning Journey
            </RainbowButton>
          </motion.div>
        </motion.div>
      </section>
    </GridBackground>
  );
};

export default HowItWorks;