import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    volunteersNeeded: number;
    volunteersRegistered: number;
    organizer: string;
    image?: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const categoryColors = {
    environment: "bg-volunteer",
    education: "bg-primary",
    social: "bg-impact",
    health: "bg-organizer",
    community: "bg-celebration"
  };

  const categoryLabels = {
    environment: "Environment",
    education: "Education", 
    social: "Social Impact",
    health: "Health",
    community: "Community"
  };

  return (
    <Card className="group hover:scale-105 transition-all duration-300 overflow-hidden animate-fade-in">
      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[event.category as keyof typeof categoryColors] || 'bg-primary'}`}>
          {categoryLabels[event.category as keyof typeof categoryLabels] || event.category}
        </span>
      </div>

      {/* Event Image */}
      <div className="relative h-48 bg-gradient-card overflow-hidden">
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
            <Users className="h-12 w-12 text-white/70" />
          </div>
        )}
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {event.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-primary" />
          <span className="font-medium text-primary">
            {event.volunteersRegistered}/{event.volunteersNeeded} volunteers
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
            style={{ width: `${(event.volunteersRegistered / event.volunteersNeeded) * 100}%` }}
          />
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button variant="hero" className="w-full">
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;