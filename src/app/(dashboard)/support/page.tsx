import { PageTitle } from "@/components/page-title";

export default function Supportpage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <PageTitle 
          title="Support Center" 
          description="Need help? Open a ticket or browse our FAQs." 
        />
        
        {/* Ticket form or list goes here */}
        <div className="h-96 rounded-xl border border-dashed" />
    </div>
    </div>
  )
}