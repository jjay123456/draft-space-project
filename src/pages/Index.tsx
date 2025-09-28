import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Accessibility, ArrowRight, Star, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { Heart, Target, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ShaderShowcase from "@/components/ui/hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import FinalCallToAction from "@/components/home/FinalCallToAction";
import { CarouselDemo } from "@/components/ui/carousel-demo";
import heroDemo from "@/assets/hero-demo.jpg";
const Index = () => {
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const toggleFullscreen = async () => {
    if (!videoRef.current) return;
    try {
      if (!document.fullscreenElement) {
        // Try different browser-specific methods
        const video = videoRef.current;
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
          await (video as any).webkitRequestFullscreen();
        } else if ((video as any).mozRequestFullScreen) {
          await (video as any).mozRequestFullScreen();
        } else if ((video as any).msRequestFullscreen) {
          await (video as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        // Try different browser-specific exit methods
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen toggle failed:', error);
    }
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement);
      setIsFullscreen(isCurrentlyFullscreen);
    };

    // Listen to all browser-specific fullscreen change events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);
  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>;
  }
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <PublicNavbar />
      
      {/* Unified Page Container with Flow */}
      <div className="relative">
        {/* Hero Section with Enhanced Background */}
        <section className="relative">
          <ShaderShowcase />
          
          {/* Enhanced Floating Particles with Flow Lines */}
          <div className="absolute -bottom-1 left-0 w-full h-32 z-30 overflow-hidden">
            {/* Flow Lines */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                <path d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,74.7C672,85,768,107,864,112C960,117,1056,107,1152,96L1200,85.3V128H1152C1056,128,960,128,864,128C768,128,672,128,576,128C480,128,384,128,288,128C192,128,96,128,48,128H0V96Z" fill="url(#gradient1)"/>
              </svg>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
                  <stop offset="50%" stopColor="hsl(var(--accent) / 0.2)" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.2)" />
                </linearGradient>
              </defs>
            </div>
            
            {/* Enhanced Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  background: i % 3 === 0 ? 'hsl(var(--primary) / 0.6)' : 
                             i % 3 === 1 ? 'hsl(var(--accent) / 0.6)' : 
                             'hsl(var(--neon-blue) / 0.6)',
                  left: `${i * 5 + Math.random() * 5}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  filter: 'blur(0.5px)'
                }} 
                animate={{
                  y: [-10, -25, -10],
                  x: [0, Math.random() * 15 - 7.5, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5]
                }} 
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }} 
              />
            ))}
          </div>
        </section>

        {/* Video Demo Section with Seamless Integration */}
        <section className="relative -mt-32 py-8 px-4 bg-transparent z-40">
          <div className="container mx-auto">
            <ContainerScroll titleComponent={
              <div className="text-center mb-8 relative">
                {/* Connecting gradient line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-1 h-16 bg-gradient-to-b from-primary/60 to-transparent"></div>
              </div>
            }>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-accent/3 max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl">
                  <video ref={videoRef} autoPlay muted={isMuted} loop playsInline controls={false} disablePictureInPicture preload="metadata" poster={heroDemo} className="w-full h-full object-cover transition-all duration-700 ease-in-out" aria-label="iHear accessible learning platform demo video" onError={e => {
                  console.error('Video failed to load:', e);
                  console.error('Video error details:', e.currentTarget.error);
                  if (e.currentTarget.error) {
                    console.error('Error code:', e.currentTarget.error.code);
                    console.error('Error message:', e.currentTarget.error.message);
                  }
                }} onLoadStart={() => console.log('Video loading started')} onLoadedData={() => console.log('Video loaded successfully')} onCanPlay={() => console.log('Video can play')} onLoadedMetadata={() => console.log('Video metadata loaded')}>
                    <source src="/ihear-demo-video.mp4" type="video/mp4" />
                    <source src="/ihear-demo-video.webm" type="video/webm" />
                    <img src={heroDemo} alt="iHear accessible learning platform interface with captions and educational features" className="w-full h-full object-cover rounded-xl" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {/* Mute/Unmute Button */}
                    <Button variant="secondary" size="sm" onClick={toggleMute} className="bg-black/50 hover:bg-black/70 text-white border-white/20 backdrop-blur-sm transition-all duration-300" aria-label={isMuted ? "Unmute video" : "Mute video"}>
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>

                    {/* Fullscreen Button */}
                    <Button variant="secondary" size="sm" onClick={toggleFullscreen} className="bg-black/50 hover:bg-black/70 text-white border-white/20 backdrop-blur-sm transition-all duration-300" aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}>
                      {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </ContainerScroll>
          </div>
        </section>

        {/* Content Flow Sections with Unified Background */}
        <div className="relative bg-gradient-to-b from-background via-primary/2 to-background">
          {/* Section Divider with Visual Flow */}
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-6xl mx-auto relative">
                {/* Connecting flow line */}
                <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 96" preserveAspectRatio="none">
                  <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7L1200,64V96H1152C1056,96,960,96,864,96C768,96,672,96,576,96C480,96,384,96,288,96C192,96,96,96,48,96H0V32Z" fill="url(#flowGradient)"/>
                </svg>
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
                    <stop offset="50%" stopColor="hsl(var(--accent) / 0.1)" />
                    <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                  </linearGradient>
                </defs>
              </div>
            </div>
            
            {/* Central connecting element */}
            <div className="flex justify-center">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 30px hsl(var(--accent) / 0.4)",
                    "0 0 20px hsl(var(--primary) / 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-6 h-6 bg-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* iHEAR Initiative Carousel Section */}
          <section className="py-20 px-4 relative">
            <div className="container mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Discover iHEAR Initiative
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Explore our mission, team, and how you can make a difference in accessible education
              </motion.p>
              <CarouselDemo />
            </div>
          </section>

          <FinalCallToAction />
        </div>
      </div>
    </div>;
};
export default Index;