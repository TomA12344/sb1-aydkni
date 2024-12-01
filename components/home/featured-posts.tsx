import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/post";

interface FeaturedPostsProps {
  posts: Post[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Neueste Beiträge</h2>
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
          Alle Beiträge ansehen →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="group transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="group-hover:text-primary">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.author}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <Button variant="link" asChild className="px-0">
                <Link href={`/blog/${post.slug}`}>Weiterlesen →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}