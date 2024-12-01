import { Post } from "@/types/post";

export function getPosts(): Post[] {
  return [
    {
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      author: "Max Mustermann",
      date: "2024-03-20",
      slug: "getting-started-with-nextjs",
      category: "Development",
      tags: ["Next.js", "React", "Web Development"]
    },
    {
      title: "Mastering Tailwind CSS",
      description: "A comprehensive guide to styling with Tailwind CSS",
      author: "Anna Schmidt",
      date: "2024-03-19",
      slug: "mastering-tailwind-css",
      category: "Design",
      tags: ["CSS", "Tailwind", "Styling"]
    },
    {
      title: "The Power of TypeScript",
      description: "Why TypeScript is essential for modern web development",
      author: "Thomas Weber",
      date: "2024-03-18",
      slug: "power-of-typescript",
      category: "Development",
      tags: ["TypeScript", "JavaScript", "Programming"]
    },
    {
      title: "Modern State Management in React",
      description: "Exploring different state management solutions in React applications",
      author: "Max Mustermann",
      date: "2024-03-17",
      slug: "modern-state-management-react",
      category: "Development",
      tags: ["React", "State Management", "JavaScript"]
    },
    {
      title: "Building Accessible Web Applications",
      description: "Best practices for creating inclusive web experiences",
      author: "Anna Schmidt",
      date: "2024-03-16",
      slug: "building-accessible-web-applications",
      category: "Design",
      tags: ["Accessibility", "Web Development", "UX"]
    },
    {
      title: "DevOps Best Practices",
      description: "Essential practices for modern DevOps workflows",
      author: "Thomas Weber",
      date: "2024-03-15",
      slug: "devops-best-practices",
      category: "DevOps",
      tags: ["DevOps", "CI/CD", "Cloud"]
    }
  ];
}

export const getFeaturedPosts = (): Post[] => {
  return getPosts().slice(0, 3);
};