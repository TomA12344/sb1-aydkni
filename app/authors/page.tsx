import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";
import { getAuthors } from "@/lib/authors";

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Unsere Autoren</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => (
          <Card key={author.id} className="overflow-hidden">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold">{author.name}</h2>
                <p className="text-sm text-muted-foreground">{author.role}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{author.bio}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{author.posts} Artikel</Badge>
                <div className="flex gap-2">
                  {author.social.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={author.social.twitter}>
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  )}
                  {author.social.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={author.social.github}>
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  )}
                  {author.social.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={author.social.linkedin}>
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}