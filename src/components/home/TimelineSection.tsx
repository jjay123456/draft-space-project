import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const steps = [
    {
      icon: Zap,
      title: "Empower",
      description: "We empower students with hearing impairments to achieve their academic goals through personalized support and accessible learning tools.",
      color: "from-primary via-primary/80 to-primary/60",
      shadowColor: "shadow-primary/20"
    },
    {
      icon: BookOpen,
      title: "Educate", 
      description: "We provide comprehensive language tutoring that bridges communication gaps and enhances learning opportunities for all students.",
      color: "from-accent via-accent/80 to-accent/60",
      shadowColor: "shadow-accent/20"
    },
    {
      icon: Users,
      title: "Connect",
      description: "We connect passionate volunteers with students who need support, creating a community of inclusive learning and mutual growth.",
      color: "from-success via-success/80 to-success/60",
      shadowColor: "shadow-success/20"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative">
          {/* Section connector */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The iHEAR Initiative is dedicated to creating an inclusive educational environment where communication barriers don't limit potential.
          </motion.p>
        </div>
        
        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-card to-background/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:${step.shadowColor} transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <step.icon className="h-8 w-8 text-white drop-shadow-sm" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;