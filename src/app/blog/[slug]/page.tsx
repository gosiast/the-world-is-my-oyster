import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PostHeader from "@/components/PostHeader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return (
      <article>
        <PostHeader post={post} />
        <div
          className="prose-blog"
          style={{ padding: "0 1.5rem 6rem" }}
        >
          <MDXRemote source={post.content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
