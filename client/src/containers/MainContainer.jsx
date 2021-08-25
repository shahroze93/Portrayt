import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts';
import Posts from '../screens/Posts/Posts';
import PostCreate from '../screens/PostCreate/PostCreate';

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  const handleCreate = async (formData) => {
    const postData = await postPost(formData);
    setPosts((prevState) => [...prevState, postData]);
    history.push('/posts');
  };

  return (
    <div>
      <Switch>
        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/'>
          <Posts posts={posts} />
        </Route>
      </Switch>
    </div>
  );
}