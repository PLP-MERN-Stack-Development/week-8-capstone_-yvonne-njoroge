import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Globe, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe that strong communities are built through genuine connections and shared purpose."
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every action on our platform is designed to create measurable, positive change in communities."
    },
    {
      icon: Globe,
      title: "Inclusive by Design",
      description: "We welcome volunteers from all backgrounds and ensure everyone can contribute meaningfully."
    },
    {
      icon: Lightbulb,
      title: "Innovation for Good",
      description: "We leverage technology to make volunteering more accessible, engaging, and effective."
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Former nonprofit director with 10+ years experience in community organizing and social impact."
    },
    {
      name: "Sam Chen",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Tech leader passionate about using innovation to solve social challenges and improve lives."
    },
    {
      name: "Maya Patel",
      role: "Head of Community",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Community builder with expertise in volunteer engagement and program development."
    },
    {
      name: "Jordan Williams",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "UX designer focused on creating accessible, inclusive experiences for social good platforms."
    }
  ];

  const stats = [
    { label: "Active Volunteers", value: "12,000+", icon: Users },
    { label: "Events Organized", value: "2,500+", icon: Target },
    { label: "Hours Contributed", value: "50,000+", icon: Heart },
    { label: "Communities Served", value: "150+", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About TribeServe</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              We're on a mission to transform how communities come together, collaborate, 
              and create lasting positive impact through the power of technology and human connection.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/register">Join Our Mission</a>
            </Button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                TribeServe exists to ignite community collaboration by connecting passionate volunteers 
                with meaningful opportunities. We believe that when people come together around shared 
                causes, they can solve any challenge and create a better world for everyone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape how we build TribeServe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    TribeServe was born from a simple observation: communities have incredible potential 
                    for positive change, but organizing collective action is often challenging and inefficient.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our founders experienced this firsthand while volunteering with various nonprofits. 
                    They saw passionate people struggling to find the right opportunities, organizers 
                    working with outdated tools, and communities missing out on the full potential 
                    of their collective impact.
                  </p>
                  <p className="text-muted-foreground">
                    We set out to build a platform that would solve these problems by making it easy 
                    for volunteers to discover opportunities, for organizers to coordinate effectively, 
                    and for communities to celebrate their achievements together.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop" 
                    alt="Community volunteers working together"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a diverse group of builders, dreamers, and community advocates united 
                by our passion for social impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-hover transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-12 text-center">
                <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Join thousands of volunteers who are already creating positive change in their communities. 
                  Whether you have an hour or a lifetime to give, there's a place for you in TribeServe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="/register">Start Volunteering</a>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                    <a href="/events">Browse Events</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;