import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BentoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We're Looking For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals ready to make a difference in accessibility education
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Large feature card */}
          <motion.div 
            className="col-span-12 md:col-span-8 lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-4 text-foreground">Passion for Teaching</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A genuine desire to help students succeed and overcome communication barriers in their learning journey. Your enthusiasm makes all the difference.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Two smaller cards */}
          <div className="col-span-12 md:col-span-4 lg:col-span-6 grid grid-rows-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-accent/8 via-background to-accent/3">
                <CardContent className="p-6 h-full flex items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Inclusive Mindset</h3>
                      <p className="text-muted-foreground text-sm">Creating welcoming spaces for all learners</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-success/8 via-background to-success/3">
                <CardContent className="p-6 h-full flex items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-success to-success/60 rounded-xl flex items-center justify-center shadow-md">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Commitment</h3>
                      <p className="text-muted-foreground text-sm">Dedicated to making a real impact</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Wide bottom card */}
          <motion.div 
            className="col-span-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-r from-orange-500/5 via-background to-orange-500/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600/60 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Flexible Schedule</h3>
                      <p className="text-muted-foreground">Just 1-2 hours per week can transform a student's learning experience</p>
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="text-2xl font-bold text-orange-500">1-2hrs</div>
                    <div className="text-sm text-muted-foreground">per week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;