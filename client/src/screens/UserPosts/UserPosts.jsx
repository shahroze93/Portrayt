import { Link } from 'react-router-dom';

export default function UserPosts(props) {
  const { posts, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>My Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          {currentUser?.id === post.user_id && (
            <section>
            <p>{post.name}</p>
            <div>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
              </section>
      )}
      </div>
      ))}
    </div>
  );
}
