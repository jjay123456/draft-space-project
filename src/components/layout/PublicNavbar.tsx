import { Home, Users, HelpCircle, MessageSquare, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const PublicNavbar = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Team', url: '/team', icon: Users },
    { name: 'Learn More', url: '/how-it-works', icon: HelpCircle },
    { name: 'Testimonials', url: '/testimonials', icon: MessageSquare },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return <NavBar items={navItems} />;
};

export default PublicNavbar;