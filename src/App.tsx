import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminRoute } from "@/components/AdminRoute";
import { AppLayout } from "./components/layout/AppLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import NotFound from "./pages/NotFound";
import ModuleViewer from "./pages/ModuleViewer";
import LessonViewer from "./pages/LessonViewer";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";
import LiveSessions from "./pages/LiveSessions";
import LiveSessionViewer from "./pages/LiveSessionViewer";
import { TuteeManagement } from "./pages/admin/TuteeManagement";
import { TutorDirectory } from "./pages/admin/TutorDirectory";
import { CourseTemplateCreator } from "./pages/admin/CourseTemplateCreator";
import Team from "./pages/Team";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/team" element={<Team />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <AppLayout><Dashboard /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/modules" element={
              <ProtectedRoute>
                <AppLayout><Modules /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/modules/:moduleId" element={
              <ProtectedRoute>
                <AppLayout><ModuleViewer /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/lessons/:lessonId" element={
              <ProtectedRoute>
                <AppLayout><LessonViewer /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <AppLayout><UserProfile /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/profile/settings" element={
              <ProtectedRoute>
                <AppLayout><UserSettings /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/sessions" element={
              <ProtectedRoute>
                <AppLayout><LiveSessions /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/sessions/:sessionId" element={
              <ProtectedRoute>
                <AppLayout><LiveSessionViewer /></AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/calendar" element={
              <ProtectedRoute>
                <AppLayout><div className="lesson-content"><h1 className="text-3xl font-bold">Calendar</h1><p className="text-muted-foreground">Calendar functionality coming soon...</p></div></AppLayout>
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <AdminRoute>
                <AppLayout><Dashboard /></AppLayout>
              </AdminRoute>
            } />
            <Route path="/admin/students" element={
              <AdminRoute>
                <AppLayout><TuteeManagement /></AppLayout>
              </AdminRoute>
            } />
            <Route path="/admin/tutors" element={
              <AdminRoute>
                <AppLayout><TutorDirectory /></AppLayout>
              </AdminRoute>
            } />
            <Route path="/admin/courses/create" element={
              <AdminRoute>
                <AppLayout><CourseTemplateCreator /></AppLayout>
              </AdminRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
