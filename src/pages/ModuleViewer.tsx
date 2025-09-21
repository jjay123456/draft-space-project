import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Clock, 
  FileText,
  Volume2,
  BookOpen
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";


interface Lesson {
  id: string;
  title: string;
  duration_minutes: number;
  order_index: number;
}

interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
}

const ModuleViewer = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<Module | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [allModules, setAllModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModuleData();
  }, [moduleId]);

  const fetchModuleData = async () => {
    try {
      // Fetch current module details
      const { data: moduleData, error: moduleError } = await supabase
        .from('modules')
        .select('*')
        .eq('id', moduleId)
        .single();

      if (moduleError) {
        console.error('Error fetching module:', moduleError);
        return;
      }

      setModule(moduleData);

      // Fetch lessons for this module
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .eq('module_id', moduleId)
        .order('order_index');

      if (lessonsError) {
        console.error('Error fetching lessons:', lessonsError);
        return;
      }

      setLessons(lessonsData || []);

      // Fetch all modules for navigation
      const { data: modulesData, error: modulesError } = await supabase
        .from('modules')
        .select('id, title, description, order_index')
        .order('order_index');

      if (modulesError) {
        console.error('Error fetching modules:', modulesError);
        return;
      }

      setAllModules(modulesData || []);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalDuration = lessons.reduce((total, lesson) => total + (lesson.duration_minutes || 0), 0);
  const estimatedTime = Math.round(totalDuration / 60) + " hours";

  if (loading) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading module...</p>
        </div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold mb-2">Module Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested module could not be found.</p>
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
            <span className="text-foreground">{module.title}</span>
          </nav>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Module Header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{module.title}</h1>
            
            <p className="text-lg text-muted-foreground">
              {module.description}
            </p>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>{lessons.length} lessons</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>Module {module.order_index}</span>
              </div>
            </div>
          </div>

          {/* Start Learning */}
          {lessons.length > 0 && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">Start Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Begin with: {lessons[0]?.title}
                    </p>
                  </div>
                  <Button asChild>
                    <Link to={`/lessons/${lessons[0]?.id}`}>
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Lessons List */}
          <Card>
            <CardHeader>
              <CardTitle>Lessons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-medium text-sm">
                      {lesson.order_index}
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{lesson.title}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{lesson.duration_minutes} min</span>
                        <div className="flex items-center gap-1">
                          <Volume2 className="h-3 w-3" />
                          <span>Captions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          <span>Transcript</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="sm"
                    asChild
                  >
                    <Link to={`/lessons/${lesson.id}`}>
                      <Play className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/modules">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Modules
                </Link>
              </Button>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Other Modules</div>
                <div className="space-y-1">
                  {allModules.map((mod) => (
                    <Button 
                      key={mod.id}
                      variant={mod.id === moduleId ? "secondary" : "ghost"} 
                      size="sm" 
                      className="w-full justify-start"
                      asChild
                    >
                      <Link to={`/modules/${mod.id}`}>
                        Module {mod.order_index}: {mod.title}
                        {mod.id === moduleId && " (Current)"}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Download Notes
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Module Transcript
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Practice Exercises
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModuleViewer;