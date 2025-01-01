import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Analytics</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Apr 01, 2024 - Jul 31, 2024</Button>
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">Add metric</Button>
        <Button variant="outline" size="sm">16 Social Networks</Button>
      </div>
    </nav>
  )
}