interface SkillMeterProps {
  skill: string;
  percentage: number;
  isVisible: boolean;
}

const SkillMeter = ({ skill, percentage, isVisible }: SkillMeterProps) => {
  const radius = 35;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          {/* Background circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="opacity-30"
          />
          {/* Progress circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="hsl(var(--neon-blue))"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 8px hsl(var(--neon-blue) / 0.6))',
            }}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">
            {percentage}%
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{skill}</p>
      </div>
    </div>
  );
};

export default SkillMeter;