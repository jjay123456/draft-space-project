import { useState } from "react";
import { Calendar, Users, MessageSquare, Video, Plus, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUserProfile } from "@/hooks/useUserProfile";

const myStudents = [
  {
    id: "1",
    name: "Sarah Martinez",
    level: "Intermediate",
    nextSession: "Today, 2:00 PM",
    module: "Conversation Practice",
    zoomLink: "https://zoom.us/j/123456789",
    canChat: true,
    lastActive: "30 mins ago"
  },
  {
    id: "2", 
    name: "Mike Roberts",
    level: "Beginner",
    nextSession: "Tomorrow, 10:00 AM",
    module: "Grammar Basics",
    zoomLink: "https://zoom.us/j/987654321",
    canChat: false,
    lastActive: "2 hours ago"
  },
  {
    id: "3",
    name: "Lisa Kim", 
    level: "Advanced",
    nextSession: "Wed, 3:00 PM",
    module: "Business English",
    zoomLink: "https://zoom.us/j/456789123",
    canChat: false,
    lastActive: "1 day ago"
  }
];

export default function TutorDashboard() {
  const { profile, loading } = useUserProfile();
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

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

  const getLevelBadge = (level: string) => {
    const colors = {
      Beginner: "bg-blue-100 text-blue-800",
      Intermediate: "bg-yellow-100 text-yellow-800", 
      Advanced: "bg-purple-100 text-purple-800"
    };
    return (
      <Badge className={colors[level as keyof typeof colors]}>
        {level}
      </Badge>
    );
  };

  return (
    <div className="lesson-content space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {getDisplayName()}!</h1>
          <p className="text-muted-foreground mt-1">Manage your English teaching sessions</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Session
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              My Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{myStudents.length}</div>
            <p className="text-xs text-muted-foreground">Active 1-on-1 learners</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Scheduled sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Chat Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {myStudents.filter(s => s.canChat).length}
            </div>
            <p className="text-xs text-muted-foreground">Students in chat window</p>
          </CardContent>
        </Card>
      </div>

      {/* Students Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            My English Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Next Session</TableHead>
                <TableHead>Current Module</TableHead>
                <TableHead>Zoom Link</TableHead>
                <TableHead>Chat</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{getLevelBadge(student.level)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {student.nextSession}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{student.module}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <a href={student.zoomLink} target="_blank" rel="noopener noreferrer">
                        <Video className="h-4 w-4 mr-1" />
                        Join
                      </a>
                    </Button>
                  </TableCell>
                  <TableCell>
                    {student.canChat ? (
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Outside window
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Session Scheduling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Schedule Your Sessions</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Set up 1-on-1 English learning sessions with your students. 
              Chat is available 30 minutes before and after each session.
            </p>
            <div className="flex gap-4 justify-center">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Session
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}