import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts } = props;

  return (
    <section>
      <h3>All Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.name}</p>
            <img src={post.img_url} alt={post.name} />
            <p>{post.description}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}