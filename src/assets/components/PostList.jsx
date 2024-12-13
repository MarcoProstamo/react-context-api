import { usePostContext } from "../contexts/PostContext";
import Card from "./Card";

export default function PostList() {
  const { posts } = usePostContext();

  return (
    <div className="d-flex gap-2 flex-wrap">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
