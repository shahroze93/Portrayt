import { Link } from "react-router-dom";

export default function Posts(props) {
  const { posts, segments } = props;

  return (
    <section>
      <hr />
      <div>
        {segments.map((segment) => (
          <div key={segment.id}>
            <Link to={`/segments/${segment.id}`}>
              <h3>{segment.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      {posts
        ?.sort(
          ({ id: previousID }, { id: currentID }) => previousID - currentID
        )
        .slice(0)
        .reverse()
        .map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h4>{post.name}</h4>
              <img src={post.img_url} alt={post.name} />
            </Link>
            <Link to={`/users/${post.user?.id}`}>
              <h4>{post.user?.username}</h4>
            </Link>
            <p>{post.description}</p>
            {post?.segments?.map((segment) => (
              <p key={segment.id}>{segment.name}</p>
            ))}
          </div>
        ))}
    </section>
  );
}
