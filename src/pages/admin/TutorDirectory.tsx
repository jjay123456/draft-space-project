import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Mail, MessageSquare, Calendar, BookOpen, Video } from "lucide-react";

const tutorsWithStudents = [
  {
    id: "1",
    name: "John Thompson", 
    email: "john.t@email.com",
    specializations: ["Conversation", "Grammar", "Business English"],
    students: [
      { name: "Sarah Martinez", level: "Intermediate", nextSession: "Today, 2:00 PM" }
    ],
    availability: "Mon-Fri 9AM-5PM EST",
    status: "active"
  },
  {
    id: "2",
    name: "Emma Lewis",
    email: "emma.l@email.com", 
    specializations: ["Pronunciation", "IELTS Prep", "Academic Writing"],
    students: [
      { name: "Mike Roberts", level: "Beginner", nextSession: "Tomorrow, 10:00 AM" },
      { name: "Lisa Kim", level: "Advanced", nextSession: "Wed, 3:00 PM" }
    ],
    availability: "Tue-Sat 2PM-10PM EST", 
    status: "active"
  },
  {
    id: "3",
    name: "David Martinez",
    email: "david.m@email.com",
    specializations: ["Kids English", "Beginner Friendly"],
    students: [],
    availability: "Mon-Wed 6PM-9PM EST",
    status: "available"
  }
];

export const TutorDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    const statusMap = {
      active: { color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100", text: "Active" },
      available: { color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100", text: "Available" },
      busy: { color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100", text: "Busy" },
    };

    const { color, text } = statusMap[status as keyof typeof statusMap];
    return (
      <Badge variant="outline" className={color}>
        {text}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tutor Directory</h1>
          <p className="text-muted-foreground">
            Manage English tutors and their student assignments
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Tutor
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tutors by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tutors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorsWithStudents.map((tutor) => (
          <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {tutor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{tutor.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {tutor.students.length} student{tutor.students.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </div>
                </div>
                {getStatusBadge(tutor.status)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{tutor.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{tutor.availability}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {tutor.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              {tutor.students.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Current Students:</p>
                  <div className="space-y-2">
                    {tutor.students.map((student, index) => (
                      <div key={index} className="text-sm p-2 bg-muted/50 rounded">
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>{student.level}</span>
                          <span>{student.nextSession}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4 mr-1" />
                  Sessions
                </Button>
                <Button size="sm">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Assign
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};