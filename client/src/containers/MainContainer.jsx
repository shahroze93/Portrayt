import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllPosts, postPost, putPost, deletePost } from "../services/posts";
import { getAllSegments, addSegmentToPost } from "../services/segments";
import {
  addCommentToPost,
  postComment,
  deleteComment,
  updateComment,
} from "../services/comments";
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
      setFilteredData(postList);
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

  const handleCommDelete = async (id) => {
    await deleteComment(id);
    setToggle((prevToggle) => !prevToggle);
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

  const handleCommCreate = async (commentData, postId) => {
    const newComment = await postComment(commentData);
    const updatePost = await addCommentToPost(newComment.id, postId);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.postId === Number(postId) ? updatePost : post;
      })
    );
    setToggle((prevToggle) => !prevToggle);
  };

  const handleCommEdit = async (commentId, formData) => {
    await updateComment(commentId, formData);
    setToggle((prevToggle) => !prevToggle);
  };

  const [filteredData, setFilteredData] = useState(posts);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = posts.filter((post) => {
      return post.name.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  const breakpoints = {
    default: 6,
    1600: 5,
    1300: 4,
    1000: 3,
    800: 2,
    550: 1,
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
          <Posts
            segments={segments}
            filteredData={filteredData}
            handleSearch={handleSearch}
            breakpoints={breakpoints}
          />
        </Route>
        <Route exact path="/segments/:id">
          <SegmentPosts breakpoints={breakpoints} segments={segments} />
        </Route>
        <Route exact path="/users/:id">
          <OthersPosts />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetails
            handleCommDelete={handleCommDelete}
            handleCommCreate={handleCommCreate}
            currentUser={currentUser}
            toggle={toggle}
            handleCommEdit={handleCommEdit}
          />
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
