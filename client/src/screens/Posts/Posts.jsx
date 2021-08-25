import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts } = props;

  return (
    <section>
      <div>
        <h3>Home Decor</h3>
        <h3>Fashion</h3>
        <h3>Crafts</h3>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.name}</h4>
            <img src={post.img_url} alt={post.name} />
            </Link>
            <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
}