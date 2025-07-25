import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Trophy, 
  Users, 
  Star, 
  Target, 
  TrendingUp,
  Plus,
  Award
} from "lucide-react";

const Dashboard = () => {
  // Mock user data - in real app, this would come from authentication context
  const [user] = useState({
    name: "Alex Johnson",
    role: "volunteer" as "volunteer" | "organizer",
    points: 1250,
    rank: 15,
    completedTasks: 23,
    upcomingEvents: 3,
    badges: ["First Timer", "Team Player", "Early Bird"]
  });

  const upcomingTasks = [
    {
      id: 1,
      title: "Setup event registration table",
      event: "Community Garden Cleanup",
      dueDate: "March 15, 2024",
      priority: "high",
      status: "pending"
    },
    {
      id: 2,
      title: "Prepare coding materials",
      event: "Youth Coding Workshop", 
      dueDate: "March 18, 2024",
      priority: "medium",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Sort food donations",
      event: "Food Drive Collection",
      dueDate: "March 22, 2024",
      priority: "low",
      status: "pending"
    },
  ];

  const recentActivity = [
    "Completed task: Event setup for Community Garden Cleanup",
    "Earned badge: Team Player", 
    "Joined event: Youth Coding Workshop",
    "Completed task: Registration assistance",
    "Earned 50 points for Food Drive participation",
  ];

  const leaderboard = [
    { name: "Sarah Chen", points: 2100, rank: 1 },
    { name: "Mike Rodriguez", points: 1850, rank: 2 },
    { name: "Emma Wilson", points: 1650, rank: 3 },
    { name: "You", points: user.points, rank: user.rank },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive";
      case "medium": return "bg-impact";
      case "low": return "bg-volunteer";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-volunteer" />;
      case "in-progress": return <Clock className="h-4 w-4 text-impact" />;
      default: return <Target className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your community today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Points Earned</p>
                  <p className="text-2xl font-bold text-primary">{user.points.toLocaleString()}</p>
                </div>
                <Star className="h-8 w-8 text-celebration" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Community Rank</p>
                  <p className="text-2xl font-bold text-organizer">#{user.rank}</p>
                </div>
                <Trophy className="h-8 w-8 text-organizer" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tasks Completed</p>
                  <p className="text-2xl font-bold text-volunteer">{user.completedTasks}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-volunteer" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                  <p className="text-2xl font-bold text-impact">{user.upcomingEvents}</p>
                </div>
                <Calendar className="h-8 w-8 text-impact" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Tasks assigned to you for upcoming events</CardDescription>
                  </div>
                  {user.role === "organizer" && (
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div 
                      key={task.id}
                      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow"
                    >
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">{task.event}</p>
                        <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                      </div>
                      <Badge className={`${getPriorityColor(task.priority)} text-white`}>
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest contributions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Your Badges
                </CardTitle>
                <CardDescription>Achievements you've unlocked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {user.badges.map((badge) => (
                    <div 
                      key={badge}
                      className="p-3 rounded-lg bg-gradient-impact text-white text-center text-sm font-medium shadow-impact"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Community Leaderboard
                </CardTitle>
                <CardDescription>Top contributors this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((member, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-2 rounded ${
                        member.name === "You" ? "bg-primary/10 border border-primary/20" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-muted-foreground">
                          #{member.rank}
                        </span>
                        <span className={`text-sm ${member.name === "You" ? "font-bold text-primary" : ""}`}>
                          {member.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {member.points.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;