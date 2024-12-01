"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Erfolgreich angemeldet!");
      setEmail("");
    } catch (error) {
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mb-16 rounded-2xl bg-muted/50 px-6 py-12 text-center">
      <h2 className="mb-4 text-3xl font-bold">Newsletter abonnieren</h2>
      <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
        Bleiben Sie auf dem Laufenden mit unseren neuesten Artikeln und Updates
      </p>
      <div className="mx-auto max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          <Button type="submit" disabled={isLoading} className="h-12 px-8">
            {isLoading ? "Wird angemeldet..." : "Abonnieren"}
          </Button>
        </form>
      </div>
    </section>
  );
}