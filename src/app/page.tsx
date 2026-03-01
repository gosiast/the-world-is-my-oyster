import { getFeaturedPosts } from "@/lib/posts";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function HomePage() {
  const posts = getFeaturedPosts(4);
  const [heroPost, ...cardPosts] = posts;

  return (
    <>
      {heroPost && <HeroSection post={heroPost} />}
      <FeaturedPosts posts={cardPosts} />
    </>
  );
}
