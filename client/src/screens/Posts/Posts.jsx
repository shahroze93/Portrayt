import { Link } from "react-router-dom";

export default function Posts(props) {
  const { posts, segments } = props;

  console.log(posts);

  return (
    <section>
      <div>
        {segments.map((segment) => (
          <h3 key={segment.id}>{segment.name}</h3>
        ))}
      </div>
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
            <p>{post.user?.username}</p>
            <p>{post.description}</p>
            {post?.segments?.map((segment) => (
              <p key={segment.id}>{segment.name}</p>
            ))}
          </div>
        ))}
    </section>
  );
}
