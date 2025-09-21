import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Settings,
  Edit
} from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";

const UserProfile = () => {
  const { profile, loading, error } = useUserProfile();

  if (loading) {
    return (
      <div className="lesson-content">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="lesson-content">
        <div className="text-center py-8">
          <p className="text-muted-foreground">Unable to load profile information.</p>
        </div>
      </div>
    );
  }

  const displayName = profile.first_name && profile.last_name 
    ? `${profile.first_name} ${profile.last_name}` 
    : profile.display_name || "User";
  
  const initials = profile.first_name && profile.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`
    : profile.display_name?.split(' ').map(n => n[0]).join('') || "U";

  const joinDate = new Date(profile.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });


  return (
    <div className="lesson-content">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.avatar_url || ""} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-foreground">{displayName}</h1>
                    <p className="text-muted-foreground">{profile.email}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Member since {joinDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link to="/profile/settings">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/profile/settings">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-medium text-foreground">Welcome to iHear!</div>
                <div className="text-sm text-muted-foreground">Start your learning journey today</div>
              </div>
              
              <Button className="w-full" asChild>
                <Link to="/modules">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore Modules
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;