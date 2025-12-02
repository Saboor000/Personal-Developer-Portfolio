"use client";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LayoutDashboard,
  BookOpen,
  Layers,
  User,
  MessageCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const applicationItems = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const servicesItems = [
  { title: "Web Development", url: "#", icon: Layers },
  { title: "UI/UX Design", url: "#", icon: LayoutDashboard },
  { title: "Consulting", url: "#", icon: MessageCircle },
];

const learningItems = [
  { title: "React Tutorials", url: "#", icon: BookOpen },
  { title: "Next.js Guide", url: "#", icon: BookOpen },
  { title: "Tailwind CSS", url: "#", icon: BookOpen },
];

const userItems = [
  { title: "Profile", url: "#", icon: User },
  { title: "Messages", url: "#", icon: MessageCircle },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const renderMenuItems = (items: typeof applicationItems) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <a href={item.url} className="flex items-center gap-2">
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar>
      <SidebarContent>
        {/* Application Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(applicationItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Services Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(servicesItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Learning Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Learning</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(learningItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section */}
        <SidebarGroup>
          <SidebarGroupLabel>User</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(userItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
