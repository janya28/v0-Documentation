"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookmarkPlus, Info, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MusicCardProps {
  id: string
  title: string
  artist: string
  description: string
  year: string
  genre: string
  imageUrl: string
}

export function MusicCard({ id, title, artist, description, year, genre, imageUrl }: MusicCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card className="overflow-hidden border-0 bg-background">
      <div
        className="relative aspect-square overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className={`object-cover transition-transform duration-300 ${isHovering ? "scale-110" : "scale-100"}`}
        />
        {isHovering && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2">
            <Link href={`/music/${id}`}>
              <Button size="sm" className="rounded-full" variant="secondary">
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full text-white hover:text-white hover:bg-white/20"
                  >
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Playlist</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={`/music/${id}`}>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full text-white hover:text-white hover:bg-white/20"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Info</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <Link href={`/music/${id}`} className="hover:underline">
          <h3 className="font-semibold line-clamp-1">{title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{artist}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Badge variant="outline" className="rounded-sm">
          {year}
        </Badge>
        <Badge variant="outline" className="rounded-sm">
          {genre}
        </Badge>
      </CardFooter>
    </Card>
  )
}
