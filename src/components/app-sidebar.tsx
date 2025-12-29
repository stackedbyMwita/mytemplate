"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Wallet,
  ListTodo,
  LifeBuoy,
  Settings,
  LogOut,
  User,
  ChevronUp,
  User2Icon,
  Users2Icon,
  BirdIcon
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"
import { Separator } from "./ui/separator"

// Menu Configuration
const data = {
  user: {
    name: "Alex Mwita",
    email: "alex@campo.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListTodo,
    },
    {
      title: "Wallet",
      url: "/wallet",
      icon: Wallet,
    },
    {
      title: "Referrals",
      url: "/referrals",
      icon: Users2Icon,
    }
  ],
  navAccount: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            <BirdIcon />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Campo Crowd</span>
            <span className="truncate text-xs text-muted-foreground">Earner Pro</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                const isActive = pathname === item.url
                return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive}
                    className="px-4 py-6 relative data-[active=true]:text-primary data-[active=true]:border-l-2 data-[active=true]:bg-primary/10"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {/* 4. Optional: The "Dot" Indicator */}
                        {isActive && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
                        )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navAccount.map((item) => {
                const isActive = pathname === item.url
                return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive}
                    className="px-4 py-6 relative data-[active=true]:text-primary data-[active=true]:border-l-2"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {/* 4. Optional: The "Dot" Indicator */}
                        {isActive && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
                        )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator orientation="horizontal" className="mr-2 h-4" />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground "
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                <AvatarFallback className="rounded-lg">AM</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{data.user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {data.user.email}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
