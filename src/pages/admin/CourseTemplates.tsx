import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, Copy, Play, BookOpen, FileText, Video } from "lucide-react";

const mockTemplates = [
  {
    id: "1",
    title: "Beginner English Fundamentals",
    description: "Essential English basics for new learners",
    modules: 8,
    lessons: 32,
    difficulty: "Beginner",
    lastUpdated: "2024-01-15",
    status: "published",
    enrollments: 24
  },
  {
    id: "2", 
    title: "Business English Communication",
    description: "Professional English for workplace scenarios",
    modules: 6,
    lessons: 28,
    difficulty: "Intermediate",
    lastUpdated: "2024-01-10",
    status: "draft",
    enrollments: 0
  },
  {
    id: "3",
    title: "IELTS Preparation Course",
    description: "Comprehensive IELTS exam preparation",
    modules: 10,
    lessons: 45,
    difficulty: "Advanced",
    lastUpdated: "2024-01-08",
    status: "published",
    enrollments: 12
  }
];

export const CourseTemplates = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
        Published
      </Badge>
    ) : (
      <Badge variant="secondary">
        Draft
      </Badge>
    );
  };

  const getDifficultyBadge = (difficulty: string) => {
    const difficultyColors = {
      Beginner: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      Advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    };

    return (
      <Badge variant="outline" className={difficultyColors[difficulty as keyof typeof difficultyColors]}>
        {difficulty}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Course Templates</h1>
          <p className="text-muted-foreground">
            Create and manage English course templates for tutees
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
          </CardContent>
        </Card>
      </div>

      {/* Create Template Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Course Template</CardTitle>
            <CardDescription>
              Build a new English course template that can be deployed to tutees
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="e.g., Advanced Grammar Mastery" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <select className="w-full p-2 border rounded-md">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe what students will learn in this course..." />
            </div>
            <div className="flex gap-2">
              <Button>
                <BookOpen className="h-4 w-4 mr-2" />
                Create Template
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Templates Table */}
      <Card>
        <CardHeader>
          <CardTitle>Course Templates</CardTitle>
          <CardDescription>
            Manage your English course templates and deploy them to students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Modules</TableHead>
                <TableHead>Lessons</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Enrollments</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{template.title}</div>
                      <div className="text-sm text-muted-foreground">{template.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getDifficultyBadge(template.difficulty)}</TableCell>
                  <TableCell>{template.modules}</TableCell>
                  <TableCell>{template.lessons}</TableCell>
                  <TableCell>{getStatusBadge(template.status)}</TableCell>
                  <TableCell>{template.enrollments}</TableCell>
                  <TableCell>{template.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Template Builder Preview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Module Builder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Drag and drop interface for building course modules
            </p>
            <Button variant="outline" className="w-full">
              Open Module Builder
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Content Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Pre-built lessons and resources for English learning
            </p>
            <Button variant="outline" className="w-full">
              Browse Library
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};