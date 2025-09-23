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
      <button 
        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe77zVB0lEabj5X4RMu4h40teNzhMHomjXObz9oShkMcpNRYQ/viewform', '_blank')}
        className="fixed top-6 left-[calc(50%+200px)] z-50 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors bg-background/5 border border-border backdrop-blur-lg shadow-lg text-foreground/80 hover:text-primary whitespace-nowrap"
      >
        Register
      </button>
    </div>
  );
};

export default PublicNavbar;