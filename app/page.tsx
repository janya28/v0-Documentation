import Link from "next/link"
import { ArrowRight, Film, Music, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedDocumentary } from "@/components/featured-documentary"
import { DocumentaryCard } from "@/components/documentary-card"
import { MusicCard } from "@/components/music-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="h-6 w-6" />
              <span className="inline-block font-bold">DocuVerse</span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/documentaries" className="flex items-center text-sm font-medium text-muted-foreground">
                Documentaries
              </Link>
              <Link href="/music" className="flex items-center text-sm font-medium text-muted-foreground">
                Music
              </Link>
              <Link href="/discover" className="flex items-center text-sm font-medium text-muted-foreground">
                Discover
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0 sm:w-64">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full rounded-lg pl-8 bg-background" />
              </div>
            </div>
            <nav>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign up</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the world through documentaries
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore thought-provoking documentaries and immersive soundtracks. Save your favorites and get
                    personalized recommendations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/documentaries">
                    <Button size="lg">
                      Browse Documentaries
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="lg" variant="outline">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </div>
              <FeaturedDocumentary />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending Now</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The most-watched documentaries and soundtracks this week
                </p>
              </div>
            </div>
            <Tabs defaultValue="documentaries" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="documentaries" className="flex items-center gap-2">
                    <Film className="h-4 w-4" />
                    Documentaries
                  </TabsTrigger>
                  <TabsTrigger value="music" className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    Music
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="documentaries" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <DocumentaryCard
                    id="1"
                    title="The Social Dilemma"
                    description="Explores the dangerous human impact of social networking"
                    year="2020"
                    rating="7.6"
                    genre="Documentary"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <DocumentaryCard
                    id="2"
                    title="My Octopus Teacher"
                    description="A filmmaker forges an unusual friendship with an octopus"
                    year="2020"
                    rating="8.1"
                    genre="Documentary"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <DocumentaryCard
                    id="3"
                    title="Blackfish"
                    description="The story of Tilikum, a captive killer whale"
                    year="2013"
                    rating="8.1"
                    genre="Documentary"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <DocumentaryCard
                    id="4"
                    title="Free Solo"
                    description="Alex Honnold attempts to become the first person to free solo climb El Capitan"
                    year="2018"
                    rating="8.1"
                    genre="Documentary"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <div className="mt-10 flex justify-center">
                  <Link href="/documentaries">
                    <Button variant="outline" size="lg">
                      View All Documentaries
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="music" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <MusicCard
                    id="1"
                    title="Planet Earth II Suite"
                    artist="Hans Zimmer"
                    description="Original soundtrack from the BBC documentary series"
                    year="2016"
                    genre="Soundtrack"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <MusicCard
                    id="2"
                    title="Blue Planet II"
                    artist="Hans Zimmer & Radiohead"
                    description="Collaboration for the ocean documentary series"
                    year="2018"
                    genre="Soundtrack"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <MusicCard
                    id="3"
                    title="Our Planet"
                    artist="Steven Price"
                    description="Original score for the Netflix nature documentary"
                    year="2019"
                    genre="Soundtrack"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <MusicCard
                    id="4"
                    title="Cosmos: A Spacetime Odyssey"
                    artist="Alan Silvestri"
                    description="Music from the science documentary series"
                    year="2014"
                    genre="Soundtrack"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
                <div className="mt-10 flex justify-center">
                  <Link href="/music">
                    <Button variant="outline" size="lg">
                      View All Music
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">AI-Powered Recommendations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create an account to get personalized documentary and music recommendations based on your preferences
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Personalized Experience</CardTitle>
                    <CardDescription>
                      Our AI analyzes your viewing history to suggest content you'll love
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          1
                        </div>
                        <div className="text-sm">Create an account</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          2
                        </div>
                        <div className="text-sm">Save your favorite documentaries and music</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          3
                        </div>
                        <div className="text-sm">Get personalized recommendations</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/register" className="w-full">
                      <Button className="w-full">Sign Up Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 DocuVerse. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              About
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
