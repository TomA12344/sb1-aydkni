interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export function getCategories(): Category[] {
  return [
    {
      name: "Development",
      slug: "development",
      description: "Artikel über Softwareentwicklung, Programmiersprachen und Best Practices",
      count: 12
    },
    {
      name: "Design",
      slug: "design",
      description: "UI/UX Design, Gestaltungsprinzipien und Design-Tools",
      count: 8
    },
    {
      name: "DevOps",
      slug: "devops",
      description: "Continuous Integration, Deployment und Cloud-Infrastruktur",
      count: 5
    },
    {
      name: "Karriere",
      slug: "karriere",
      description: "Tipps für die berufliche Entwicklung in der Tech-Branche",
      count: 6
    },
    {
      name: "Mobile",
      slug: "mobile",
      description: "Mobile App-Entwicklung für iOS und Android",
      count: 4
    },
    {
      name: "Security",
      slug: "security",
      description: "Cybersecurity, Datenschutz und sichere Entwicklung",
      count: 7
    }
  ];
}