"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/posts";
import { Post } from "@/types/post";

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const posts = getPosts();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSelect = (post: Post) => {
    router.push(`/blog/${post.slug}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <Search className="h-4 w-4" />
          <span className="sr-only">Suche</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Suche</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Suche nach Artikeln, Tags oder Themen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          {search.length > 0 && (
            <div className="space-y-2">
              {filteredPosts.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Keine Ergebnisse gefunden.
                </p>
              ) : (
                filteredPosts.map((post) => (
                  <button
                    key={post.slug}
                    onClick={() => handleSelect(post)}
                    className="w-full rounded-lg p-2 text-left hover:bg-muted"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}