import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-6">Social Media Analytics</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your social media performance in real-time
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button size="lg">
                Let&apos;s get started
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Don&apos;t have an account?
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
