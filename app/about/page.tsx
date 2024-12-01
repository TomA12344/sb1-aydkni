import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Max Mustermann",
      role: "Gründer & Chefredakteur",
      bio: "Erfahrener Entwickler und Tech-Enthusiast mit einer Leidenschaft für das Teilen von Wissen.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Anna Schmidt",
      role: "Leitende Redakteurin",
      bio: "Spezialisiert auf UX/UI Design und moderne Webtechnologien.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Über uns</h1>
        
        <Card className="mb-12">
          <CardContent className="pt-6">
            <p className="mb-4 text-lg text-muted-foreground">
              Willkommen auf unserer Blog-Plattform! Wir sind ein Team von leidenschaftlichen
              Entwicklern, Designern und Tech-Enthusiasten, die ihr Wissen und ihre Erfahrungen
              mit der Community teilen möchten.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              Unser Ziel ist es, qualitativ hochwertige Artikel und Tutorials zu erstellen,
              die sowohl Anfängern als auch fortgeschrittenen Entwicklern helfen, ihre
              Fähigkeiten zu verbessern und auf dem neuesten Stand der Technologie zu bleiben.
            </p>
          </CardContent>
        </Card>

        <h2 className="mb-6 text-2xl font-bold">Unser Team</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">Technologie-Stack</h2>
          <p className="mb-6 text-muted-foreground">
            Unsere Plattform wurde mit modernsten Technologien entwickelt:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm">Next.js</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm">React</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm">TypeScript</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm">Tailwind CSS</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm">MDX</span>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/yourusername/blog-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Github className="h-4 w-4" />
            Besuchen Sie uns auf GitHub
          </a>
        </div>
      </div>
    </div>
  );
}