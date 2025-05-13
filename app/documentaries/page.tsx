"use client"

import { useState } from "react"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DocumentaryCard } from "@/components/documentary-card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function DocumentariesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<string>("all")

  // Mock documentary data
  const documentaries = [
    {
      id: "1",
      title: "The Social Dilemma",
      description: "Explores the dangerous human impact of social networking",
      year: "2020",
      rating: "7.6",
      genre: "Technology",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "My Octopus Teacher",
      description: "A filmmaker forges an unusual friendship with an octopus",
      year: "2020",
      rating: "8.1",
      genre: "Nature",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "Blackfish",
      description: "The story of Tilikum, a captive killer whale",
      year: "2013",
      rating: "8.1",
      genre: "Nature",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "4",
      title: "Free Solo",
      description: "Alex Honnold attempts to become the first person to free solo climb El Capitan",
      year: "2018",
      rating: "8.1",
      genre: "Sports",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "5",
      title: "Icarus",
      description:
        "An American cyclist's chance meeting with a Russian scientist leads to the exposure of Russia's doping program",
      year: "2017",
      rating: "7.9",
      genre: "Sports",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "6",
      title: "13th",
      description:
        "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality",
      year: "2016",
      rating: "8.2",
      genre: "Social",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "7",
      title: "Won't You Be My Neighbor?",
      description: "An exploration of the life, lessons, and legacy of iconic children's television host, Fred Rogers",
      year: "2018",
      rating: "8.4",
      genre: "Biography",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "8",
      title: "The Act of Killing",
      description: "A documentary challenging former Indonesian death-squad leaders to reenact their mass-killings",
      year: "2012",
      rating: "8.2",
      genre: "History",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "9",
      title: "Citizenfour",
      description:
        "A documentarian and a reporter travel to Hong Kong for the first of many meetings with Edward Snowden",
      year: "2014",
      rating: "8.0",
      genre: "Technology",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "10",
      title: "Searching for Sugar Man",
      description:
        "Two South Africans set out to discover what happened to their unlikely musical hero, the mysterious 1970s rock n roller, Rodriguez",
      year: "2012",
      rating: "8.2",
      genre: "Music",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "11",
      title: "Jiro Dreams of Sushi",
      description:
        "A documentary on 85-year-old sushi master Jiro Ono, his renowned Tokyo restaurant, and his relationship with his son and eventual heir",
      year: "2011",
      rating: "7.9",
      genre: "Food",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "12",
      title: "Planet Earth II",
      description: "Wildlife documentary series with David Attenborough",
      year: "2016",
      rating: "9.5",
      genre: "Nature",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Filter documentaries based on search and filters
  const filteredDocumentaries = documentaries.filter((doc) => {
    // Search filter
    if (searchQuery && !doc.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Genre filter
    if (selectedGenres.length > 0 && !selectedGenres.includes(doc.genre)) {
      return false
    }

    // Year filter
    if (selectedYears.length > 0 && !selectedYears.includes(doc.year)) {
      return false
    }

    // Rating filter
    if (selectedRating !== "all") {
      const rating = Number.parseFloat(doc.rating)
      if (selectedRating === "8plus" && rating < 8) return false
      if (selectedRating === "7plus" && rating < 7) return false
      if (selectedRating === "6plus" && rating < 6) return false
    }

    return true
  })

  // Get unique genres and years for filters
  const genres = Array.from(new Set(documentaries.map((doc) => doc.genre)))
  const years = Array.from(new Set(documentaries.map((doc) => doc.year)))

  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre])
    } else {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    }
  }

  const handleYearChange = (year: string, checked: boolean) => {
    if (checked) {
      setSelectedYears([...selectedYears, year])
    } else {
      setSelectedYears(selectedYears.filter((y) => y !== year))
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documentaries</h1>
          <p className="text-muted-foreground">Discover thought-provoking documentaries from around the world</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentaries..."
              className="pl-8 w-full sm:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {(selectedGenres.length > 0 || selectedYears.length > 0 || selectedRating !== "all") && (
                  <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                    {selectedGenres.length + selectedYears.length + (selectedRating !== "all" ? 1 : 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Documentaries</SheetTitle>
                <SheetDescription>Narrow down documentaries by genre, year, and rating</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="font-medium mb-3">Genre</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {genres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox
                          id={`genre-${genre}`}
                          checked={selectedGenres.includes(genre)}
                          onCheckedChange={(checked) => handleGenreChange(genre, checked as boolean)}
                        />
                        <Label htmlFor={`genre-${genre}`} className="text-sm font-normal">
                          {genre}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-3">Release Year</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {years.map((year) => (
                      <div key={year} className="flex items-center space-x-2">
                        <Checkbox
                          id={`year-${year}`}
                          checked={selectedYears.includes(year)}
                          onCheckedChange={(checked) => handleYearChange(year, checked as boolean)}
                        />
                        <Label htmlFor={`year-${year}`} className="text-sm font-normal">
                          {year}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="8plus">8+ Rating</SelectItem>
                      <SelectItem value="7plus">7+ Rating</SelectItem>
                      <SelectItem value="6plus">6+ Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedGenres([])
                      setSelectedYears([])
                      setSelectedRating("all")
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {filteredDocumentaries.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDocumentaries.map((doc) => (
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
          <h3 className="text-lg font-medium">No documentaries found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
