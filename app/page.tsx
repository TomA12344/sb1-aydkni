import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const featuredPosts = [
    {
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      author: "Max Mustermann",
      date: "2024-03-20",
      slug: "getting-started-with-nextjs"
    },
    {
      title: "Mastering Tailwind CSS",
      description: "A comprehensive guide to styling with Tailwind CSS",
      author: "Anna Schmidt",
      date: "2024-03-19",
      slug: "mastering-tailwind-css"
    },
    {
      title: "The Power of TypeScript",
      description: "Why TypeScript is essential for modern web development",
      author: "Thomas Weber",
      date: "2024-03-18",
      slug: "power-of-typescript"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Willkommen auf unserem Blog</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Entdecken Sie spannende Artikel über Webentwicklung, Design und Technologie
        </p>
        <Button asChild size="lg">
          <Link href="/blog">Alle Artikel ansehen</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Neueste Beiträge</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString("de-DE")}</span>
                </div>
                <Button variant="link" asChild className="mt-4 px-0">
                  <Link href={`/blog/${post.slug}`}>Weiterlesen →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Newsletter abonnieren</h2>
        <p className="mb-8 text-muted-foreground">
          Bleiben Sie auf dem Laufenden mit unseren neuesten Artikeln und Updates
        </p>
        <div className="mx-auto max-w-md">
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit">Abonnieren</Button>
          </form>
        </div>
      </section>
    </div>
  );
}