import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FinalCallToAction = () => {
  const navigationCards = [
    {
      icon: Users,
      title: "Meet Our Team",
      description: "Get to know our dedicated tutors and volunteers making a difference.",
      link: "/team",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5",
      hoverGradient: "hover:from-primary hover:to-primary/80"
    },
    {
      icon: BookOpen,
      title: "How It Works",
      description: "Discover our step-by-step process for accessible language learning.",
      link: "/how-it-works",
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5",
      hoverGradient: "hover:from-accent hover:to-accent/80"
    },
    {
      icon: Star,
      title: "Testimonials",
      description: "Read success stories from students and families we've helped.",
      link: "/testimonials",
      color: "success",
      bgGradient: "from-success/10 to-success/5",
      hoverGradient: "hover:from-success hover:to-success/80"
    },
    {
      icon: MessageCircle,
      title: "Contact Us",
      description: "Get in touch to learn more or join our inclusive community.",
      link: "/contact",
      color: "orange-500",
      bgGradient: "from-orange-500/10 to-orange-500/5",
      hoverGradient: "hover:from-orange-500 hover:to-orange-600/80"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Navigation Cards Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/15 via-primary/8 to-accent/12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-accent/8 to-primary/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-primary/10 to-success/6 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore Our Platform
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover all the ways iHEAR Initiative supports accessible learning
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-card to-background/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${card.color} to-${card.color}/60 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-${card.color}/20 transition-all duration-300 group-hover:scale-110`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className={`mt-auto bg-gradient-to-r ${card.bgGradient} border border-${card.color}/20 ${card.hoverGradient} hover:text-white transition-all duration-300`} 
                      asChild
                    >
                      <Link to={card.link}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-accent/85 to-primary/70 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/95 via-accent/70 to-primary/50"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-white/8 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Free Learning Journey?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              Join students in our accessible learning platform with full support features - completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-gradient-to-r from-background via-background/95 to-background text-foreground hover:from-background/90 hover:to-background/85 border-0 shadow-2xl transition-all duration-300" 
                  asChild
                >
                  <Link to="/auth">
                    Start Learning Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg border-2 border-background text-background bg-transparent hover:bg-background/10 hover:text-background transition-all duration-300" 
                  asChild
                >
                  <Link to="/auth">Explore Free Courses</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinalCallToAction;