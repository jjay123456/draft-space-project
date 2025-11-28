import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const ImpactTiles = () => {
  const impacts = [
    { number: "1000+", label: "Students Empowered", span: "col-span-2 row-span-2" },
    { number: "95%", label: "Progress Rate", span: "col-span-1" },
    { number: "50+", label: "Expert Tutors", span: "col-span-1" },
    { number: "24/7", label: "Support Access", span: "col-span-1 row-span-2" },
    { number: "∞", label: "Possibilities", span: "col-span-2" },
  ];

  return (
    <div className="space-y-12">
      <motion.h2 
        className="text-4xl font-bold text-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Measurable Impact
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {impacts.map((impact, index) => (
          <motion.div
            key={impact.label}
            className={impact.span}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {impact.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground text-center">
                {impact.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
