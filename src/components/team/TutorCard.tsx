import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface TutorCardProps {
  tutor: {
    id: number;
    name: string;
    grade: string;
    languages: string;
    focus: string;
    style: string;
    hobbies: string;
    imageUrl: string;
  };
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 h-64"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`
          relative w-full h-full transition-transform duration-700 ease-out
          ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <Card 
          className="absolute inset-0 rounded-2xl border border-border/20 bg-card shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Avatar className="w-20 h-20 mb-4 ring-2 ring-border/10">
            <AvatarImage src={tutor.imageUrl} alt={tutor.name} className="object-cover" />
            <AvatarFallback className="text-lg font-medium bg-muted text-muted-foreground">
              {tutor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-foreground text-center">
            {tutor.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Grade {tutor.grade}
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {tutor.languages}
          </p>
        </Card>

        {/* Back Side - Desktop Only */}
        <Card 
          className="absolute inset-0 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 shadow-md p-6 flex flex-col justify-center items-center text-center hidden md:flex overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-base font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
            {tutor.name}
          </h3>
          <div className="text-xs text-foreground/80 space-y-2">
            <div>
              <span className="font-semibold text-primary">Focus:</span>
              <p className="leading-relaxed mt-1">{tutor.focus}</p>
            </div>
            <div>
              <span className="font-semibold text-primary">Style:</span>
              <p className="leading-relaxed mt-1">{tutor.style}</p>
            </div>
            <div>
              <span className="font-semibold text-primary">Hobbies:</span>
              <p className="leading-relaxed mt-1">{tutor.hobbies}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TutorCard;