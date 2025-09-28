"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import "./container-scroll-animation.css";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 0.7] : [1, 1.05];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [10, -15]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className="h-[25rem] md:h-[35rem] flex items-center justify-center relative px-2 py-2 md:px-8 md:py-4"
      ref={containerRef}
    >
      <div
        className="py-6 md:py-24 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        aspectRatio: '16/9',
        borderRadius: 'clamp(14px, 2vw, 28px)',
        padding: 'clamp(10px, 1.5vw, 18px)',
        background: 'radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,.25), transparent 60%), #0b0b0b',
        boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl mx-auto w-full relative overflow-hidden video-card"
    >
      <div 
        className="absolute inset-0 pointer-events-none video-blend"
        style={{
          WebkitMaskImage: 'radial-gradient(140% 140% at 50% -10%, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 45%, rgba(0,0,0,.35) 85%, rgba(0,0,0,.55) 100%)',
          maskImage: 'radial-gradient(140% 140% at 50% -10%, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 45%, rgba(0,0,0,.35) 85%, rgba(0,0,0,.55) 100%)',
          background: 'radial-gradient(120% 120% at 50% 100%, rgba(0,0,0,.35), rgba(0,0,0,0) 70%)'
        }}
      />
      <div className="h-full w-full video-el-wrapper" style={{ borderRadius: 'inherit' }}>
        <div className="h-full w-full overflow-hidden" style={{ borderRadius: 'inherit' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};