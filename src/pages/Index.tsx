import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Accessibility, ArrowRight, Star, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { Heart, Target, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ShaderShowcase from "@/components/ui/hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import BentoSection from "@/components/home/BentoSection";
import TimelineSection from "@/components/home/TimelineSection";
import FeatureShowcase from "@/components/home/FeatureShowcase";
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
  return <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      {/* Hero Section with Shader Background */}
      <section className="relative">
        <ShaderShowcase />
        
        {/* Floating Particles Transition */}
        <div className="absolute -bottom-1 left-0 w-full h-20 z-30 overflow-hidden">
          {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" style={{
          left: `${i * 8 + 4}%`,
          top: `${Math.random() * 60 + 20}%`
        }} animate={{
          y: [-5, -15, -5],
          x: [0, Math.random() * 10 - 5, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.5, 1, 0.5]
        }} transition={{
          duration: 3 + Math.random() * 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: i * 0.1,
          ease: "easeInOut"
        }} />)}
        </div>
      </section>

      {/* Video Demo Section with Grid Background */}
      <GridBackground className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <section className="relative pt-8 pb-4 px-4 z-40">
          <div className="container mx-auto">
            <ContainerScroll titleComponent={<div className="text-center mb-8">
                  
                  
                </div>}>
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

        {/* iHEAR Initiative Carousel Section */}
        <section className="pt-8 pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/90 bg-clip-text text-transparent mb-4"
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
      </GridBackground>
    </div>;
};
export default Index;