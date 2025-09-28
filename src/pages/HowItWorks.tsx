import React from 'react';
import { motion } from 'framer-motion';
import PublicNavbar from '@/components/layout/PublicNavbar';
import GridBackground from '@/components/layout/GridBackground';
import { ProcessOverview } from '@/components/how-it-works/ProcessOverview';
import { FeatureHighlight } from '@/components/how-it-works/FeatureHighlight';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Brain, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Personalized Learning",
      description: "AI-driven assessments create customized pathways tailored to your hearing profile and learning style."
    },
    {
      icon: Headphones,
      title: "Device Optimization", 
      description: "Advanced audio processing specifically engineered for hearing aids, cochlear implants, and other assistive devices."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Collaborative team of certified speech-language pathologists and specialized tutors."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Multi-sensory approach with visual cues, tactile feedback, and adaptive interfaces."
    }
  ];

  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Our comprehensive approach to accessible language learning, designed specifically for the hearing community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4 bg-muted/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            Why Choose Our Platform
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm relative z-20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <div className="relative z-10">
        <ProcessOverview />
      </div>

      {/* Feature Highlight */}
      <div className="relative z-10">
        <FeatureHighlight />
      </div>

      {/* Call to Action */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of learners who have already transformed their communication skills with our specialized platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl relative z-30">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-muted/50 transition-colors relative z-30">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </GridBackground>
  );
};

export default HowItWorks;