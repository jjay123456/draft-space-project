import { Calendar, BookOpen, Video, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useNavigate } from "react-router-dom";

const upcomingOneOnOneSessions = [
  {
    id: "1",
    title: "English Conversation - Intermediate",
    tutor: "Sarah Johnson",
    time: "Today, 2:00 PM",
    duration: "60 min",
    zoomLink: "https://zoom.us/j/123456789",
    module: "Speaking Practice"
  },
  {
    id: "2",
    title: "Grammar Fundamentals - Beginner",
    tutor: "Mike Chen", 
    time: "Tomorrow, 10:00 AM",
    duration: "60 min",
    zoomLink: "https://zoom.us/j/987654321",
    module: "Grammar Essentials"
  }
];

export default function StudentDashboard() {
  const { profile, loading } = useUserProfile();
  const navigate = useNavigate();

  const getDisplayName = () => {
    if (loading) return "...";
    if (profile?.first_name) {
      return profile.first_name;
    }
    if (profile?.display_name) {
      return profile.display_name;
    }
    return "there";
  };

  return (
    <div className="lesson-content space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {getDisplayName()}!</h1>
          <p className="text-muted-foreground mt-1">Continue your English learning journey</p>
        </div>
      </div>

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Your English Learning Path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">English Language Mastery Program</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Master English through personalized 1-on-1 sessions with qualified tutors. 
              Progress through modules from beginner to advanced levels.
            </p>
            <Button 
              onClick={() => navigate("/modules")}
              className="w-full max-w-sm"
            >
              Browse Learning Modules
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming 1-on-1 Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Your Upcoming 1-on-1 Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingOneOnOneSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <h3 className="font-medium text-foreground">{session.title}</h3>
                <p className="text-sm text-muted-foreground">with {session.tutor}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {session.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {session.duration}
                  </span>
                  <span className="text-blue-600">
                    Module: {session.module}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">1-on-1</Badge>
                <Button size="sm" variant="outline">
                  Join Session
                </Button>
              </div>
            </div>
          ))}
          {upcomingOneOnOneSessions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming sessions scheduled</p>
              <p className="text-sm">Your tutor will schedule sessions for you</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          className="hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => navigate("/modules")}
        >
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium">Learning Modules</h3>
            <p className="text-sm text-muted-foreground">Access your assigned English modules</p>
          </CardContent>
        </Card>
        
        <Card 
          className="hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => navigate("/sessions")}
        >
          <CardContent className="p-6 text-center">
            <Video className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-medium">Session History</h3>
            <p className="text-sm text-muted-foreground">View past and upcoming sessions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}