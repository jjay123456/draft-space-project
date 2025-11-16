import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, ClipboardCheck, GraduationCap } from "lucide-react";

const milestones = [
  {
    icon: UserPlus,
    title: "Join iHear",
    description: "Register, complete a consultation, and begin with an initial learning assessment.",
    side: "left"
  },
  {
    icon: ClipboardCheck,
    title: "Receive a Tailored Pathway",
    description: "A fully personalized plan crafted by instructors and specialists.",
    side: "right"
  },
  {
    icon: GraduationCap,
    title: "Master English & Global Context",
    description: "Consistent one-on-one sessions build proficiency and cultural awareness.",
    side: "left"
  }
];

export const JourneyTimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Your Learning Journey
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: milestone.side === "left" ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                milestone.side === "left" 
                  ? "md:flex-row-reverse md:justify-end" 
                  : "md:justify-start"
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${milestone.side === "left" ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <milestone.icon className={`w-12 h-12 mb-4 text-primary ${milestone.side === "left" ? "md:ml-auto" : ""}`} strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
