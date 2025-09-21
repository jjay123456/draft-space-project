import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Volume2,
  Settings,
  FileText,
  Download,
  BookOpen,
  SkipForward,
  SkipBack
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";


interface Lesson {
  id: string;
  title: string;
  duration_minutes: number;
  order_index: number;
  module_id: string;
  content?: any;
}

interface Module {
  id: string;
  title: string;
  order_index: number;
}

const LessonViewer = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [module, setModule] = useState<Module | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessonData();
  }, [lessonId]);

  const fetchLessonData = async () => {
    try {
      // Fetch lesson details
      const { data: lessonData, error: lessonError } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', lessonId)
        .single();

      if (lessonError) {
        console.error('Error fetching lesson:', lessonError);
        return;
      }

      setLesson(lessonData);

      // Fetch module details
      const { data: moduleData, error: moduleError } = await supabase
        .from('modules')
        .select('*')
        .eq('id', lessonData.module_id)
        .single();

      if (moduleError) {
        console.error('Error fetching module:', moduleError);
        return;
      }

      setModule(moduleData);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const transcript = `Welcome to this English lesson. In this lesson, we'll explore fundamental English language concepts.

English is a widely spoken language used for global communication. It has a rich vocabulary and flexible grammar structure that makes it both challenging and rewarding to learn.

Let's start with the basic building blocks of English communication. Every conversation begins with understanding the sounds, words, and sentence structures that make up the language.

Throughout this lesson, we'll examine various English elements, their usage, and how they work together to create meaningful communication.`;

  const notes = [
    "English is spoken by over 1.5 billion people worldwide",
    "Practice listening and speaking daily for best results",
    "Focus on common vocabulary before advanced words",
    "Grammar provides the structure for clear communication"
  ];

  if (loading) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (!lesson || !module) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold mb-2">Lesson Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested lesson could not be found.</p>
          <Button onClick={() => navigate("/modules")}>Back to Modules</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-content space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumb-nav mb-4">
            <Link to="/modules" className="hover:underline">Learning Modules</Link>
            <ChevronRight className="h-4 w-4 breadcrumb-separator" />
            <Link to={`/modules/${module.id}`} className="hover:underline">{module.title}</Link>
            <ChevronRight className="h-4 w-4 breadcrumb-separator" />
            <span className="text-foreground">{lesson.title}</span>
          </nav>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Lesson Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Lesson {lesson.order_index}</Badge>
              <Badge variant="outline">
                <Volume2 className="h-3 w-3 mr-1" />
                Captions Available
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{lesson.title}</h1>
            <p className="text-lg text-muted-foreground">
              Learn English language concepts through interactive content and practice exercises.
            </p>
          </div>

          {/* Video Player */}
          <Card>
            <CardContent className="p-0">
              <div className="relative bg-black rounded-lg overflow-hidden">
                {/* Video placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-70" />
                    <p className="text-lg">Video Player</p>
                    <p className="text-sm opacity-70">Duration: {lesson.duration_minutes} minutes</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/30 rounded-full h-1">
                        <div className="bg-white rounded-full h-1 w-1/4"></div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Captions Area */}
              <div className="p-4 bg-muted/30 border-t">
                <p className="text-center text-sm text-muted-foreground">
                  [Captions will appear here]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lesson Content Tabs */}
          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transcript">
                <FileText className="h-4 w-4 mr-2" />
                Transcript
              </TabsTrigger>
              <TabsTrigger value="notes">
                <BookOpen className="h-4 w-4 mr-2" />
                Notes
              </TabsTrigger>
              <TabsTrigger value="resources">
                <Download className="h-4 w-4 mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="transcript" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Transcript</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    {transcript.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Transcript
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{note}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      English Learning Guide (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Practice Exercises
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Audio Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to={`/modules/${module.id}`}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back to Module
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/modules">
                    <BookOpen className="h-4 w-4 mr-2" />
                    All Modules
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Options */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Volume2 className="h-4 w-4 mr-2" />
                Caption Settings
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Playback Speed
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Large Text Mode
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Ask a Question
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Report an Issue
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Help & Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;