import { Home, Users, HelpCircle, MessageSquare, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";

const PublicNavbar = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Team', url: '/team', icon: Users },
    { name: 'Learn More', url: '/how-it-works', icon: HelpCircle },
    { name: 'Testimonials', url: '/testimonials', icon: MessageSquare },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return (
    <div className="flex items-center gap-4">
      <NavBar items={navItems} />
      <Button 
        asChild 
        className="fixed top-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold shadow-lg"
      >
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Register
        </a>
      </Button>
    </div>
  );
};

export default PublicNavbar;