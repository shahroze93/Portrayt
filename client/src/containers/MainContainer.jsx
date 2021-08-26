import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts';
import Posts from '../screens/Posts/Posts';
import PostCreate from '../screens/PostCreate/PostCreate';
import UserPosts from '../screens/UserPosts/UserPosts';
import PostEdit from '../screens/PostEdit/PostEdit';

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
    history.push('/');
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  const handleUpdate = async (id, formData) => {
    const postData = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post;
      })
    );
    history.push('/');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const singleUser = await getUser();
      setPosts(singleUser);
    };
    fetchUser();
  }, []);


  return (
    <div>
      <Switch>
        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} />
        </Route>
        <Route exact path='/'>
          <Posts posts={posts} />
        </Route>
        <Route exact path='/myposts'>
          <UserPosts posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}