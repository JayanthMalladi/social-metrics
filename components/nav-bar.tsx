import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="border-b border-zinc-700 px-6 py-4 flex items-center justify-between bg-zinc-800">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white tracking-tight">SnapFluence</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="border-zinc-700 text-gray-400 hover:border-white hover:text-white bg-zinc-800"
        >
          Export
        </Button>
      </div>
    </nav>
  )
}