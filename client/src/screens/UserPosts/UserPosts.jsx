import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/users';

export default function UserPosts(props) {
  const { posts, handleDelete, currentUser } = props;
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const singleUser = await getOneUser();
      setUserData(singleUser);
    };
    fetchUser();
  }, []);

  console.log(userData)

  return (
    <div>
      <h3>My Posts</h3>
      <Link to={`/edit-account`}>Edit Account</Link>
      {posts.map((post) => (
        <div key={post.id}>
          {currentUser?.id === post.user_id && (
          <section>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.name}</h4>
            <img src={post.img_url} alt={post.name} />
          </Link>
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
