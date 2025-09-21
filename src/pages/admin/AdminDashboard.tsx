import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, BookOpen, Plus, Eye } from "lucide-react";

const tutorStudentPairs = [
  {
    id: "1",
    tutorName: "Sarah Johnson",
    studentName: "Mike Roberts",
    level: "Beginner",
    currentModule: "Grammar Basics",
    nextSession: "Today, 2:00 PM",
    status: "active"
  },
  {
    id: "2", 
    tutorName: "Emma Lewis",
    studentName: "Lisa Kim",
    level: "Advanced",
    currentModule: "Business English",
    nextSession: "Tomorrow, 10:00 AM",
    status: "active"
  },
  {
    id: "3",
    tutorName: "John Thompson", 
    studentName: "Sarah Martinez",
    level: "Intermediate",
    currentModule: "Conversation Practice",
    nextSession: "Wed, 3:00 PM",
    status: "scheduled"
  }
];

export const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">iHear Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Oversee 1-on-1 English learning sessions and course management
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Course Template
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tutor-Student Pairs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tutorStudentPairs.length}</div>
            <p className="text-xs text-muted-foreground">
              1-on-1 English Learning Sessions
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Templates</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              English learning modules
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tutors</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Qualified English tutors
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tutor-Student Pairs Management */}
      <Card>
        <CardHeader>
          <CardTitle>Active Tutor-Student Pairs</CardTitle>
          <CardDescription>Monitor 1-on-1 English learning sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tutorStudentPairs.map((pair) => (
              <div key={pair.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{pair.tutorName}</p>
                    <span className="text-muted-foreground">→</span>
                    <p className="text-sm font-medium">{pair.studentName}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {pair.level}
                    </Badge>
                    <span>{pair.currentModule}</span>
                    <span>{pair.nextSession}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={pair.status === 'active' ? 'default' : 'secondary'}>
                    {pair.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Template Management */}
      <Card>
        <CardHeader>
          <CardTitle>Course Template Management</CardTitle>
          <CardDescription>Create and manage English learning modules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">English Course Templates</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create structured English learning modules for different difficulty levels. 
              Templates can be assigned to tutor-student pairs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                Manage Templates
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};