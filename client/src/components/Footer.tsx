import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">TribeServe</span>
            </div>
            <p className="text-white/70 text-sm">
              Igniting community collaboration through smart coordination and gamified engagement.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Heart className="h-4 w-4 text-impact" />
              <span>Made with love for communities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/events" className="block text-white/70 hover:text-white transition-colors">
                Browse Events
              </Link>
              <Link to="/dashboard" className="block text-white/70 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/leaderboard" className="block text-white/70 hover:text-white transition-colors">
                Leaderboard
              </Link>
              <Link to="/community" className="block text-white/70 hover:text-white transition-colors">
                Community
              </Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Involved</h3>
            <nav className="space-y-2">
              <Link to="/register?role=volunteer" className="block text-white/70 hover:text-white transition-colors">
                Become a Volunteer
              </Link>
              <Link to="/register?role=organizer" className="block text-white/70 hover:text-white transition-colors">
                Become an Organizer
              </Link>
              <Link to="/create-event" className="block text-white/70 hover:text-white transition-colors">
                Create an Event
              </Link>
              <Link to="/about" className="block text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@tribeserve.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Community Hub, Everywhere</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © 2024 TribeServe. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;