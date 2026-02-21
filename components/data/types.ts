export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "blockquote" | "image";
  content?: string | string[];
  level?: number;
  src?: string;
  alt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: ContentBlock[];
  preview?: boolean;
}
