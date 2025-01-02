import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="border-b border-zinc-800 px-6 py-3 flex items-center justify-between bg-black text-white">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white">Analytics</h1>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-zinc-800 text-gray-400 hover:border-white hover:text-white"
          >
            Apr 01, 2024 - Jul 31, 2024
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-zinc-800 text-gray-400 hover:border-white hover:text-white"
          >
            Export
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="border-zinc-800 text-gray-400 hover:border-white hover:text-white"
        >
          Add metric
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-zinc-800 text-gray-400 hover:border-white hover:text-white"
        >
          16 Social Networks
        </Button>
      </div>
    </nav>
  )
}