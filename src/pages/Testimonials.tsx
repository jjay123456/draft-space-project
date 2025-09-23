import { useRef } from "react";
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import OrbitTestimonials from "@/components/testimonials/OrbitTestimonials";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const allTestimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToAllTestimonials = () => {
    allTestimonialsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const testimonials = [
    {
      id: 1,
      quote: "My English has never been very good, and I've always hoped to improve. That's why I decided to join the one-on-one English tutoring program. During this learning journey, I truly felt so much encouragement and support. I want to especially thank Teacher Howard and Teacher Bryan. The tutors are very patient—they never get frustrated with me even when my level isn't high. Instead, they guide me step by step, making me more and more willing to speak up. I've even started to feel that English isn't so scary anymore. I really enjoy this teaching style. Every class is fun, something I always look forward to, and it has given me growing confidence in my English. Thank you for making sure I don't feel alone on this learning path.",
      author: "16-year-old student",
      since: "Dec 2024"
    },
    {
      id: 2,
      quote: "In the past, I had almost no experience speaking English, and I lacked confidence to even try. Since the education system didn't really require spoken English, I always chose to avoid it. But after joining this program, I now have a set time each week to interact fully in English with my tutor. At first, I was really nervous—worried that I wouldn't understand or that I would speak poorly. But the tutor's teaching style gradually eased my stress and helped me open up. Each lesson starts with simple, clear conversations and guidance, then moves into pronunciation practice, vocabulary explanations, and sentence application. Finally, we do role-play and reading exercises. The whole arrangement is systematic and well-structured. Along the way, my tutor has given me specific feedback on my pronunciation, and often uses visuals and examples to help me understand. For instance, I sometimes add an unnecessary 's' or drop certain sounds, and the tutor always reminds me and helps me correct it. I'm still practicing, but compared to before, I feel much less resistance to English and have more courage to try. This has been such an important learning experience for me. Thank you to the teachers for giving me this opportunity and helping me realize that I can slowly learn to express myself in English.",
      author: "College student, male",
      since: "Apr 2025"
    }
  ];

  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
      <PublicNavbar />
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* Orbit Testimonials Section */}
        <OrbitTestimonials onSeeAllClick={scrollToAllTestimonials} />

        {/* All Testimonials Section */}
        <div ref={allTestimonialsRef} className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Student Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read the complete testimonials from our students who have transformed their English learning journey.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-card/95 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-500 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/20" />
                    <div>
                      <h3 className="font-bold text-xl text-foreground">
                        {testimonial.author}
                      </h3>
                      <p className="text-muted-foreground">
                        Student since {testimonial.since}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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