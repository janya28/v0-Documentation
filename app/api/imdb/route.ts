import { NextResponse } from "next/server"

// This is a mock API route that would integrate with the IMDB API in a real application
export async function GET(request: Request) {
  // Get search params
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query") || ""
  const type = searchParams.get("type") || "movie"

  // In a real application, you would:
  // 1. Call the IMDB API with the query and type
  // 2. Process the response
  // 3. Return the results

  // For now, we'll return mock data
  const mockResults = [
    {
      id: "tt5491994",
      title: "Planet Earth II",
      year: "2016",
      type: "series",
      poster: "/placeholder.svg?height=400&width=600",
      plot: "Wildlife documentary series with David Attenborough",
      rating: "9.5",
    },
    {
      id: "tt11464826",
      title: "The Social Dilemma",
      year: "2020",
      type: "movie",
      poster: "/placeholder.svg?height=400&width=600",
      plot: "Explores the dangerous human impact of social networking",
      rating: "7.6",
    },
    {
      id: "tt7784604",
      title: "The Biggest Little Farm",
      year: "2018",
      type: "movie",
      poster: "/placeholder.svg?height=400&width=600",
      plot: "Documentarian John Chester chronicles the eight-year quest he and his wife Molly undertook when they traded city living for 200 acres of barren farmland",
      rating: "8.1",
    },
  ]

  // Filter by query if provided
  const filteredResults = query
    ? mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.plot.toLowerCase().includes(query.toLowerCase()),
      )
    : mockResults

  // Filter by type if provided
  const typeFilteredResults =
    type !== "all" ? filteredResults.filter((result) => result.type === type) : filteredResults

  return NextResponse.json({
    results: typeFilteredResults,
    totalResults: typeFilteredResults.length,
    response: "True",
  })
}
