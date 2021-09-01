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
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
      setFilteredData(postList);
      setLoading((prevToggle) => !prevToggle);
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
    setToggle((prevToggle) => !prevToggle);
  };

  const handleCommDelete = async (id) => {
    await deleteComment(id);
    setToggle((prevToggle) => !prevToggle);
  };

  const handleUpdate = async (id, formData, segmentId) => {
    const postData = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post;
      })
    );
    handleSegmentAdd(segmentId, postData.id);
    setToggle((prevToggle) => !prevToggle);
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
  // added function for searching through the data so that users can search by post name, assistance taken from -> https://levelup.gitconnected.com/how-to-search-filter-through-data-in-react-26f1545fe3a1
  // because the filter method is case sensitive, I was able to find a fix by using the toLowerCase method that ensures that all search terms no matter the case would work, assistance taken from -> https://stackoverflow.com/questions/37425650/search-text-no-matter-if-is-in-lower-or-upper-case/37425707

  // code to only return the posts by the currentUser only
  const [newArray, setNewArray] = useState([]);
  useEffect(() => {
    const fetchUserPosts = async () => {
      let newArray = [];
      posts?.map((post) => {
        if (currentUser?.id === post.user_id) newArray.push(post);
        setNewArray(newArray);
        return newArray;
      });
    };
    fetchUserPosts();
  }, [currentUser, posts]);

  const breakpoints = {
    default: 6,
    1600: 5,
    1300: 4,
    1024: 3,
    800: 2,
    610: 1,
  };
  let loaderColor = "#66cc75";

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
            loading={loading}
            loaderColor={loaderColor}
          />
        </Route>
        <Route exact path="/segments/:id">
          <SegmentPosts
            breakpoints={breakpoints}
            segments={segments}
            loaderColor={loaderColor}
          />
        </Route>
        <Route exact path="/users/:id">
          <OthersPosts
            segments={segments}
            breakpoints={breakpoints}
            loaderColor={loaderColor}
          />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetails
            handleCommDelete={handleCommDelete}
            handleCommCreate={handleCommCreate}
            currentUser={currentUser}
            toggle={toggle}
            handleCommEdit={handleCommEdit}
            segments={segments}
          />
        </Route>
        <Route exact path="/myposts">
          <UserPosts
            handleDelete={handleDelete}
            currentUser={currentUser}
            newArray={newArray}
            segments={segments}
          />
        </Route>
      </Switch>
    </div>
  );
}
