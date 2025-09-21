import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Mail, Phone, Calendar, Star } from "lucide-react";

const mockTutors = [
  {
    id: "1",
    name: "John Thompson",
    email: "john.t@email.com",
    phone: "+1 (555) 123-4567",
    specializations: ["Conversation", "Grammar", "Business English"],
    hourlyRate: 45,
    rating: 4.8,
    sessionsCompleted: 156,
    availability: "Mon-Fri 9AM-5PM EST",
    status: "active",
    bio: "Experienced English teacher with 8 years in ESL instruction."
  },
  {
    id: "2",
    name: "Emma Lewis",
    email: "emma.l@email.com",
    phone: "+1 (555) 234-5678",
    specializations: ["Pronunciation", "IELTS Prep", "Academic Writing"],
    hourlyRate: 50,
    rating: 4.9,
    sessionsCompleted: 203,
    availability: "Tue-Sat 2PM-10PM EST",
    status: "active",
    bio: "IELTS specialist with a master's degree in Applied Linguistics."
  },
  {
    id: "3",
    name: "David Martinez",
    email: "david.m@email.com",
    phone: "+1 (555) 345-6789",
    specializations: ["Kids English", "Beginner Friendly", "Games"],
    hourlyRate: 35,
    rating: 4.7,
    sessionsCompleted: 89,
    availability: "Mon-Wed 6PM-9PM EST",
    status: "busy",
    bio: "Patient tutor specializing in teaching English to children and beginners."
  }
];

export const TutorDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    const statusMap = {
      active: { color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100", text: "Active" },
      busy: { color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100", text: "Busy" },
      inactive: { color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100", text: "Inactive" }
    };

    const { color, text } = statusMap[status as keyof typeof statusMap];
    return (
      <Badge variant="outline" className={color}>
        {text}
      </Badge>
    );
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tutor Directory</h1>
          <p className="text-muted-foreground">
            Manage external English tutors and their information
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
              placeholder="Search tutors by name, specialization, or availability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tutors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Tutors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42</div>
          </CardContent>
        </Card>
      </div>

      {/* Tutors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockTutors.map((tutor) => (
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
                    <div className="flex items-center space-x-1 mt-1">
                      {getRatingStars(tutor.rating)}
                      <span className="text-sm text-muted-foreground ml-1">
                        {tutor.rating} ({tutor.sessionsCompleted} sessions)
                      </span>
                    </div>
                  </div>
                </div>
                {getStatusBadge(tutor.status)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{tutor.bio}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{tutor.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{tutor.phone}</span>
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

              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold">${tutor.hourlyRate}/hr</span>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button size="sm">
                    Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};