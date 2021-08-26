import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts, segments } = props;

  return (
    <section>
      <div>
      {segments.map((segment) => (
        <h3 key={segment.id}>{segment.name}</h3>
      ))}
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.name}</h4>
            <img src={post.img_url} alt={post.name} />
          </Link>
          <p>{post.user?.username}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
}