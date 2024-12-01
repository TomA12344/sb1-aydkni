import Link from "next/link";
import { Post } from "@/types/post";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="h-full cursor-pointer transition-all hover:shadow-lg">
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="line-clamp-2 hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}