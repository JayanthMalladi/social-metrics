import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold mb-8 typewriter">
            Transform your Presence.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Get powerful insights into your social media performance with our advanced analytics platform.
            Make data-driven decisions and grow your online presence.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Metrics Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-400">Posts Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Real-time Updates</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-white transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Real-time Analytics</h3>
            <p className="text-gray-400 text-sm">Track performance metrics as they happen</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-white transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Smart Insights</h3>
            <p className="text-gray-400 text-sm">AI-powered recommendations</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-white transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Custom Reports</h3>
            <p className="text-gray-400 text-sm">Create tailored analytics reports</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-white transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Fast Performance</h3>
            <p className="text-gray-400 text-sm">Lightning-fast data processing</p>
          </div>
        </div>
      </main>
    </div>
  )
}
