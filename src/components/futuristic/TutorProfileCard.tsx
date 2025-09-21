import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Calendar, Mail, Star } from 'lucide-react';
import SkillMeter from './SkillMeter';
import GlowButton from './GlowButton';

interface TutorProfileCardProps {
  tutor: {
    id: string;
    name: string;
    email: string;
    specializations: string[];
    students: Array<{ name: string; level: string; nextSession: string }>;
    availability: string;
    status: 'Available' | 'Busy' | 'Offline';
  };
}

const TutorProfileCard = ({ tutor }: TutorProfileCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: 'Communication', percentage: 95 },
    { name: 'Teaching', percentage: 88 },
    { name: 'Technology', percentage: 92 },
  ];

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    if (!showSkills) {
      setTimeout(() => setShowSkills(true), 300);
    } else {
      setShowSkills(false);
    }
  };

  return (
    <Card 
      className={`
        glass-panel neon-border hover-scale cursor-pointer 
        transition-all duration-500 ease-out
        ${isExpanded ? 'row-span-2' : ''}
      `}
      onClick={handleCardClick}
    >
      <CardContent className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-16 h-16 neon-border">
            <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
              {tutor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="font-bold text-lg glow-text mb-2">
              {tutor.name}
            </h3>
            
            <Badge 
              variant={tutor.status === 'Available' ? 'default' : 'secondary'}
              className={`
                ${tutor.status === 'Available' 
                  ? 'bg-accent text-accent-foreground shadow-accent/50' 
                  : 'bg-muted text-muted-foreground'
                } shadow-lg
              `}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${
                tutor.status === 'Available' ? 'bg-current animate-pulse' : 'bg-current'
              }`} />
              {tutor.status}
            </Badge>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap gap-2 justify-center">
            {tutor.specializations.slice(0, 3).map((spec) => (
              <Badge key={spec} variant="outline" className="text-xs border-primary/50 text-primary">
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-4 animate-fade-in">
            {/* Contact Info */}
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="w-4 h-4 mr-2" />
              {tutor.email}
            </div>
            
            <div className="text-sm text-muted-foreground">
              <strong>Availability:</strong> {tutor.availability}
            </div>

            {/* Students Count */}
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 mr-2 text-accent" />
              <span>{tutor.students.length} Active Students</span>
            </div>

            {/* Skills */}
            {showSkills && (
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-foreground">Expertise</h4>
                {skills.map((skill) => (
                  <SkillMeter
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    isVisible={showSkills}
                  />
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <GlowButton variant="primary" size="sm" className="flex-1">
                <MessageSquare className="w-4 h-4 mr-1" />
                Chat
              </GlowButton>
              <GlowButton variant="accent" size="sm" className="flex-1">
                <Calendar className="w-4 h-4 mr-1" />
                Book
              </GlowButton>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TutorProfileCard;