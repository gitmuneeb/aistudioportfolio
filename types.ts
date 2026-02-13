
export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  role: string;
  outcome: string;
  background: string;
  mainImage: string;
  screenshots: string[];
  tags: string[];
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

export interface Update {
  date: string;
  title: string;
  content: string;
}
