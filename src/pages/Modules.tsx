import { useEffect, useState } from "react";
import { Search, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
  lesson_count?: number;
  total_duration?: number;
}

export default function Modules() {
  const [modules, setModules] = useState<Module[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      // First, get the single English course
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .select('id')
        .eq('status', 'published')
        .single();

      if (courseError || !course) {
        console.error('Error fetching course:', courseError);
        return;
      }

      // Then get modules for that course
      const { data: modulesData, error: modulesError } = await supabase
        .from('modules')
        .select(`
          id,
          title,
          description,
          order_index,
          lessons (
            id,
            duration_minutes
          )
        `)
        .eq('course_id', course.id)
        .order('order_index');

      if (modulesError) {
        console.error('Error fetching modules:', modulesError);
        return;
      }

      // Process modules with lesson data
      const processedModules = modulesData?.map(module => ({
        ...module,
        lesson_count: module.lessons?.length || 0,
        total_duration: module.lessons?.reduce((total, lesson) => 
          total + (lesson.duration_minutes || 0), 0) || 0
      })) || [];

      setModules(processedModules);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredModules = modules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModuleClick = (moduleId: string) => {
    navigate(`/modules/${moduleId}`);
  };

  if (loading) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading modules...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-content space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">English Learning Modules</h1>
          <p className="text-muted-foreground mt-1">
            Master English through structured learning modules
          </p>
        </div>
        
      </div>

      {/* Course Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Complete English Language Learning Program
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Master English from fundamentals to advanced concepts with interactive lessons, 
            real-world examples, and practical exercises designed for effective learning.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {modules.length} modules
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {Math.round(modules.reduce((total, module) => total + (module.total_duration || 0), 0) / 60)} hours total
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search modules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Modules Grid */}
      {filteredModules.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredModules.map((module) => (
            <Card 
              key={module.id} 
              className="hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => handleModuleClick(module.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                    <Badge variant="secondary">
                      Module {module.order_index}
                    </Badge>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {module.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {module.lesson_count} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {Math.round((module.total_duration || 0) / 60)} hours
                  </span>
                </div>

                <Button 
                  className="w-full mt-4" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModuleClick(module.id);
                  }}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center py-8">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No modules found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search terms" : "No modules available"}
            </p>
            {searchTerm && (
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}