"use client";

import { InteractiveCarousel } from "@/components/ui/interactive-carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Change Lives with English",
      button: "Start Teaching",
      type: "growth" as const,
      description: "Make a difference in the lives of students with hearing loss around the world.",
      highlights: [
        "Support students with hearing loss around the world",
        "Help them gain confidence in speaking and listening",
        "Break down communication barriers",
        "Experience the joy of seeing progress first-hand"
      ],
      buttonLink: "/auth"
    },
    {
      title: "Grow as a Leader",
      button: "Build Your Future",
      type: "opportunity" as const,
      description: "Develop valuable skills while making an impact.",
      highlights: [
        "Earn SSL/community service hours",
        "Strengthen leadership & communication skills",
        "Gain real tutoring & mentoring experience",
        "Stand out on college and scholarship applications"
      ],
      buttonLink: "/auth"
    },
    {
      title: "Support at Every Step",
      button: "Get Training",
      type: "support" as const,
      description: "We provide everything you need to succeed as a tutor.",
      highlights: [
        "Orientation training before you start",
        "Curriculum designed by speech-language pathologists",
        "Ongoing mentorship & feedback",
        "You'll never be left on your own"
      ],
      buttonLink: "/how-it-works"
    },
    {
      title: "Simple & Smart",
      button: "Learn More",
      type: "technology" as const,
      description: "Teaching made easy with modern technology and support.",
      highlights: [
        "Sessions via Zoom/Google Meet, accessible anywhere",
        "AI captions & visual tools for clarity",
        "Easy scheduling (1-2 hrs/week)",
        "Minimal prep — we provide resources"
      ],
      buttonLink: "/how-it-works"
    },
    {
      title: "Be Part of Something Bigger",
      button: "Join Community",
      type: "community" as const,
      description: "Connect with passionate tutors making a global impact.",
      highlights: [
        "Connect with other compassionate tutors",
        "Share tips, stories, and encouragement",
        "See your student's world open up",
        "Know your work creates ripple effects worldwide"
      ],
      buttonLink: "/team"
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <InteractiveCarousel slides={slideData} />
    </div>
  );
}