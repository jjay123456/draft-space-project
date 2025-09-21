import { Calendar, BookOpen, Video, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useUserProfile } from "@/hooks/useUserProfile";
import { useNavigate } from "react-router-dom";

const upcomingSessions = [
  {
    id: "1",
    title: "English Conversation Practice",
    instructor: "Sarah Johnson",
    time: "Today, 2:00 PM",
    duration: "1 hour",
    participants: 24
  },
  {
    id: "2",
    title: "Grammar Q&A Session",
    instructor: "Mike Chen",
    time: "Tomorrow, 10:00 AM",
    duration: "45 min",
    participants: 18
  }
];

export default function Dashboard() {
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
          <p className="text-muted-foreground mt-1">Continue your learning journey</p>
        </div>
        
      </div>

      {/* Learning Modules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Start Learning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Complete English Language Learning Program</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Master English from fundamentals to advanced concepts with interactive lessons 
              and practical exercises designed for effective learning.
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

      {/* Upcoming Live Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Upcoming Live Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <h3 className="font-medium text-foreground">{session.title}</h3>
                <p className="text-sm text-muted-foreground">with {session.instructor}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {session.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {session.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {session.participants} joined
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Live</Badge>
                <Button size="sm" variant="outline">Join Session</Button>
              </div>
            </div>
          ))}
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
            <p className="text-sm text-muted-foreground">Browse and access all learning modules</p>
          </CardContent>
        </Card>
        
        <Card 
          className="hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => navigate("/calendar")}
        >
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-medium">View Calendar</h3>
            <p className="text-sm text-muted-foreground">Check your schedule and sessions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}