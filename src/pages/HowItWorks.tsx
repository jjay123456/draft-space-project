import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PublicNavbar from '@/components/layout/PublicNavbar';
import GridBackground from '@/components/layout/GridBackground';
import { Card, CardContent } from '@/components/ui/card';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Brain, Headphones, Users, Heart, GraduationCap, Sparkles, Globe, Calendar, MapPin, UserCircle, Mic, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const programFeaturesData = [{
  feature: 'Scientific',
  value: 95
}, {
  feature: 'Personalization',
  value: 98
}, {
  feature: 'Comprehensive',
  value: 92
}, {
  feature: 'AI Integration',
  value: 96
}, {
  feature: 'Dual Instructors',
  value: 94
}, {
  feature: 'Device Optimization',
  value: 97
}];
const ageDistributionData = [{
  age: '5-8',
  students: 18
}, {
  age: '9-12',
  students: 28
}, {
  age: '13-15',
  students: 42
}, {
  age: '16-18',
  students: 35
}, {
  age: '19-21',
  students: 22
}, {
  age: '21+',
  students: 15
}];
const outcomesProgressData = [{
  lesson: 1,
  listening: 20,
  pronunciation: 15,
  confidence: 18
}, {
  lesson: 2,
  listening: 28,
  pronunciation: 23,
  confidence: 25
}, {
  lesson: 3,
  listening: 35,
  pronunciation: 32,
  confidence: 33
}, {
  lesson: 4,
  listening: 43,
  pronunciation: 40,
  confidence: 42
}, {
  lesson: 5,
  listening: 51,
  pronunciation: 48,
  confidence: 50
}, {
  lesson: 6,
  listening: 58,
  pronunciation: 55,
  confidence: 58
}, {
  lesson: 7,
  listening: 65,
  pronunciation: 63,
  confidence: 66
}, {
  lesson: 8,
  listening: 72,
  pronunciation: 70,
  confidence: 73
}, {
  lesson: 9,
  listening: 78,
  pronunciation: 77,
  confidence: 80
}, {
  lesson: 10,
  listening: 85,
  pronunciation: 83,
  confidence: 86
}, {
  lesson: 11,
  listening: 91,
  pronunciation: 89,
  confidence: 92
}, {
  lesson: 12,
  listening: 96,
  pronunciation: 95,
  confidence: 97
}];
const HowItWorks = () => {
  const navigate = useNavigate();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  return <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <GridBackground className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <section className="pt-32 pb-12 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/90 bg-clip-text text-transparent mb-6 tracking-tight">
                How iHear Works
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                iHear is an English learning program made for students with hearing differences and anyone who wants a more customized, science-based way to learn.
              </p>
            </motion.div>
          </div>
        </section>
      </GridBackground>

      {/* Section 1: Program Features */}
      <section className="py-16 px-4 relative">
        <GridBackground className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Program Features
              </h2>
              <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                Balanced excellence across all dimensions of language learning
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: Brain,
                title: "Customized Learning Plans",
                desc: "Each student gets a personal learning plan based on how they hear, their current English level, and what they want to achieve."
              }, {
                icon: Headphones,
                title: "Hearing and Assistive Device Optimization",
                desc: "The program works with hearing aids and cochlear implants. Special sound settings help make speech clearer and easier to understand."
              }, {
                icon: Users,
                title: "Dual Instructor Guidance",
                desc: "Every student learns from two types of teachers: a native English-speaking tutor and a speech or hearing specialist."
              }, {
                icon: Sparkles,
                title: "Technology-Integrated Teaching",
                desc: "AI tools and visual learning methods make each class interactive and fun through sight, touch, and hearing."
              }].map((feature, index) => <motion.div key={feature.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} whileHover={{
                y: -8
              }}>
                    <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <feature.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Section 2: Program Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Program Highlights
            </h2>
            <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
              Comprehensive support at every stage of your learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Heart,
            title: "Dedicated Teaching Team",
            desc: "Patient, friendly high school tutors from across the U.S., carefully chosen for their kindness and understanding of hearing challenges."
          }, {
            icon: GraduationCap,
            title: "Expert Support",
            desc: "Professional speech-language pathologists help design lessons using proven methods to build better listening and speaking skills."
          }, {
            icon: Target,
            title: "Personalized Instruction",
            desc: "Each lesson changes based on how the student improves. Teachers review progress and adjust the next lesson accordingly."
          }, {
            icon: Sparkles,
            title: "Comprehensive Care",
            desc: "Build confidence, express yourself clearly, feel proud of progress, and develop a positive attitude toward communication."
          }].map((highlight, index) => <motion.div key={highlight.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            y: -8
          }}>
                <Card className="h-full border-primary/10 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Section 3: Target Participants */}
      <section className="py-16 px-4 relative">
        <GridBackground className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Target Participants
              </h2>
              <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                Designed for diverse learners across all ages and backgrounds
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[{
                icon: Calendar,
                title: "Suitable Age",
                desc: "Designed for learners aged 5 to 21, and also for adults who want to improve their English in a customized way."
              }, {
                icon: Headphones,
                title: "Hearing Status",
                desc: "Open to students who use hearing aids or cochlear implants, and students without hearing loss who want advanced learning methods."
              }, {
                icon: Globe,
                title: "Geographic Location",
                desc: "All lessons happen online through Zoom or Google Meet, so students can join from anywhere in the world."
              }, {
                icon: UserCircle,
                title: "Family Support",
                desc: "Parents work together with teachers for younger students. Older students take more control while still getting family support."
              }].map((participant, index) => <motion.div key={participant.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} whileHover={{
                y: -8
              }}>
                    <Card className="h-full border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <participant.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">{participant.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{participant.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Section 5: Enrollment Flow */}
      <section className="py-16 px-4 relative">
        <GridBackground className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Enrollment Flow
              </h2>
              <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                Your journey to barrier-free English learning in three simple steps
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 hidden lg:block" />

              <div className="grid lg:grid-cols-3 gap-8 relative">
                {[{
                step: 1,
                title: "Join iHear",
                desc: "Sign up and schedule your first consultation. Join together for an introduction and short language and hearing check.",
                icon: UserCircle
              }, {
                step: 2,
                title: "Receive a Tailored Learning Pathway",
                desc: "Our team builds a custom plan that fits your goals, hearing needs, and learning style.",
                icon: MapPin
              }, {
                step: 3,
                title: "Master English Skills While Exploring Global Cultures",
                desc: "Through one-on-one sessions, learn English words and global cultures — gaining confidence to communicate anywhere.",
                icon: Globe
              }].map((step, index) => <motion.div key={step.step} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: index * 0.2
              }} viewport={{
                once: true
              }} onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)} className="cursor-pointer">
                    <Card className={`border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${expandedStep === step.step ? 'ring-2 ring-primary' : ''}`}>
                      <CardContent className="p-8 text-center relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {step.step}
                        </div>
                        <div className="w-20 h-20 mx-auto mb-6 mt-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                          <step.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground break-words">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed break-words">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </div>
          </div>
        </GridBackground>
      </section>

      {/* Section 6: Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
        </div>
      </section>
    </div>;
};
export default HowItWorks;