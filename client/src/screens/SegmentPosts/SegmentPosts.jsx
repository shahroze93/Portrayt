import { Link } from "react-router-dom";

export default function SegmentPosts(props) {
  const { segments } = props;

  return (
    <section>
      <div></div>
      {segments?.posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.name}</h4>
            <img src={post.img_url} alt={post.name} />
          </Link>
          <p>{post.user?.username}</p>
          <p>{post.description}</p>
          <p>{post?.segments?.name}</p>
        </div>
      ))}
    </section>
  );
}
