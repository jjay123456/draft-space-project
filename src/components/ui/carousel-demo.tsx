"use client";

import { Carousel } from "@/components/ui/carousel";
import carouselTeam from "@/assets/carousel-team.jpg";
import carouselHowItWorks from "@/assets/carousel-how-it-works.jpg";
import carouselTestimonials from "@/assets/carousel-testimonials.jpg";
import carouselContact from "@/assets/carousel-contact.jpg";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Meet Our Team",
      button: "View Team",
      src: carouselTeam,
      route: "/team",
    },
    {
      title: "How It Works",
      button: "Learn More",
      src: carouselHowItWorks,
      route: "/how-it-works",
    },
    {
      title: "Student Success Stories",
      button: "Read Testimonials",
      src: carouselTestimonials,
      route: "/testimonials",
    },
    {
      title: "Get Started Today",
      button: "Contact Us",
      src: carouselContact,
      route: "/contact",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
