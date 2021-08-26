import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllPosts, postPost, putPost, deletePost } from "../services/posts";
import { getAllSegments, addSegmentToPost } from "../services/segments";
import Posts from "../screens/Posts/Posts";
import PostCreate from "../screens/PostCreate/PostCreate";
import UserPosts from "../screens/UserPosts/UserPosts";
import PostEdit from "../screens/PostEdit/PostEdit";
import SegmentPosts from "../screens/SegmentPosts/SegmentPosts";
import OthersPosts from "../screens/OthersPosts/OthersPosts";
import PostDetails from "../screens/PostDetails/PostDetails";

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const [segments, setSegments] = useState([]);
  const { currentUser } = props;
  const history = useHistory();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, [toggle]);

  useEffect(() => {
    const fetchSegments = async () => {
      const segmentList = await getAllSegments();
      setSegments(segmentList);
    };
    fetchSegments();
  }, []);

  const handleCreate = async (formData, segmentId) => {
    const postData = await postPost(formData);
    setPosts((prevState) => [...prevState, postData]);
    handleSegmentAdd(segmentId, postData.id);
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
    history.push("/");
  };

  const handleSegmentAdd = async (segmentId, postId) => {
    const updatePost = await addSegmentToPost(segmentId, postId);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.postId === Number(postId) ? updatePost : post;
      })
    );
    setToggle((prevToggle) => !prevToggle);
    history.push("/");
  };

  return (
    <div>
      <Switch>
        <Route path="/posts/new">
          <PostCreate segments={segments} handleCreate={handleCreate} />
        </Route>
        <Route path="/posts/:id/edit">
          <PostEdit
            segments={segments}
            posts={posts}
            handleUpdate={handleUpdate}
          />
        </Route>
        <Route exact path="/">
          <Posts segments={segments} posts={posts} />
        </Route>
        <Route exact path="/segments/:id">
          <SegmentPosts />
        </Route>
        <Route exact path="/users/:id">
          <OthersPosts />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetails />
        </Route>
        <Route exact path="/myposts">
          <UserPosts
            posts={posts}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}
