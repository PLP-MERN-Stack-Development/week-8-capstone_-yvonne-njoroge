import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Medal, Award, Users, Calendar, Clock, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState("month");
  const [category, setCategory] = useState("all");

  const leaderboardData = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      points: 2840,
      eventsJoined: 12,
      hoursVolunteered: 48,
      rank: 1,
      badge: "Community Champion",
      trend: "+120"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      points: 2650,
      eventsJoined: 10,
      hoursVolunteered: 42,
      rank: 2,
      badge: "Impact Hero",
      trend: "+85"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      points: 2420,
      eventsJoined: 11,
      hoursVolunteered: 38,
      rank: 3,
      badge: "Green Guardian",
      trend: "+95"
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      points: 2180,
      eventsJoined: 9,
      hoursVolunteered: 35,
      rank: 4,
      badge: "Team Builder",
      trend: "+65"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      points: 1950,
      eventsJoined: 8,
      hoursVolunteered: 32,
      rank: 5,
      badge: "Rising Star",
      trend: "+78"
    }
  ];

  const topStats = [
    {
      title: "Total Active Volunteers",
      value: "1,247",
      icon: Users,
      trend: "+12%"
    },
    {
      title: "Events This Month",
      value: "89",
      icon: Calendar,
      trend: "+8%"
    },
    {
      title: "Hours Contributed",
      value: "3,456",
      icon: Clock,
      trend: "+15%"
    },
    {
      title: "Community Impact",
      value: "98%",
      icon: TrendingUp,
      trend: "+3%"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-impact" />;
      case 2:
        return <Medal className="h-6 w-6 text-volunteer" />;
      case 3:
        return <Award className="h-6 w-6 text-organizer" />;
      default:
        return <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-impact border-impact/20";
      case 2:
        return "bg-gradient-volunteer border-volunteer/20";
      case 3:
        return "bg-gradient-organizer border-organizer/20";
      default:
        return "bg-card border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Leaderboard</h1>
          <p className="text-muted-foreground">Celebrating our most dedicated volunteers and their amazing contributions</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-impact font-medium">{stat.trend} this month</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground mb-2 block">Time Period</label>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="social">Social Impact</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-impact" />
              Top Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-6">
              {leaderboardData.map((volunteer) => (
                <Card 
                  key={volunteer.id} 
                  className={`transition-all duration-200 hover:shadow-hover ${getRankStyle(volunteer.rank)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        {getRankIcon(volunteer.rank)}
                      </div>

                      {/* Avatar and Info */}
                      <div className="flex items-center gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                          <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{volunteer.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">{volunteer.badge}</Badge>
                            <span className="text-sm text-impact font-medium">+{volunteer.trend} pts</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex gap-8 text-center">
                        <div>
                          <p className="text-2xl font-bold text-foreground">{volunteer.points.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Points</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{volunteer.eventsJoined}</p>
                          <p className="text-sm text-muted-foreground">Events</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{volunteer.hoursVolunteered}</p>
                          <p className="text-sm text-muted-foreground">Hours</p>
                        </div>
                      </div>

                      {/* Mobile Stats */}
                      <div className="md:hidden text-right">
                        <p className="text-xl font-bold text-foreground">{volunteer.points.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">points</p>
                      </div>
                    </div>

                    {/* Mobile Stats Row */}
                    <div className="md:hidden mt-4 pt-4 border-t border-border">
                      <div className="flex justify-around text-center">
                        <div>
                          <p className="font-semibold text-foreground">{volunteer.eventsJoined}</p>
                          <p className="text-sm text-muted-foreground">Events</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{volunteer.hoursVolunteered}</p>
                          <p className="text-sm text-muted-foreground">Hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Want to climb the leaderboard?</h3>
            <p className="mb-6 opacity-90">Join upcoming events and start making a difference in your community</p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/events">Browse Events</a>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;