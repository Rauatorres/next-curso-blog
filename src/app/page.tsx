import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import PostHeading from "@/components/PostHeading";
import PostImage from "@/components/PostImage";
import Post from "@/components/Post";
import PostFeatured from "@/components/PostFeatured";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <PostFeatured />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer />
    </Container>
  );
}
