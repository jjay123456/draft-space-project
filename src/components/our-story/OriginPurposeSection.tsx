import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const OriginPurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
            alt="Student learning with tutor"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text block with accent line */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 border-l-4 border-primary"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our Origin & Purpose
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In today's AI-driven educational landscape, the iHear Initiative provides 
              uniquely accessible English learning opportunities for students with hearing 
              loss who are learning English as a second language.
            </p>
            <p>
              We believe hearing differences should never block language acquisition. Through 
              individualized tutoring and AI-enhanced tools, iHear creates immersive learning 
              experiences that empower students to overcome communication barriers, build 
              confidence in both academic and daily English, and achieve inclusive communication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
