import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, BookOpen } from "lucide-react";

export const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage tutees, tutors, sessions, and course templates
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tutees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tutors</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              +12% from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Templates</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              +1 new template
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Latest tutor-tutee sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah M. with John T.</p>
                  <p className="text-xs text-muted-foreground">English Conversation - Completed</p>
                </div>
                <p className="text-xs text-muted-foreground">2h ago</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mike R. with Emma L.</p>
                  <p className="text-xs text-muted-foreground">Grammar Basics - In Progress</p>
                </div>
                <p className="text-xs text-muted-foreground">Now</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Lisa K. with David M.</p>
                  <p className="text-xs text-muted-foreground">Vocabulary Building - Scheduled</p>
                </div>
                <p className="text-xs text-muted-foreground">In 1h</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Important notifications and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  New Tutor Application
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-300">
                  Review application from Maria Santos
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Session Conflict
                </p>
                <p className="text-xs text-yellow-600 dark:text-yellow-300">
                  Double booking detected for tomorrow 3 PM
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  System Update
                </p>
                <p className="text-xs text-green-600 dark:text-green-300">
                  Zoom integration updated successfully
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};