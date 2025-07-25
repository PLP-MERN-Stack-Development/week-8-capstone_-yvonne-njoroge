import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Plus, Search, Filter } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Community Garden Cleanup",
      description: "Help beautify our local community garden and prepare it for spring planting season.",
      date: "2024-03-15",
      time: "9:00 AM - 12:00 PM",
      location: "Central Community Garden",
      category: "environment",
      volunteersNeeded: 20,
      volunteersRegistered: 12,
      organizer: "Green Thumb Initiative",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Food Bank Distribution",
      description: "Pack and distribute meals to families in need throughout our community.",
      date: "2024-03-18",
      time: "2:00 PM - 6:00 PM",
      location: "Community Center",
      category: "social",
      volunteersNeeded: 15,
      volunteersRegistered: 8,
      organizer: "Hearts for Hunger",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Youth Coding Workshop",
      description: "Teach programming basics to local youth and inspire the next generation of developers.",
      date: "2024-03-22",
      time: "10:00 AM - 4:00 PM",
      location: "Public Library",
      category: "education",
      volunteersNeeded: 8,
      volunteersRegistered: 6,
      organizer: "Code for Community",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Beach Cleanup Drive",
      description: "Join us to clean up the coastline and protect marine life from pollution.",
      date: "2024-03-25",
      time: "7:00 AM - 11:00 AM",
      location: "Sunset Beach",
      category: "environment",
      volunteersNeeded: 30,
      volunteersRegistered: 18,
      organizer: "Ocean Guardians",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Community Events</h1>
            <p className="text-muted-foreground">Discover opportunities to make a difference in your community</p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <Link to="/events/create">
              <Plus className="h-5 w-5 mr-2" />
              Create Event
            </Link>
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">No events found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setFilterCategory("all");
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Events;