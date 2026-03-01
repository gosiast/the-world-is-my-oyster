export interface PostFrontmatter {
  title: string;
  date: string;
  location: string;
  category: string;
  excerpt: string;
  coverImage: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
}

export interface PostWithContent extends Post {
  content: string;
}
