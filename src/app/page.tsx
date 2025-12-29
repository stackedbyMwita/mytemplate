import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-24">

      <div className="fixed top-4 right-4">
        {/* 1. The Toggle Component */}
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
      {/* 1. Primary Card */}
      <Card className="w-75 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary">Primary Color</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-600">
            This is your main brand color. It represents trust.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Action Button</Button>
        </CardFooter>
      </Card>

      {/* 2. Secondary Card */}
      <Card className="w-75">
        <CardHeader>
          <CardTitle className="text-zinc-800">Secondary Color</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-600">
             Used for subtle backgrounds and supporting elements.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">Secondary Action</Button>
        </CardFooter>
      </Card>

      {/* 3. Accent Card */}
      <Card className="w-75 border-accent/50">
        <CardHeader>
          <div className="text-xs font-bold text-accent uppercase tracking-wider">New Feature</div>
          <CardTitle>Accent Color</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-600">
            Used for highlights, notifications, and "pops" of color.
          </p>
        </CardContent>
        <CardFooter>
          {/* Custom class to use accent background */}
          <Button className="w-full bg-accent hover:bg-accent/90 text-white">
            Special Action
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
