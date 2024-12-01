import { getPosts } from "@/lib/posts";
import { BlogList } from "@/components/blog/blog-list";
import { BlogHeader } from "@/components/blog/blog-header";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHeader />
      <BlogList posts={posts} />
    </div>
  );
}