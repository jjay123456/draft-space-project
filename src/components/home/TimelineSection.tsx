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
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent animate-gradient-flow"
            style={{
              backgroundSize: '300% 300%',
              animation: 'gradient-flow 4s ease-in-out infinite'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
        </div>
        
        {/* Enhanced Interactive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="perspective-1000"
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-background via-card to-background/50 backdrop-blur-sm overflow-hidden relative cursor-pointer">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                  {/* Enhanced Icon with multiple gradients */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <step.icon className="h-10 w-10 text-white drop-shadow-lg relative z-10" />
                    
                    {/* Pulsing ring effect */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="flex-1 flex flex-col">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed flex-1 text-lg"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Interactive bottom accent */}
                  <motion.div 
                    className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-6 mx-4 opacity-0 group-hover:opacity-100`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  />
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