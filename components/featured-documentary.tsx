"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookmarkPlus, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedDocumentary() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl border bg-muted"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src="/placeholder.svg?height=720&width=1280"
        alt="Featured Documentary"
        width={1280}
        height={720}
        className={`object-cover transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-6 flex flex-col justify-end">
        <Badge className="w-fit mb-2">Featured</Badge>
        <h3 className="text-2xl font-bold text-white mb-2">Planet Earth III</h3>
        <p className="text-white/80 mb-4 max-w-md">
          Experience the natural world as never before in this groundbreaking documentary series
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-white border-white/30">
            2023
          </Badge>
          <Badge variant="outline" className="text-white border-white/30">
            Nature
          </Badge>
          <Badge variant="outline" className="text-white border-white/30">
            BBC
          </Badge>
          <Badge variant="outline" className="text-white border-white/30">
            4K
          </Badge>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="/documentaries/planet-earth-3">
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Watch Now
            </Button>
          </Link>
          <Button variant="outline" className="gap-2 text-white border-white/30 hover:bg-white/20 hover:text-white">
            <BookmarkPlus className="h-4 w-4" />
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  )
}
