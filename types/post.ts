export interface Post {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  content?: string;
  tags?: string[];
  category?: string;
}