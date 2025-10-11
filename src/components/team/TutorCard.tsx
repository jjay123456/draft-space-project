import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface TutorCardProps {
  tutor: {
    id: string;
    name: string;
    age: number;
    avatar?: string;
  };
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`
          relative w-full h-full transition-transform duration-300 transform-style-preserve-3d
          ${isFlipped ? 'rotate-y-180' : ''}
          md:hover:scale-105 hover:shadow-lg
        `}
      >
        {/* Front Side */}
        <Card className={`
          absolute inset-0 backface-hidden rounded-2xl border border-border/20 bg-card 
          shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col items-center justify-center
        `}>
          <Avatar className="w-20 h-20 mb-4 ring-2 ring-border/10">
            <AvatarImage src={tutor.avatar} alt={tutor.name} />
            <AvatarFallback className="text-lg font-medium bg-muted text-muted-foreground">
              {tutor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-foreground text-center">
            {tutor.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Age {tutor.age}
          </p>
        </Card>

        {/* Back Side - Desktop Only */}
        <Card className={`
          absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-primary/30 
          bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5
          shadow-md p-6 flex flex-col justify-center items-center text-center
          hidden md:flex
        `}>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">
            {tutor.name}
          </h3>
          <div className="text-sm text-foreground/80 space-y-3">
            <p className="leading-relaxed">
              Passionate educator dedicated to creating inclusive learning environments 
              where every student can thrive and reach their full potential.
            </p>
            <p className="text-xs text-muted-foreground">
              Specializing in personalized teaching approaches and adaptive communication methods.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TutorCard;