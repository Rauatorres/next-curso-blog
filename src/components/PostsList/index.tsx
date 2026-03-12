import { postRepository } from "@/repositories/post";
import Post from "../Post";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex flex-col gap-4">
            <Post
              href={"/post/" + post.slug}
              src={post.coverImageUrl}
              title={post.title}
            />
            ;
          </div>
        );
      })}
    </div>
  );
}
