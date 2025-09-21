import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff,
  Volume2,
  VolumeX,
  Settings,
  Users,
  MessageSquare,
  Hand,
  Share,
  Circle,
  PhoneOff,
  FileText,
  Send,
  MoreVertical
} from "lucide-react";

const LiveSessionViewer = () => {
  const { sessionId } = useParams();

  // Mock session data - will be replaced with real data later
  const session = {
    id: sessionId,
    title: "JavaScript Fundamentals Q&A",
    instructor: "Prof. Mike Chen",
    startTime: "2:00 PM EST",
    duration: "60 minutes",
    participants: 45,
    course: "JavaScript Fundamentals",
    status: "live"
  };

  const participants = [
    { id: "1", name: "Alex Johnson", isInstructor: false, isMuted: false, hasVideo: true },
    { id: "2", name: "Prof. Mike Chen", isInstructor: true, isMuted: false, hasVideo: true },
    { id: "3", name: "Sarah Williams", isInstructor: false, isMuted: true, hasVideo: false },
    { id: "4", name: "David Brown", isInstructor: false, isMuted: true, hasVideo: true },
    { id: "5", name: "Emma Davis", isInstructor: false, isMuted: false, hasVideo: false }
  ];

  const chatMessages = [
    { id: "1", sender: "Prof. Mike Chen", message: "Welcome everyone! We'll start with your JavaScript questions.", time: "2:02 PM", isInstructor: true },
    { id: "2", sender: "Alex Johnson", message: "Can you explain closures again?", time: "2:03 PM", isInstructor: false },
    { id: "3", sender: "Sarah Williams", message: "Great question! I was wondering the same thing.", time: "2:03 PM", isInstructor: false },
    { id: "4", sender: "Prof. Mike Chen", message: "Absolutely! Let me share my screen and show you some examples.", time: "2:04 PM", isInstructor: true }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-2rem)]">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Session Header */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">{session.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Instructor: {session.instructor}</span>
                      <Badge variant="destructive" className="animate-pulse">
                        <Circle className="h-3 w-3 mr-1 fill-current" />
                        LIVE
                      </Badge>
                      <span>{session.participants} participants</span>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm">
                    <PhoneOff className="h-4 w-4 mr-2" />
                    Leave
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Main Video */}
            <Card className="flex-1">
              <CardContent className="p-0 h-full">
                <div className="relative bg-black rounded-lg overflow-hidden h-full min-h-[400px]">
                  {/* Main presenter video */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Video className="h-16 w-16 mx-auto mb-4 opacity-70" />
                      <p className="text-lg">Prof. Mike Chen</p>
                      <p className="text-sm opacity-70">Screen sharing: JavaScript Examples</p>
                    </div>
                  </div>

                  {/* Video controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Camera className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Hand className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Participant thumbnails */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {participants.slice(0, 4).map((participant) => (
                      <div key={participant.id} className="relative">
                        <div className="w-20 h-16 bg-gray-800 rounded border-2 border-white/20 flex items-center justify-center">
                          {participant.hasVideo ? (
                            <div className="text-white text-xs text-center">
                              <Camera className="h-4 w-4 mx-auto mb-1" />
                              <div className="truncate w-full">{participant.name.split(' ')[0]}</div>
                            </div>
                          ) : (
                            <div className="text-white text-xs text-center">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-1">
                                {participant.name.charAt(0)}
                              </div>
                              <div className="truncate w-full">{participant.name.split(' ')[0]}</div>
                            </div>
                          )}
                        </div>
                        {participant.isMuted && (
                          <div className="absolute bottom-1 left-1 bg-red-500 rounded-full p-1">
                            <MicOff className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Captions */}
                <div className="p-4 bg-black/90 text-white text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      <Volume2 className="h-3 w-3 mr-1" />
                      Live Captions
                    </Badge>
                  </div>
                  <p className="leading-relaxed">
                    So let's look at closures. A closure gives you access to an outer function's scope from an inner function. 
                    In JavaScript, closures are created every time a function is created, at function creation time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Session Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Session Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Course:</span>
                    <span>{session.course}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Started:</span>
                    <span>{session.startTime}</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <FileText className="h-3 w-3" />
                    <span>Recording & Transcript Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat & Participants Tabs */}
            <Card className="flex-1">
              <Tabs defaultValue="chat" className="h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
                  <TabsTrigger value="chat">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="participants">
                    <Users className="h-4 w-4 mr-2" />
                    People ({participants.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="flex-1 flex flex-col m-4 mt-2">
                  {/* Chat messages */}
                  <div className="flex-1 space-y-3 overflow-y-auto max-h-96 mb-4">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${msg.isInstructor ? 'text-primary' : 'text-foreground'}`}>
                            {msg.sender}
                          </span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                          {msg.isInstructor && (
                            <Badge variant="secondary" className="text-xs">Instructor</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chat input */}
                  <div className="flex gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="participants" className="flex-1 m-4 mt-2">
                  <div className="space-y-2">
                    {participants.map((participant) => (
                      <div key={participant.id} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{participant.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{participant.name}</span>
                              {participant.isInstructor && (
                                <Badge variant="secondary" className="text-xs">Host</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          {participant.isMuted ? (
                            <MicOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Mic className="h-4 w-4 text-accent" />
                          )}
                          {participant.hasVideo ? (
                            <Camera className="h-4 w-4 text-accent" />
                          ) : (
                            <CameraOff className="h-4 w-4 text-muted-foreground" />
                          )}
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSessionViewer;