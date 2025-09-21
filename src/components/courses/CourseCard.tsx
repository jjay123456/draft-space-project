import { Clock, Users, Star, Volume2, FileText } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    students: number;
    rating: number;
    level: string;
    image: string;
    hasCaption: boolean;
    hasTranscript: boolean;
    category: string;
  };
  onStartCourse?: (courseId: string) => void;
}

export const CourseCard = ({ course, onStartCourse }: CourseCardProps) => {
  return (
    <Card className="course-card h-full flex flex-col group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={course.image} 
            alt={`${course.title} course thumbnail`}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {course.hasCaption && (
              <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                <Volume2 className="h-3 w-3 mr-1" />
                Captions
              </Badge>
            )}
            {course.hasTranscript && (
              <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                <FileText className="h-3 w-3 mr-1" />
                Transcript
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/90">
              {course.level}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{course.category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>by {course.instructor}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.students} students
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onStartCourse?.(course.id)}
          variant="default"
        >
          Start Course
        </Button>
      </CardFooter>
    </Card>
  );
};