export default function Card({ post }) {
  return (
    <div class="card">
      <img src={post.image} class="card-img-top img-fluid" alt="😢" />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.content}</p>
      </div>
    </div>
  );
}
