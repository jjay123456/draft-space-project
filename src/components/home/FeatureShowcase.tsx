import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Users,
      title: "Who We Are",
      description: "7th to 12th grade students passionate about sharing knowledge and personal development.",
      color: "primary",
      bgGradient: "from-primary/5 via-background to-transparent hover:from-primary/10 hover:to-primary/5"
    },
    {
      icon: BookOpen,
      title: "What We Do", 
      description: "Provide language/English tutoring to children with cochlear implants and those with hearing impairments, fostering inclusive communication through language learning.",
      color: "accent",
      bgGradient: "from-accent/5 via-background to-transparent hover:from-accent/10 hover:to-accent/5"
    },
    {
      icon: Clock,
      title: "When We Meet",
      description: "Flexible hours (1-2 hours per week), with tutoring sessions conducted via Zoom.",
      color: "success",
      bgGradient: "from-success/5 via-background to-transparent hover:from-success/10 hover:to-success/5"
    },
    {
      icon: Target,
      title: "Why Join Us",
      description: "Develop leadership skills and make a meaningful social impact. Also earn SSL hours.",
      color: "orange-500",
      bgGradient: "from-orange-500/5 via-background to-transparent hover:from-orange-500/10 hover:to-orange-500/5"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About iHEAR Initiative</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our inclusive education program
          </p>
        </div>
        
        {/* Large Feature Cards with Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon Section */}
              <div className="lg:w-1/3">
                <motion.div
                  className={`w-32 h-32 bg-gradient-to-br from-${feature.color} to-${feature.color}/60 rounded-3xl flex items-center justify-center mx-auto shadow-2xl`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-16 w-16 text-white drop-shadow-lg" />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3">
                <Card className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${feature.bgGradient} text-center lg:text-left`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;