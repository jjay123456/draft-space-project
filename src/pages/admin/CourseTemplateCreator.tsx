import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, BookOpen, Save, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const CourseTemplateCreator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [modules, setModules] = useState<Module[]>([]);
  const [currentModule, setCurrentModule] = useState<Partial<Module>>({});
  const [showModuleForm, setShowModuleForm] = useState(false);

  const difficultyLevels = [
    { value: "beginner", label: "Beginner", color: "bg-blue-100 text-blue-800" },
    { value: "intermediate", label: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
    { value: "advanced", label: "Advanced", color: "bg-purple-100 text-purple-800" }
  ];

  const addModule = () => {
    if (!currentModule.title || !currentModule.description) {
      toast({
        title: "Missing information",
        description: "Please fill in module title and description",
        variant: "destructive"
      });
      return;
    }

    const newModule: Module = {
      id: Date.now().toString(),
      title: currentModule.title,
      description: currentModule.description,
      lessons: []
    };

    setModules([...modules, newModule]);
    setCurrentModule({});
    setShowModuleForm(false);
    
    toast({
      title: "Module added",
      description: `Module "${newModule.title}" has been added to the course`,
    });
  };

  const saveCourseTemplate = () => {
    if (!courseTitle || !courseDescription || !difficulty || modules.length === 0) {
      toast({
        title: "Incomplete course",
        description: "Please fill in all course details and add at least one module",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would save to a database
    const courseTemplate = {
      id: Date.now().toString(),
      title: courseTitle,
      description: courseDescription,
      difficulty,
      modules,
      createdAt: new Date().toISOString()
    };

    console.log("Saving course template:", courseTemplate);
    
    toast({
      title: "Course template created",
      description: `"${courseTitle}" template has been saved successfully`,
    });

    navigate("/admin");
  };

  const getDifficultyBadge = (level: string) => {
    const diffLevel = difficultyLevels.find(d => d.value === level);
    return diffLevel ? (
      <Badge className={diffLevel.color}>{diffLevel.label}</Badge>
    ) : null;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => navigate("/admin")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Admin
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Course Template</h1>
          <p className="text-muted-foreground">
            Design a new English learning course template
          </p>
        </div>
      </div>

      {/* Course Information */}
      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
          <CardDescription>Basic details about the English course</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="courseTitle">Course Title</Label>
              <Input
                id="courseTitle"
                placeholder="e.g., Business English Fundamentals"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="courseDescription">Course Description</Label>
            <Textarea
              id="courseDescription"
              placeholder="Describe what students will learn in this course..."
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Modules Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>Add learning modules to structure the course</CardDescription>
            </div>
            <Button onClick={() => setShowModuleForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Module
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Module Form */}
          {showModuleForm && (
            <Card className="border-dashed">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="moduleTitle">Module Title</Label>
                  <Input
                    id="moduleTitle"
                    placeholder="e.g., Grammar Fundamentals"
                    value={currentModule.title || ""}
                    onChange={(e) => setCurrentModule({...currentModule, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moduleDescription">Module Description</Label>
                  <Textarea
                    id="moduleDescription"
                    placeholder="Describe what this module covers..."
                    value={currentModule.description || ""}
                    onChange={(e) => setCurrentModule({...currentModule, description: e.target.value})}
                    rows={2}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={addModule}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Module
                  </Button>
                  <Button variant="outline" onClick={() => setShowModuleForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Existing Modules */}
          {modules.map((module, index) => (
            <Card key={module.id}>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                    <Badge variant="outline" className="mt-2">
                      Module {index + 1}
                    </Badge>
                  </div>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}

          {modules.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No modules added yet</p>
              <p className="text-sm">Click "Add Module" to start building your course</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Course Preview */}
      {courseTitle && difficulty && (
        <Card>
          <CardHeader>
            <CardTitle>Course Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">{courseTitle}</h3>
                {getDifficultyBadge(difficulty)}
              </div>
              <p className="text-muted-foreground">{courseDescription}</p>
              <p className="text-sm text-muted-foreground">
                {modules.length} module{modules.length !== 1 ? 's' : ''} • 1-on-1 English Learning
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={saveCourseTemplate} size="lg">
          <Save className="h-4 w-4 mr-2" />
          Save Course Template
        </Button>
      </div>
    </div>
  );
};
