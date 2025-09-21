import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Plus, Eye, Calendar, BookOpen } from "lucide-react";

const mockTutees = [
  {
    id: "1",
    name: "Sarah Martinez",
    email: "sarah.m@email.com",
    joinedDate: "2024-01-15",
    coursesEnrolled: 3,
    sessionsCompleted: 12,
    lastSession: "2024-01-20",
    status: "active",
    level: "Intermediate"
  },
  {
    id: "2",
    name: "Mike Roberts",
    email: "mike.r@email.com",
    joinedDate: "2024-01-10",
    coursesEnrolled: 2,
    sessionsCompleted: 8,
    lastSession: "2024-01-19",
    status: "active",
    level: "Beginner"
  },
  {
    id: "3",
    name: "Lisa Kim",
    email: "lisa.k@email.com",
    joinedDate: "2024-01-08",
    coursesEnrolled: 4,
    sessionsCompleted: 15,
    lastSession: "2024-01-18",
    status: "inactive",
    level: "Advanced"
  }
];

export const TuteeManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
        Active
      </Badge>
    ) : (
      <Badge variant="secondary">
        Inactive
      </Badge>
    );
  };

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
          <h1 className="text-3xl font-bold tracking-tight">Tutee Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor English learning students
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Tutee
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tutees by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tutees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Tutees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Sessions/Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
          </CardContent>
        </Card>
      </div>

      {/* Tutees Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Tutees</CardTitle>
          <CardDescription>
            Overview of all registered English learners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Last Session</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTutees.map((tutee) => (
                <TableRow key={tutee.id}>
                  <TableCell className="font-medium">{tutee.name}</TableCell>
                  <TableCell>{tutee.email}</TableCell>
                  <TableCell>{getLevelBadge(tutee.level)}</TableCell>
                  <TableCell>{getStatusBadge(tutee.status)}</TableCell>
                  <TableCell>{tutee.coursesEnrolled}</TableCell>
                  <TableCell>{tutee.sessionsCompleted}</TableCell>
                  <TableCell>{tutee.lastSession}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
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