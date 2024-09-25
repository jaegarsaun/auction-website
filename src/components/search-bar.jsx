"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function SearchBarComponent({
  onSearch
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    (<form onSubmit={handleSearch} className="w-full max-w-sm">
      <div className="relative">
        <Search
          className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8 pr-4"
          aria-label="Search" />
      </div>
    </form>)
  );
}