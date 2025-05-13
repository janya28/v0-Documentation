"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookmarkPlus, ChevronLeft, Clock, Play, Share2, Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { DocumentaryCard } from "@/components/documentary-card"

export default function DocumentaryDetailPage({ params }: { params: { id: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Mock documentary data - in a real app, you would fetch this based on the ID
  const documentary = {
    id: params.id,
    title: "Planet Earth II",
    description:
      "Experience the natural world through the eyes of the animals themselves. From the highest mountains to the remotest islands, from exotic jungles to deep forests, the series captures the most breathtaking wildlife imagery ever seen, taking viewers on a journey through the most spectacular landscapes and habitats on Earth and bringing them eye to eye with the animals that live there.",
    year: "2016",
    rating: "9.5",
    genre: "Nature",
    duration: "6 episodes",
    director: "David Attenborough",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    tags: ["Wildlife", "BBC", "4K", "HDR"],
    relatedDocumentaries: [
      {
        id: "12-1",
        title: "Blue Planet II",
        description:
          "David Attenborough returns to the world's oceans in this sequel to the acclaimed documentary series",
        year: "2017",
        rating: "9.3",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "12-2",
        title: "Our Planet",
        description: "Documentary series focusing on the breadth of the diversity of habitats around the world",
        year: "2019",
        rating: "9.2",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "12-3",
        title: "Seven Worlds, One Planet",
        description:
          "Millions of years ago incredible forces ripped apart the Earth's crust creating our seven continents",
        year: "2019",
        rating: "9.4",
        genre: "Nature",
        imageUrl: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <Image
          src={documentary.imageUrl || "/placeholder.svg"}
          alt={documentary.title}
          width={1280}
          height={720}
          className="w-full h-[50vh] object-cover"
        />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="pt-20 pb-10">
            <Link
              href="/documentaries"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Documentaries
            </Link>
            <div className="grid gap-4 md:grid-cols-[2fr_1fr] items-end">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{documentary.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-white border-white/30">
                    {documentary.year}
                  </Badge>
                  <Badge variant="outline" className="text-white border-white/30">
                    {documentary.genre}
                  </Badge>
                  <Badge variant="outline" className="text-white border-white/30">
                    {documentary.duration}
                  </Badge>
                  <div className="flex items-center gap-1 bg-white/20 text-white text-xs px-2 py-1 rounded-md">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {documentary.rating}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="gap-2">
                    <Play className="h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 text-white border-white/30 hover:bg-white/20 hover:text-white"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <BookmarkPlus className={`h-4 w-4 ${isBookmarked ? "fill-white" : ""}`} />
                    {isBookmarked ? "Saved" : "Add to Watchlist"}
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 text-white border-white/30 hover:bg-white/20 hover:text-white"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1">
                    <ThumbsUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm text-white">95%</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm text-white">6h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 md:px-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="overview"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="episodes"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
            >
              Episodes
            </TabsTrigger>
            <TabsTrigger
              value="related"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
            >
              Related
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-6">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground mb-6">{documentary.description}</p>

                <h3 className="text-lg font-semibold mb-2">Director</h3>
                <p className="text-muted-foreground mb-6">{documentary.director}</p>

                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {documentary.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold mb-4">AI-Powered Recommendations</h2>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm mb-4">Based on your viewing history, we think you'll also enjoy:</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <Image
                        src="/placeholder.svg?height=100&width=150"
                        alt="Recommendation"
                        width={150}
                        height={100}
                        className="rounded-md object-cover w-20 h-20"
                      />
                      <div>
                        <h4 className="font-medium text-sm">Blue Planet II</h4>
                        <p className="text-xs text-muted-foreground">
                          David Attenborough returns to the world's oceans
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        src="/placeholder.svg?height=100&width=150"
                        alt="Recommendation"
                        width={150}
                        height={100}
                        className="rounded-md object-cover w-20 h-20"
                      />
                      <div>
                        <h4 className="font-medium text-sm">Our Planet</h4>
                        <p className="text-xs text-muted-foreground">
                          Documentary series focusing on the diversity of habitats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Details</h2>
                <dl className="grid grid-cols-[1fr_2fr] gap-2 text-sm">
                  <dt className="font-medium">Release Year</dt>
                  <dd className="text-muted-foreground">{documentary.year}</dd>

                  <dt className="font-medium">Genre</dt>
                  <dd className="text-muted-foreground">{documentary.genre}</dd>

                  <dt className="font-medium">Duration</dt>
                  <dd className="text-muted-foreground">{documentary.duration}</dd>

                  <dt className="font-medium">Rating</dt>
                  <dd className="text-muted-foreground flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {documentary.rating}/10
                  </dd>
                </dl>

                <Separator className="my-6" />

                <h2 className="text-2xl font-semibold mb-4">Music</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">Planet Earth II Suite</h3>
                    <p className="text-sm text-muted-foreground mb-2">Hans Zimmer</p>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">Jungles</h3>
                    <p className="text-sm text-muted-foreground mb-2">Jacob Shea & Jasha Klebe</p>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="episodes" className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((episode) => (
                <div key={episode} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Image
                    src="/placeholder.svg?height=180&width=320"
                    alt={`Episode ${episode}`}
                    width={320}
                    height={180}
                    className="rounded-md object-cover w-40 h-24"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Episode {episode}</h3>
                        <p className="text-sm text-muted-foreground">
                          {episode === 1 &&
                            "Islands - Remote islands offer sanctuary for some of the planet's strangest and rarest creatures."}
                          {episode === 2 &&
                            "Mountains - The great mountain ranges are some of the planet's most spectacular landscapes."}
                          {episode === 3 &&
                            "Jungles - Jungles and rainforests are home to an incredible variety of species."}
                          {episode === 4 &&
                            "Deserts - The world's deserts are lands of extremes that force animals to come up with ingenious ways of coping."}
                          {episode === 5 &&
                            "Grasslands - Grasslands cover one quarter of all land and support the greatest gatherings of wildlife on Earth."}
                          {episode === 6 &&
                            "Cities - Cities are growing at a faster rate than any other habitat on Earth."}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">50 min</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" className="gap-1">
                        <Play className="h-3 w-3" />
                        Play
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <BookmarkPlus className="h-3 w-3" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="related" className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Related Documentaries</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {documentary.relatedDocumentaries.map((doc) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
