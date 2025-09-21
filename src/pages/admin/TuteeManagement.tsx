import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Eye, Calendar, BookOpen, MessageSquare } from "lucide-react";

const tutorStudentPairs = [
  {
    id: "1",
    tutorName: "Sarah Johnson",
    studentName: "Mike Roberts",
    level: "Beginner",
    currentModule: "Grammar Basics",
    nextSession: "Today, 2:00 PM",
    zoomLink: "https://zoom.us/j/123456789",
    chatActive: true
  },
  {
    id: "2", 
    tutorName: "Emma Lewis",
    studentName: "Lisa Kim",
    level: "Advanced", 
    currentModule: "Business English",
    nextSession: "Tomorrow, 10:00 AM",
    zoomLink: "https://zoom.us/j/987654321",
    chatActive: false
  },
  {
    id: "3",
    tutorName: "John Thompson",
    studentName: "Sarah Martinez", 
    level: "Intermediate",
    currentModule: "Conversation Practice",
    nextSession: "Wed, 3:00 PM",
    zoomLink: "https://zoom.us/j/456789123",
    chatActive: false
  }
];

export const TuteeManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getLevelBadge = (level: string) => {
    const levelColors = {
      Beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100", 
      Advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    };

    return (
      <Badge variant="outline" className={levelColors[level as keyof typeof levelColors]}>
        {level}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
          <p className="text-muted-foreground">
            Monitor 1-on-1 English learning progress and tutor-student pairs
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Student-Tutor Pair
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by student name, tutor, or module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Pairs Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Active Tutor-Student Pairs</CardTitle>
          <CardDescription>
            Monitor active 1-on-1 English learning sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tutor → Student</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Current Module</TableHead>
                <TableHead>Next Session</TableHead>
                <TableHead>Chat Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tutorStudentPairs.map((pair) => (
                <TableRow key={pair.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{pair.tutorName}</span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-medium">{pair.studentName}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getLevelBadge(pair.level)}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{pair.currentModule}</Badge>
                  </TableCell>
                  <TableCell>{pair.nextSession}</TableCell>
                  <TableCell>
                    {pair.chatActive ? (
                      <Badge className="bg-green-100 text-green-800">
                        Chat Active
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        Outside Window
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="View Calendar">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Chat Logs">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Course Progress">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};