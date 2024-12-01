import { Author } from "@/types/author";

export function getAuthors(): Author[] {
  return [
    {
      id: "max-mustermann",
      name: "Max Mustermann",
      role: "Senior Developer",
      bio: "Full-Stack Entwickler mit Schwerpunkt auf React und Node.js. Teilt gerne sein Wissen über moderne Webtechnologien.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      social: {
        twitter: "https://twitter.com/maxmustermann",
        github: "https://github.com/maxmustermann",
        linkedin: "https://linkedin.com/in/maxmustermann"
      },
      posts: 12
    },
    {
      id: "anna-schmidt",
      name: "Anna Schmidt",
      role: "UX Designer",
      bio: "Erfahrene UI/UX Designerin mit Leidenschaft für benutzerfreundliche Interfaces und moderne Designsysteme.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      social: {
        twitter: "https://twitter.com/annadesign",
        linkedin: "https://linkedin.com/in/annadesign"
      },
      posts: 8
    },
    {
      id: "thomas-weber",
      name: "Thomas Weber",
      role: "DevOps Engineer",
      bio: "Spezialist für Cloud-Infrastruktur und CI/CD-Pipelines. Schreibt über DevOps Best Practices und Automatisierung.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
      social: {
        github: "https://github.com/thomasweber",
        linkedin: "https://linkedin.com/in/thomasweber"
      },
      posts: 6
    }
  ];
}