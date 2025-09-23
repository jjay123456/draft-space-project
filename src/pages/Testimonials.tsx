import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import OrbitTestimonials from "@/components/testimonials/OrbitTestimonials";

const Testimonials = () => {
  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
      <PublicNavbar />
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* Orbit Testimonials Section */}
        <OrbitTestimonials />

        {/* Accessibility: Static testimonials for screen readers */}
        <div className="sr-only">
          <h2>All Testimonials (Text Version)</h2>
          <div>
            <h3>16-year-old student (since Dec 2024)</h3>
            <p>"My English has never been very good, and I've always hoped to improve. That's why I decided to join the one-on-one English tutoring program. During this learning journey, I truly felt so much encouragement and support. I want to especially thank Teacher Howard and Teacher Bryan. The tutors are very patient—they never get frustrated with me even when my level isn't high. Instead, they guide me step by step, making me more and more willing to speak up. I've even started to feel that English isn't so scary anymore. I really enjoy this teaching style. Every class is fun, something I always look forward to, and it has given me growing confidence in my English. Thank you for making sure I don't feel alone on this learning path."</p>
            
            <h3>College student, male (since Apr 2025)</h3>
            <p>"In the past, I had almost no experience speaking English, and I lacked confidence to even try. Since the education system didn't really require spoken English, I always chose to avoid it. But after joining this program, I now have a set time each week to interact fully in English with my tutor. At first, I was really nervous—worried that I wouldn't understand or that I would speak poorly. But the tutor's teaching style gradually eased my stress and helped me open up. Each lesson starts with simple, clear conversations and guidance, then moves into pronunciation practice, vocabulary explanations, and sentence application. Finally, we do role-play and reading exercises. The whole arrangement is systematic and well-structured. Along the way, my tutor has given me specific feedback on my pronunciation, and often uses visuals and examples to help me understand. For instance, I sometimes add an unnecessary 's' or drop certain sounds, and the tutor always reminds me and helps me correct it. I'm still practicing, but compared to before, I feel much less resistance to English and have more courage to try. This has been such an important learning experience for me. Thank you to the teachers for giving me this opportunity and helping me realize that I can slowly learn to express myself in English."</p>
          </div>
        </div>
      </div>
    </GridBackground>
  );
};

export default Testimonials;