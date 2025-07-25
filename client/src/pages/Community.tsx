import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Users, Calendar, Heart, Send, Plus } from "lucide-react";

const Community = () => {
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");

  const communityPosts = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      badge: "Community Champion",
      timestamp: "2 hours ago",
      content: "Just finished the beach cleanup event! Amazing to see 30+ volunteers come together. We collected over 200 pounds of trash and recyclables. Thank you to everyone who participated! 🌊♻️",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      badge: "Impact Hero",
      timestamp: "5 hours ago",
      content: "Looking for volunteers with coding experience for our upcoming Youth Coding Workshop! We need mentors to help teach basic programming to local kids aged 10-16. It's incredibly rewarding to see their excitement when they create their first program! 💻",
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      badge: "Green Guardian",
      timestamp: "1 day ago",
      content: "Huge shoutout to the community garden team! Our vegetables are thriving and we've already donated 150 pounds of fresh produce to the local food bank. Next planting session is this Saturday - join us! 🥕🥬",
      likes: 32,
      comments: 15,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Food Bank Distribution",
      date: "March 18",
      time: "2:00 PM",
      volunteers: 8,
      needed: 15
    },
    {
      id: 2,
      title: "Youth Coding Workshop",
      date: "March 22",
      time: "10:00 AM",
      volunteers: 6,
      needed: 8
    },
    {
      id: 3,
      title: "Community Garden Planting",
      date: "March 25",
      time: "9:00 AM",
      volunteers: 12,
      needed: 20
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "1,247", icon: Users },
    { label: "Events This Month", value: "89", icon: Calendar },
    { label: "Community Posts", value: "342", icon: MessageCircle },
    { label: "Hearts Given", value: "2,156", icon: Heart }
  ];

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      // Here you would typically send the post to your backend
      console.log("New post:", newPost);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Hub</h1>
          <p className="text-muted-foreground">Connect, share, and celebrate with fellow volunteers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Share with the Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePostSubmit} className="space-y-4">
                      <Textarea
                        placeholder="Share your volunteer experience, ask for help, or announce an event..."
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-end">
                        <Button type="submit" variant="hero">
                          <Send className="h-4 w-4 mr-2" />
                          Share Post
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Community Posts */}
                {communityPosts.map((post) => (
                  <Card key={post.id} className="shadow-card hover:shadow-hover transition-shadow">
                    <CardContent className="p-6">
                      {/* Post Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{post.author}</h3>
                            <Badge variant="secondary">{post.badge}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>

                      {/* Post Content */}
                      <p className="text-foreground mb-4">{post.content}</p>

                      {/* Post Image */}
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}

                      {/* Post Actions */}
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-impact">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="discussions" className="space-y-6">
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Discussion Forums Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      We're building dedicated spaces for topic-based discussions, Q&A, and community governance.
                    </p>
                    <Button variant="outline">Get Notified</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {communityStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.date} at {event.time}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {event.volunteers}/{event.needed} volunteers
                      </span>
                      <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/events">
                    <Calendar className="h-4 w-4 mr-2" />
                    Browse Events
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/events/create">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/leaderboard">
                    <Users className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;