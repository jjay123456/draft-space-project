import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Search,
  Filter,
  Volume2,
  FileText,
  MapPin,
  Plus
} from "lucide-react";

const LiveSessions = () => {
  // Mock session data - will be replaced with real data later
  const upcomingSessions = [
    {
      id: "1",
      title: "JavaScript Fundamentals Q&A",
      instructor: "Prof. Mike Chen",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "45 minutes",
      course: "JavaScript Fundamentals",
      type: "1-on-1 Session",
      status: "upcoming"
    },
    {
      id: "2",
      title: "Web Accessibility Best Practices",
      instructor: "Dr. Sarah Johnson",
      date: "2024-01-16",
      time: "10:00 AM EST",
      duration: "45 minutes",
      course: "Web Development",
      type: "1-on-1 Session",
      status: "upcoming"
    },
    {
      id: "3",
      title: "HTML & CSS Practice Session",
      instructor: "Lisa Rodriguez",
      date: "2024-01-17",
      time: "3:00 PM EST",
      duration: "45 minutes",
      course: "HTML & CSS",
      type: "1-on-1 Session",
      status: "upcoming"
    }
  ];

  const pastSessions = [
    {
      id: "4",
      title: "Introduction to React",
      instructor: "Dr. Sarah Johnson",
      date: "2024-01-10",
      time: "2:00 PM EST",
      duration: "75 minutes",
      participants: 52,
      course: "React Development",
      type: "Workshop",
      status: "completed",
      recording: true
    },
    {
      id: "5",
      title: "CSS Grid Layout Workshop",
      instructor: "Prof. Mike Chen",
      date: "2024-01-08",
      time: "11:00 AM EST",
      duration: "60 minutes",
      participants: 38,
      course: "CSS Advanced",
      type: "Workshop",
      status: "completed",
      recording: true
    }
  ];

  const SessionCard = ({ session, showJoinButton = false }: { session: any, showJoinButton?: boolean }) => (
    <Card className="course-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant={session.status === 'upcoming' ? 'default' : 'secondary'}>
                  {session.type}
                </Badge>
                {session.recording && (
                  <Badge variant="outline">
                    <Video className="h-3 w-3 mr-1" />
                    Recording Available
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold">{session.title}</h3>
              <p className="text-muted-foreground">{session.course}</p>
            </div>
            {showJoinButton && (
              <Button asChild>
                <Link to={`/sessions/${session.id}`}>
                  {session.status === 'upcoming' ? 'Join Session' : 'View Recording'}
                </Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{session.date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{session.time}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{session.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{session.instructor}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Volume2 className="h-3 w-3 mr-1" />
                Live Captions
              </Badge>
              <Badge variant="outline" className="text-xs">
                <FileText className="h-3 w-3 mr-1" />
                Transcript
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="lesson-content">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Live Sessions</h1>
            <p className="text-lg text-muted-foreground">
              Join interactive learning sessions with real-time captions and accessibility support
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Request Session
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search sessions..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Session Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
          </TabsList>

          {/* Upcoming Sessions */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {upcomingSessions.map((session) => (
                <SessionCard key={session.id} session={session} showJoinButton />
              ))}
            </div>
            
            {upcomingSessions.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Sessions</h3>
                  <p className="text-muted-foreground mb-4">
                    Check back later for new session announcements
                  </p>
                  <Button variant="outline">
                    Browse Courses for Sessions
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Recordings */}
          <TabsContent value="recordings" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {pastSessions.map((session) => (
                <SessionCard key={session.id} session={session} showJoinButton />
              ))}
            </div>
          </TabsContent>

          {/* My Schedule */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>This Week's Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingSessions.slice(0, 2).map((session) => (
                        <div key={session.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {new Date(session.date).getDate()}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(session.date).toLocaleDateString('en', { month: 'short' })}
                            </div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <h4 className="font-medium">{session.title}</h4>
                            <p className="text-sm text-muted-foreground">{session.time}</p>
                            <p className="text-xs text-muted-foreground">{session.instructor}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Add to Calendar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Sessions Attended</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">8</div>
                      <div className="text-sm text-muted-foreground">Hours of Live Learning</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning">3</div>
                      <div className="text-sm text-muted-foreground">Upcoming This Week</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Session Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Set Timezone
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Notification Settings
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Caption Preferences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LiveSessions;