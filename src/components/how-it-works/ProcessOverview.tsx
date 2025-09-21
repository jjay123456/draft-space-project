import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserPlus, Settings, GraduationCap, Rocket } from 'lucide-react';

export const ProcessOverview = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Assessment",
      description: "Complete our comprehensive hearing profile assessment to understand your unique learning needs and device compatibility.",
      details: ["Hearing device compatibility check", "Learning style assessment", "Goal setting session"]
    },
    {
      icon: Settings,
      title: "Personalized Setup",
      description: "Our AI creates your custom learning pathway and optimizes audio settings for your specific hearing devices.",
      details: ["Custom audio calibration", "Learning pathway creation", "Device optimization"]
    },
    {
      icon: GraduationCap,
      title: "Begin Learning",
      description: "Start your lessons with certified tutors who specialize in hearing accessibility and visual communication methods.",
      details: ["One-on-one sessions", "Visual learning tools", "Progress tracking"]
    },
    {
      icon: Rocket,
      title: "Track Progress",
      description: "Monitor your improvement through detailed analytics and adaptive challenges that grow with your skills.",
      details: ["Performance analytics", "Adaptive difficulty", "Achievement milestones"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in four easy steps designed specifically for hearing device users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background group hover:bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-background rounded-full border border-border flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};