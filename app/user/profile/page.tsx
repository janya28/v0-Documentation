"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookmarkCheck, Clock, Edit, Film, Music, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentaryCard } from "@/components/documentary-card"
import { MusicCard } from "@/components/music-card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("watchlist")

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=200&width=200",
    joinDate: "January 2023",
    watchlist: [
      {
        id: "w1",
        title: "Planet Earth II",
        description: "Wildlife documentary series with David Attenborough",
        year: "2016",
        rating: "9.5",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "w2",
        title: "The Social Dilemma",
        description: "Explores the dangerous human impact of social networking",
        year: "2020",
        rating: "7.6",
        genre: "Technology",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "w3",
        title: "Free Solo",
        description: "Alex Honnold attempts to become the first person to free solo climb El Capitan",
        year: "2018",
        rating: "8.1",
        genre: "Sports",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
    ],
    history: [
      {
        id: "h1",
        title: "My Octopus Teacher",
        description: "A filmmaker forges an unusual friendship with an octopus",
        year: "2020",
        rating: "8.1",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
        progress: 100,
      },
      {
        id: "h2",
        title: "Blackfish",
        description: "The story of Tilikum, a captive killer whale",
        year: "2013",
        rating: "8.1",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
        progress: 100,
      },
      {
        id: "h3",
        title: "13th",
        description: "An in-depth look at the prison system in the United States",
        year: "2016",
        rating: "8.2",
        genre: "Social",
        imageUrl: "/placeholder.svg?height=400&width=600",
        progress: 75,
      },
    ],
    playlists: [
      {
        id: "p1",
        title: "Planet Earth II Suite",
        artist: "Hans Zimmer",
        description: "Original soundtrack from the BBC documentary series",
        year: "2016",
        genre: "Soundtrack",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "p2",
        title: "Blue Planet II",
        artist: "Hans Zimmer & Radiohead",
        description: "Collaboration for the ocean documentary series",
        year: "2018",
        genre: "Soundtrack",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-background">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">Member since {user.joinDate}</p>
            </div>
            <div className="md:ml-auto flex justify-center md:justify-end gap-2">
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Preferences
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <BookmarkCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">{user.watchlist.length}</div>
              <div className="text-sm text-muted-foreground">Watchlist</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">{user.history.length}</div>
              <div className="text-sm text-muted-foreground">Watched</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">42</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">{user.playlists.length}</div>
              <div className="text-sm text-muted-foreground">Playlists</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="watchlist" className="flex items-center gap-2">
            <BookmarkCheck className="h-4 w-4" />
            Watchlist
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Watch History
          </TabsTrigger>
          <TabsTrigger value="playlists" className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            Music Playlists
          </TabsTrigger>
        </TabsList>
        <TabsContent value="watchlist" className="pt-6">
          {user.watchlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {user.watchlist.map((doc) => (
                <DocumentaryCard
                  key={doc.id}
                  id={doc.id}
                  title={doc.title}
                  description={doc.description}
                  year={doc.year}
                  rating={doc.rating}
                  genre={doc.genre}
                  imageUrl={doc.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">Your watchlist is empty</h3>
              <p className="text-muted-foreground mb-4">Start adding documentaries to watch later</p>
              <Link href="/documentaries">
                <Button>Browse Documentaries</Button>
              </Link>
            </div>
          )}
        </TabsContent>
        <TabsContent value="history" className="pt-6">
          {user.history.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {user.history.map((doc) => (
                <div key={doc.id} className="relative">
                  <DocumentaryCard
                    id={doc.id}
                    title={doc.title}
                    description={doc.description}
                    year={doc.year}
                    rating={doc.rating}
                    genre={doc.genre}
                    imageUrl={doc.imageUrl}
                  />
                  {doc.progress < 100 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                      <div className="h-full bg-primary" style={{ width: `${doc.progress}%` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">Your watch history is empty</h3>
              <p className="text-muted-foreground mb-4">Start watching documentaries to see them here</p>
              <Link href="/documentaries">
                <Button>Browse Documentaries</Button>
              </Link>
            </div>
          )}
        </TabsContent>
        <TabsContent value="playlists" className="pt-6">
          {user.playlists.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {user.playlists.map((music) => (
                <MusicCard
                  key={music.id}
                  id={music.id}
                  title={music.title}
                  artist={music.artist}
                  description={music.description}
                  year={music.year}
                  genre={music.genre}
                  imageUrl={music.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">Your music playlists are empty</h3>
              <p className="text-muted-foreground mb-4">Start adding music to your playlists</p>
              <Link href="/music">
                <Button>Browse Music</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
