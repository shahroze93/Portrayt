import "./PostDetails.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOnePost } from "../../services/posts";
import CommentCreate from "../CommentCreate/CommentCreate";
import CommentEdit from "../CommentEdit.jsx/CommentEdit";

export default function PostDetails(props) {
  const [postData, setPostData] = useState(null);
  const [comment, setComment] = useState(null);
  const { id } = useParams();
  const {
    handleCommCreate,
    handleCommDelete,
    currentUser,
    toggle,
    handleCommEdit,
    segments,
  } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await getOnePost(id);
      setPostData(singlePost);
    };
    fetchPost();
  }, [id, toggle]);

  return (
    <section>
      <hr />
      <div className="categoryBanner">
        <Link className="catLink" to={`/`}>
          <div className="categoryHeader">Discover</div>
        </Link>
        {segments.map((segment) => (
          <div key={segment.id}>
            <Link className="catLink" to={`/segments/${segment.id}`}>
              <div className="categoryHeader">{segment.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <div className="postContainer">
        <div className="detailBanner">
          <div className="detailCreator">{postData?.user?.username}</div>
          <div className="detailName">{postData?.name}</div>
          <Link
            className="detailCat"
            to={`/segments/${postData?.segments[0]?.id}`}>
            {postData?.segments[0]?.name}
          </Link>
        </div>
        <img
          className="detailImage"
          src={postData?.img_url}
          alt={postData?.name}
        />
        <div className="detailDesc">{postData?.description}</div>
        <div className="detailURL">{postData?.link_url}</div>
      </div>
      <CommentCreate
        currentUser={currentUser}
        handleCommCreate={handleCommCreate}
        postData={postData}
      />
      <CommentEdit
        currentUser={currentUser}
        handleCommEdit={handleCommEdit}
        comment={comment}
      />
      {postData?.comments
        ?.sort(
          ({ id: previousID }, { id: currentID }) => previousID - currentID
        )
        .slice(0)
        .reverse()
        .map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>{comment?.user?.username}</p>
            {currentUser?.id === comment.user_id && (
              <div>
                <button onClick={() => setComment(comment)}>EDIT</button>
                <button onClick={() => handleCommDelete(comment.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}
