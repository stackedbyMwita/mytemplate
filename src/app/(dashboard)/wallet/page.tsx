import { PageTitle } from "@/components/page-title";

export default function WalletPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <PageTitle 
          title="My Wallet" 
          description="Manage your deposits, withdrawals, and transaction history." 
        />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}