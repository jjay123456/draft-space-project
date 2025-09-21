import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Headphones, 
  Users, 
  Zap, 
  Eye, 
  MessageCircle,
  BarChart3,
  Shield
} from 'lucide-react';

export const FeatureHighlight = () => {
  const features = [
    {
      category: "AI-Powered Learning",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      items: [
        { icon: Brain, title: "Adaptive Algorithms", description: "Learns your pace and adjusts difficulty automatically" },
        { icon: BarChart3, title: "Progress Analytics", description: "Detailed insights into your learning journey" },
        { icon: Zap, title: "Smart Recommendations", description: "Personalized content based on your progress" }
      ]
    },
    {
      category: "Accessibility First",
      icon: Headphones,
      color: "from-green-500 to-teal-600",
      items: [
        { icon: Headphones, title: "Device Optimization", description: "Calibrated for hearing aids and cochlear implants" },
        { icon: Eye, title: "Visual Learning", description: "Rich visual cues and sign language support" },
        { icon: MessageCircle, title: "Real-time Captions", description: "AI-powered captions for all audio content" }
      ]
    },
    {
      category: "Expert Support",
      icon: Users,
      color: "from-orange-500 to-red-600",
      items: [
        { icon: Users, title: "Certified Tutors", description: "Speech-language pathologists and specialized educators" },
        { icon: Shield, title: "Safe Environment", description: "Supportive, judgment-free learning space" },
        { icon: MessageCircle, title: "24/7 Support", description: "Always available help when you need it" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Features for Enhanced Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets specialized education to create the perfect learning environment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-1">
                        {feature.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">
                        Specialized Tools
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {feature.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "95%", label: "Student Satisfaction", description: "of learners report improved confidence" },
            { number: "3x", label: "Faster Progress", description: "compared to traditional methods" },
            { number: "24/7", label: "Support Available", description: "expert help whenever you need it" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};