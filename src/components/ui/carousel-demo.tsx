"use client";

import { InteractiveCarousel } from "@/components/ui/interactive-carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Join Our Mission",
      button: "Volunteer Now",
      src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "simple" as const,
      description: "Be part of something bigger. Help us bridge the communication gap for hearing-impaired students and create an inclusive learning environment where everyone can thrive.",
      highlights: [
        "Make a real difference in students' lives",
        "Flexible volunteer opportunities",
        "Join a supportive community of educators",
        "No teaching experience required - we provide training"
      ]
    },
    {
      title: "We're Looking For You",
      button: "Apply Now",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "features" as const,
      description: "We're seeking passionate individuals who want to make education accessible for everyone.",
      features: [
        {
          icon: "❤️",
          title: "Passion for Teaching",
          description: "A genuine desire to help others learn and grow, regardless of their hearing abilities."
        },
        {
          icon: "🤝",
          title: "Inclusive Mindset",
          description: "Understanding and empathy for the challenges faced by hearing-impaired students."
        },
        {
          icon: "💪",
          title: "Commitment",
          description: "Dedication to providing consistent, reliable support to students who depend on you."
        },
        {
          icon: "⏰",
          title: "Flexible Schedule",
          description: "Ability to volunteer regularly, even if it's just a few hours per week."
        }
      ]
    },
    {
      title: "Our Mission",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "mission" as const,
      description: "Our three-pillar approach to transforming education for hearing-impaired students.",
      features: [
        {
          icon: "💪",
          title: "Empower",
          description: "We give students the tools and confidence they need to succeed academically and personally, breaking down barriers that have held them back."
        },
        {
          icon: "📚",
          title: "Educate",
          description: "Through accessible courses, live sessions, and personalized support, we ensure every student receives quality education tailored to their needs."
        },
        {
          icon: "🌐",
          title: "Connect",
          description: "We build bridges between hearing-impaired students, dedicated tutors, and supportive communities, fostering relationships that last a lifetime."
        }
      ]
    },
    {
      title: "About iHEAR Initiative",
      button: "Discover More",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "features" as const,
      description: "Everything you need to know about our initiative to transform education for hearing-impaired students.",
      features: [
        {
          icon: "👥",
          title: "Who We Are",
          description: "A dedicated team of educators, developers, and advocates working to make education accessible for hearing-impaired students worldwide."
        },
        {
          icon: "🎯",
          title: "What We Do",
          description: "We provide accessible online courses, live tutoring sessions, and a supportive community platform designed specifically for hearing-impaired learners."
        },
        {
          icon: "📅",
          title: "When We Started",
          description: "Founded in 2024 with the vision of breaking down communication barriers in education and creating equal opportunities for all students."
        },
        {
          icon: "❓",
          title: "Why It Matters",
          description: "Because every student deserves access to quality education, regardless of their hearing abilities. We're here to make that a reality."
        }
      ]
    },
    {
      title: "Get Started Today",
      button: "Join Now",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "navigation" as const,
      description: "Ready to be part of the change? Choose how you'd like to get involved with the iHEAR Initiative.",
      highlights: [
        "🎓 Student? Browse our accessible courses and join live sessions",
        "👨‍🏫 Educator? Apply to become a volunteer tutor",
        "🤝 Supporter? Learn how you can help our mission",
        "📞 Questions? Contact us for more information"
      ]
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <InteractiveCarousel slides={slideData} />
    </div>
  );
}