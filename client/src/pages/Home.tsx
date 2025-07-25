import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import ImpactStat from "@/components/ImpactStat";
import { Users, Calendar, Heart, Zap, Globe, Award, ArrowRight, CheckCircle, Target, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Home = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Garden Cleanup",
      description: "Join us to beautify our local community garden and plant new flowers for spring.",
      date: "March 15, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Riverside Community Garden",
      volunteersRegistered: 12,
      volunteersNeeded: 20,
      category: "environment",
      organizer: "Green Thumb Initiative",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop"
    },
    {
      id: 2, 
      title: "Youth Coding Workshop",
      description: "Teach basic programming skills to local youth and inspire the next generation of developers.",
      date: "March 18, 2024",
      time: "2:00 PM - 5:00 PM", 
      location: "Tech Community Center",
      volunteersRegistered: 8,
      volunteersNeeded: 15,
      category: "education",
      organizer: "Code for Community",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Food Drive Collection",
      description: "Help collect and sort donations for local families in need this month.",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Central Food Bank",
      volunteersRegistered: 25,
      volunteersNeeded: 30,
      category: "social",
      organizer: "Hearts for Hunger",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
/>
<div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

        <div className="relative container mx-auto px-4 lg:px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Igniting Community
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-celebration to-impact"> Collaboration</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/100 mb-8 animate-fade-in max-w-3xl mx-auto">
              Unite volunteers, organizers, and groups around shared causes through smart coordination and gamified engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button variant="celebration" size="xl" asChild>
                <Link to="/register" className="group">
                  Join TribeServe Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How TribeServe Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to make a meaningful impact in your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="h-20 w-20 rounded-full bg-gradient-hero mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Connect</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of volunteers and organizers passionate about making a difference.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="h-20 w-20 rounded-full bg-gradient-hero mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Contribute</h3>
              <p className="text-muted-foreground">
                Find events that match your skills and interests, or create your own community initiatives.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="h-20 w-20 rounded-full bg-gradient-hero mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Celebrate</h3>
              <p className="text-muted-foreground">
                Track your impact, earn badges, and celebrate achievements with your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Community Impact</h2>
            <p className="text-xl text-muted-foreground">
              Together, we're making a real difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactStat
              icon={<Users className="h-8 w-8" />}
              number="2,847"
              label="Active Volunteers"
              trend="+12% this month"
              color="volunteer"
            />
            <ImpactStat
              icon={<Calendar className="h-8 w-8" />}
              number="156"
              label="Events Completed"
              trend="+8 this week"
              color="primary"
            />
            <ImpactStat
              icon={<Heart className="h-8 w-8" />}
              number="12,450"
              label="Lives Impacted"
              trend="+156 this week"
              color="impact"
            />
            <ImpactStat
              icon={<Award className="h-8 w-8" />}
              number="8,920"
              label="Hours Volunteered"
              trend="+245 this week"
              color="celebration"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground">
                Join these amazing community initiatives
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of volunteers and organizers who are already creating positive change in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register?role=volunteer">
                  Become a Volunteer
                </Link>
              </Button>
              <Button variant="organizer" size="xl" asChild>
                <Link to="/register?role=organizer">
                  Become an Organizer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;