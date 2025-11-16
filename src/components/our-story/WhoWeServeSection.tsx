import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Ear, Globe, Users } from "lucide-react";

const audience = [
  {
    icon: Calendar,
    title: "Suitable Age",
    description: "Ages 5–21, plus adults with targeted English-learning goals."
  },
  {
    icon: Ear,
    title: "Hearing Status",
    description: "Serves cochlear implant users, hearing-aid users, and learners without hearing impairments."
  },
  {
    icon: Globe,
    title: "Geographic Reach",
    description: "Worldwide instruction through Zoom or Google Meet."
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Parents join for younger students; older learners develop independent study habits."
  }
];

export const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Who We Serve
        </h2>
      </motion.div>

      <div className="space-y-6">
        {audience.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`p-8 rounded-2xl border border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted'}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <item.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
