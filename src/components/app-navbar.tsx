import { Separator } from "@radix-ui/react-separator";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { NotificationsSheet } from "./notifications-sheet";
import { UserNav } from "./user-nav";

export default function Navbar() {
  return (
    <div className="flex items-center gap-2 px-4 w-full justify-between">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="font-heading text-sm font-medium text-foreground/80">
          Dashboard
        </h1>
      </div>
      
      {/* Right Side of Navbar */}
      <div className="flex items-center gap-2">
        <NotificationsSheet />
        <ThemeToggle />
        <UserNav />
      </div>
    </div>
  )
}