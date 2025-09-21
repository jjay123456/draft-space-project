import { useUserProfile } from "@/hooks/useUserProfile";
import StudentDashboard from "./StudentDashboard";
import TutorDashboard from "./TutorDashboard";
import { AdminDashboard } from "./admin/AdminDashboard";

export default function Dashboard() {
  const { profile, loading } = useUserProfile();

  if (loading) {
    return (
      <div className="lesson-content flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Role-based dashboard rendering
  const userRole = profile?.role;
  
  if (userRole === 'admin') {
    return <AdminDashboard />;
  } else if (userRole === 'tutor') {
    return <TutorDashboard />;
  } else {
    // Default to student dashboard for 'student' role or no role
    return <StudentDashboard />;
  }
}