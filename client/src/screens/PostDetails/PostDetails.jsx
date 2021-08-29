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

  function switchBox1() {
    let x = document.getElementById("editBox");
    x.style.display = "block";
    let y = document.getElementById("newBox");
    y.style.display = "none";
  }

  function switchBox0() {
    let x = document.getElementById("editBox");
    x.style.display = "none";
    let y = document.getElementById("newBox");
    y.style.display = "block";
  }

  const handleEdit = (comment) => {
    setComment(comment);
    switchBox1();
  };

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
          <Link className="detailCreator" to={`/users/${postData?.user?.id}`}>
            {postData?.user?.username}
          </Link>
          <div className="detailName">{postData?.name}</div>
          <Link
            className="detailCat"
            to={`/segments/${postData?.segments[0]?.id}`}
          >
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
      <div id="newBox">
        <CommentCreate
          currentUser={currentUser}
          handleCommCreate={handleCommCreate}
          postData={postData}
        />
      </div>
      <div id="editBox">
        <CommentEdit
          currentUser={currentUser}
          handleCommEdit={handleCommEdit}
          comment={comment}
          switchBox0={switchBox0}
        />
      </div>
      <section className="commentContainer">
        {postData?.comments
          ?.sort(
            ({ id: previousID }, { id: currentID }) => previousID - currentID
          )
          .slice(0)
          .reverse()
          .map((comment) => (
            <div key={comment.id}>
              <div className="bg-white max-w-md md:max-w-2xl m-auto rounded-2xl p-3  flex flex-col justify-center items-start shadow-lg mb-2">
                <h3 className="text-primary-green font-semibold text-lg">
                  {comment?.user?.username}
                </h3>
                <p className="text-gray-600 text-lg ">{comment.content}</p>
              </div>
              {currentUser?.id === comment.user_id && (
                <div className="max-w-md md:max-w-2xl m-auto flex justify-end mb-2">
                  <button
                    class="shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleEdit(comment)}
                  >
                    EDIT
                  </button>
                  <button
                    class="shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => handleCommDelete(comment.id)}
                  >
                    DELETE
                  </button>
                </div>
              )}
            </div>
          ))}
      </section>
    </section>
  );
}
