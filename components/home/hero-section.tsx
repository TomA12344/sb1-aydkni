"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative mb-16 overflow-hidden py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
          Willkommen auf unserem Blog
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          Entdecken Sie spannende Artikel über Webentwicklung, Design und Technologie
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/blog">Alle Artikel ansehen</Link>
        </Button>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/5 via-background/50 to-background" />
    </section>
  );
}