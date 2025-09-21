import { BookOpen, Calendar, Users, Settings, Home, Video } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Learning Modules", url: "/modules", icon: BookOpen },
  { title: "Live Sessions", url: "/sessions", icon: Video },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Profile", url: "/profile", icon: Users },
];

export const AppSidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + "/");
  
  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


      </SidebarContent>
    </Sidebar>
  );
};