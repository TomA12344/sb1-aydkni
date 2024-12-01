"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchDialog } from "@/components/search-dialog";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Modern Blog Platform
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/blog"
              className={pathname === "/blog" ? "text-foreground" : "text-foreground/60"}
            >
              Blog
            </Link>
            <Link
              href="/categories"
              className={pathname === "/categories" ? "text-foreground" : "text-foreground/60"}
            >
              Kategorien
            </Link>
            <Link
              href="/authors"
              className={pathname === "/authors" ? "text-foreground" : "text-foreground/60"}
            >
              Autoren
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchDialog />
          </div>
          <ThemeToggle />
          <Button variant="default" asChild>
            <Link href="/admin">
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}