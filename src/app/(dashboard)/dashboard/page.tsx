import { PageTitle } from "@/components/page-title"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <PageTitle 
        title="Dashboard" 
        description="Your real-time earnings and activity overview." 
      />
      
      {/* Dashboard widgets go here */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
    </div>
  )
}