import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Volume2,
  Save,
  Upload,
  Eye,
  Globe,
  Settings
} from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const UserSettings = () => {
  const { profile, loading, updateRole } = useUserProfile();
  const [isUpdatingRole, setIsUpdatingRole] = useState(false);
  const { toast } = useToast();
  
  // Only show developer tab in development environment
  const isDev = import.meta.env.DEV;

  const handleRoleChange = async (newRole: string) => {
    setIsUpdatingRole(true);
    try {
      await updateRole(newRole);
      toast({
        title: "Role Updated",
        description: `Your role has been changed to ${newRole}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update role. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingRole(false);
    }
  };

  return (
    <div className="lesson-content">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and accessibility preferences
            </p>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className={`grid w-full h-auto p-1 ${isDev ? 'grid-cols-5' : 'grid-cols-4'}`}>
              <TabsTrigger value="profile" className="flex items-center justify-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center justify-center gap-2 text-sm">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center justify-center gap-2 text-sm">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center justify-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
              {isDev && (
                <TabsTrigger value="developer" className="flex items-center justify-center gap-2 text-sm">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Developer</span>
                </TabsTrigger>
              )}
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="text-2xl">YN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Recommended: Square image, at least 256x256px
                      </p>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your First Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your Last Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(000) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself... (this is demo content)"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">Sample field for demonstration purposes</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america-new-york">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-new-york">Eastern Time (ET)</SelectItem>
                        <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                        <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                        <SelectItem value="america-los-angeles">Pacific Time (PT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>


            {/* Notification Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Course Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        New lessons and course announcements
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Live Session Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications before scheduled sessions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Achievement Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        When you complete courses or earn badges
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Progress Summary</Label>
                      <p className="text-sm text-muted-foreground">
                        Your learning progress and goals
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Study Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Daily reminders to continue learning
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Assignment Deadlines</Label>
                      <p className="text-sm text-muted-foreground">
                        Upcoming assignment due dates
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Color Theme</Label>
                    <Select defaultValue="light">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow others to see your profile
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Learning Progress</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your course progress publicly
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Analytics & Performance</Label>
                      <p className="text-sm text-muted-foreground">
                        Help improve the platform with usage data
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>

                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    Account deletion is permanent and cannot be undone. All your data will be removed.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Developer Settings - Only visible in development */}
            {isDev && (
              <TabsContent value="developer" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Developer Settings
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Development-only tools for testing and debugging. Not available in production.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Current Role Display */}
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Current Role</h4>
                          <p className="text-sm text-muted-foreground">
                            Your current user role in the system
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            {loading ? 'Loading...' : profile?.role || 'No role'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Role Management */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Change Role</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Switch between different user roles to test functionality. This change is permanent.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {['student', 'tutor', 'admin'].map((role) => (
                          <AlertDialog key={role}>
                            <AlertDialogTrigger asChild>
                              <Button 
                                variant={profile?.role === role ? "default" : "outline"}
                                disabled={isUpdatingRole || profile?.role === role}
                                className="w-full justify-start"
                              >
                                <div className="text-left">
                                  <div className="font-medium capitalize">{role}</div>
                                  <div className="text-xs opacity-70">
                                    {role === 'student' && 'Basic user access'}
                                    {role === 'tutor' && 'Teaching capabilities'}
                                    {role === 'admin' && 'Full system access'}
                                  </div>
                                </div>
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Change Role to {role.charAt(0).toUpperCase() + role.slice(1)}?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently change your user role from "{profile?.role}" to "{role}". 
                                  This action will take effect immediately and may change your access permissions.
                                  
                                  {role === 'admin' && (
                                    <div className="mt-2 p-2 bg-destructive/10 rounded text-destructive text-sm">
                                      <strong>Warning:</strong> Admin role grants full system access including user management and system settings.
                                    </div>
                                  )}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction 
                                  onClick={() => handleRoleChange(role)}
                                  disabled={isUpdatingRole}
                                >
                                  {isUpdatingRole ? 'Updating...' : 'Change Role'}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ))}
                      </div>
                    </div>

                    {/* Environment Info */}
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-start gap-2">
                        <Eye className="h-4 w-4 text-orange-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-orange-900 dark:text-orange-100">Development Mode</h4>
                          <p className="text-sm text-orange-700 dark:text-orange-300">
                            This tab is only visible in development mode and will not appear in production builds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;