import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Plus, Video, Clock, Users, Edit, Trash2 } from "lucide-react";

const mockSessions = [
  {
    id: "1",
    tutee: "Sarah Martinez",
    tutor: "John Thompson",
    title: "English Conversation Practice",
    scheduledAt: "2024-01-22 10:00 AM",
    duration: 60,
    status: "scheduled",
    zoomMeetingId: "123-456-789",
    zoomUrl: "https://zoom.us/j/123456789"
  },
  {
    id: "2",
    tutee: "Mike Roberts",
    tutor: "Emma Lewis",
    title: "Grammar Review Session",
    scheduledAt: "2024-01-22 2:00 PM",
    duration: 45,
    status: "in_progress",
    zoomMeetingId: "987-654-321",
    zoomUrl: "https://zoom.us/j/987654321"
  },
  {
    id: "3",
    tutee: "Lisa Kim",
    tutor: "David Martinez",
    title: "Pronunciation Workshop",
    scheduledAt: "2024-01-22 4:00 PM",
    duration: 30,
    status: "completed",
    zoomMeetingId: "456-789-123",
    zoomUrl: "https://zoom.us/j/456789123"
  }
];

export const SessionScheduling = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getStatusBadge = (status: string) => {
    const statusMap = {
      scheduled: { color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100", text: "Scheduled" },
      in_progress: { color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100", text: "In Progress" },
      completed: { color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100", text: "Completed" },
      cancelled: { color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100", text: "Cancelled" }
    };

    const { color, text } = statusMap[status as keyof typeof statusMap];
    return (
      <Badge variant="outline" className={color}>
        {text}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Session Scheduling</h1>
          <p className="text-muted-foreground">
            Schedule and manage Zoom sessions between tutees and tutors
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Session
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Today's Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Active Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Video className="h-4 w-4" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Calendar widget will be integrated here
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Quick Actions</h4>
                  <Button variant="outline" className="w-full">
                    View This Week
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Next Week
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sessions List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tutee</TableHead>
                    <TableHead>Tutor</TableHead>
                    <TableHead>Session</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell className="font-medium">{session.tutee}</TableCell>
                      <TableCell>{session.tutor}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{session.title}</div>
                          <div className="text-sm text-muted-foreground">
                            Meeting ID: {session.zoomMeetingId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{session.scheduledAt}</TableCell>
                      <TableCell>{session.duration}m</TableCell>
                      <TableCell>{getStatusBadge(session.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Video className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Zoom Integration Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Zoom Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Auto-Generate Meetings</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Automatically create Zoom meetings for scheduled sessions
              </p>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Meeting Templates</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Pre-configured settings for different session types
              </p>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Recording Settings</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Configure automatic recording and storage options
              </p>
              <Button variant="outline" size="sm">
                Setup
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};