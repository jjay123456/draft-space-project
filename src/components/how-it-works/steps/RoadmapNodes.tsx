import React from 'react';
import { motion } from 'framer-motion';

export const RoadmapNodes: React.FC = () => {
  const learningSteps = [
    { id: 1, x: 15, y: 30, delay: 0, label: "Assessment", description: "Initial evaluation" },
    { id: 2, x: 35, y: 20, delay: 0.2, label: "Plan Creation", description: "Personalized pathway" },
    { id: 3, x: 55, y: 40, delay: 0.4, label: "Practice Sessions", description: "Guided learning" },
    { id: 4, x: 75, y: 25, delay: 0.6, label: "Progress Tracking", description: "Monitor growth" },
    { id: 5, x: 90, y: 35, delay: 0.8, label: "Mastery", description: "Achieve goals" }
  ];

  const connections = [
    { from: 0, to: 1, delay: 0.3 },
    { from: 1, to: 2, delay: 0.5 },
    { from: 2, to: 3, delay: 0.7 },
    { from: 3, to: 4, delay: 0.9 }
  ];

  return (
    <div className="w-full h-full relative">
      <svg className="w-full h-full" viewBox="0 0 100 80">
        {/* Connection paths */}
        {connections.map((connection, index) => {
          const fromNode = learningSteps[connection.from];
          const toNode = learningSteps[connection.to];
          
          return (
            <motion.path
              key={`connection-${index}`}
              d={`M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${Math.min(fromNode.y, toNode.y) - 8} ${toNode.x} ${toNode.y}`}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ 
                duration: 1, 
                delay: connection.delay,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Progress indicators */}
        {learningSteps.map((step, index) => (
          <motion.g key={step.id}>
            {/* Main node */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r="5"
              fill="hsl(var(--primary))"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: step.delay,
                type: "spring",
                stiffness: 200
              }}
            />
            {/* Pulse ring */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r="10"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              opacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ 
                duration: 0.8, 
                delay: step.delay + 0.3,
                ease: "easeOut"
              }}
            />
            {/* Step number */}
            <motion.text
              x={step.x}
              y={step.y + 1}
              textAnchor="middle"
              className="text-[4px] font-bold fill-primary-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: step.delay + 0.5 }}
            >
              {index + 1}
            </motion.text>
          </motion.g>
        ))}
      </svg>

      {/* Step labels */}
      {learningSteps.map((step, index) => (
        <motion.div
          key={`label-${step.id}`}
          className="absolute text-xs"
          style={{
            left: `${step.x}%`,
            top: step.y > 30 ? `${step.y - 12}%` : `${step.y + 8}%`,
            transform: 'translateX(-50%)'
          }}
          initial={{ opacity: 0, y: step.y > 30 ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: step.delay + 0.7 }}
        >
          <div className="text-center">
            <div className="font-semibold text-primary text-[10px]">{step.label}</div>
            <div className="text-muted-foreground text-[8px] mt-1">{step.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};