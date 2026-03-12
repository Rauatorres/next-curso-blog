import Post from "../Post";

export default function PostFeatured() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <Post
        title="Título do post"
        titleType="heading"
        href="#"
        src="/images/bryen_0.png"
      />
    </section>
  );
}
