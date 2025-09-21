import { Search, Bell, User, Volume2, LogOut, Globe, UserCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useIsAdmin } from "@/hooks/useIsAdmin";

export const AppHeader = () => {
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAdmin } = useIsAdmin();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleProfileClick = () => {
    navigate("/user-profile");
  };

  const handleTranslationClick = () => {
    toast({
      title: "Language Changed",
      description: "界面已切换至中文 (Interface switched to Chinese)",
    });
  };

  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-4 gap-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <Volume2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">iHear</span>
        </div>
      </div>

      <div className="flex-1 flex justify-center px-8">
        <div className="relative max-w-2xl w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search modules, lessons..."
            className="pl-10 bg-secondary/50 border-border focus-visible:ring-primary"
            aria-label="Search modules and lessons"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          aria-label="Notifications"
          className="hover:bg-secondary relative"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="User profile"
              className="hover:bg-secondary"
            >
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleProfileClick}>
              <UserCircle className="h-4 w-4" />
              View Profile
            </DropdownMenuItem>
            {isAdmin && (
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/admin')}>
                <UserCircle className="h-4 w-4" />
                Admin Panel
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleTranslationClick}>
              <Globe className="h-4 w-4" />
              中文翻译
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <HelpCircle className="h-4 w-4" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};