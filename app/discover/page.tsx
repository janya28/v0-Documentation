"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentaryCard } from "@/components/documentary-card"
import { MusicCard } from "@/components/music-card"

export default function DiscoverPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Mock documentary recommendations
  const documentaryRecommendations = [
    {
      id: "r1",
      title: "The Social Dilemma",
      description: "Explores the dangerous human impact of social networking",
      year: "2020",
      rating: "7.6",
      genre: "Technology",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "r2",
      title: "My Octopus Teacher",
      description: "A filmmaker forges an unusual friendship with an octopus",
      year: "2020",
      rating: "8.1",
      genre: "Nature",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "r3",
      title: "Blackfish",
      description: "The story of Tilikum, a captive killer whale",
      year: "2013",
      rating: "8.1",
      genre: "Nature",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "r4",
      title: "Free Solo",
      description: "Alex Honnold attempts to become the first person to free solo climb El Capitan",
      year: "2018",
      rating: "8.1",
      genre: "Sports",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "r5",
      title: "Icarus",
      description:
        "An American cyclist's chance meeting with a Russian scientist leads to the exposure of Russia's doping program",
      year: "2017",
      rating: "7.9",
      genre: "Sports",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "r6",
      title: "13th",
      description:
        "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality",
      year: "2016",
      rating: "8.2",
      genre: "Social",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Mock music recommendations
  const musicRecommendations = [
    {
      id: "m1",
      title: "Planet Earth II Suite",
      artist: "Hans Zimmer",
      description: "Original soundtrack from the BBC documentary series",
      year: "2016",
      genre: "Soundtrack",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "m2",
      title: "Blue Planet II",
      artist: "Hans Zimmer & Radiohead",
      description: "Collaboration for the ocean documentary series",
      year: "2018",
      genre: "Soundtrack",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "m3",
      title: "Our Planet",
      artist: "Steven Price",
      description: "Original score for the Netflix nature documentary",
      year: "2019",
      genre: "Soundtrack",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "m4",
      title: "Cosmos: A Spacetime Odyssey",
      artist: "Alan Silvestri",
      description: "Music from the science documentary series",
      year: "2014",
      genre: "Soundtrack",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Categories for interest selection
  const categories = [
    "Nature",
    "History",
    "Science",
    "Technology",
    "Social Issues",
    "Biography",
    "Sports",
    "Food",
    "Travel",
    "Music",
    "Art",
    "Politics",
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Discover</h1>
        <p className="text-muted-foreground">Get personalized recommendations based on your interests</p>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI-Powered Recommendations
          </CardTitle>
          <CardDescription>
            Select your interests to get personalized documentary and music recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                onClick={() => toggleCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Update Preferences</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="documentaries" className="w-full">
        <TabsList>
          <TabsTrigger value="documentaries">Documentaries</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
        </TabsList>
        <TabsContent value="documentaries" className="pt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentaryRecommendations.map((doc) => (
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
        <TabsContent value="music" className="pt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {musicRecommendations.map((music) => (
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
