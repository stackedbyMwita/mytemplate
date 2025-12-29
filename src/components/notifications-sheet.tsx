"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export function NotificationsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="Open notifications"
          className="rounded-full relative"
        >
          <Bell className="h-5 w-5" />
          {/* Optional: Red dot for unread status */}
          <span className="absolute top-0.5 right-1 h-3 w-3 rounded-full bg-destructive border-2 border-background" />
        </Button>
      </SheetTrigger>
      
      {/* side="right" makes it slide from right. 
         w-full sm:w-[540px] makes it full width on mobile, wider on desktop.
      */}
      <SheetContent side="right" className="w-full sm:w-100 pr-0">
        <SheetHeader className="px-6 border-b pb-4">
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have 3 unread messages.
          </SheetDescription>
        </SheetHeader>
        
        {/* Scrollable Content Area */}
        <div className="flex flex-col gap-4 p-6 overflow-y-auto h-[calc(100vh-100px)]">
          
          {/* Mock Notification Item 1 */}
          <div className="flex flex-col gap-1 pb-4 border-b last:border-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Payment Received</span>
              <span className="text-xs text-muted-foreground">2m ago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              You have successfully withdrawn KES 1,500 via M-Pesa.
            </p>
          </div>

          {/* Mock Notification Item 2 */}
          <div className="flex flex-col gap-1 pb-4 border-b last:border-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">New Task Available</span>
              <span className="text-xs text-muted-foreground">1h ago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A new high-paying survey is available in your dashboard.
            </p>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  )
}
