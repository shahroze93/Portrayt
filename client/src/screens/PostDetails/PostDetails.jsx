import "./PostDetails.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOnePost } from "../../services/posts";
import CommentCreate from "../CommentCreate/CommentCreate";
import CommentEdit from "../CommentEdit.jsx/CommentEdit";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

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

  function hideShow() {
    let x = document.getElementById("commBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

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
      <CategoryBanner segments={segments} />
      <div className="postContainer">
        <div className="detailBanner">
          <Link className="detailCreator" to={`/users/${postData?.user?.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
        {postData?.link_url && (
          <div className="mb-5">
            <a className="detailURL" href={postData?.link_url}>
              Link to Website
            </a>
          </div>
        )}
      </div>
      <section className="commentContainer">
        <div className="commSectionHeader">Comments</div>
        {currentUser ? (
          <>
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
          </>
        ) : (
          <div className="noLoginComment">
            Please login or sign up to comment
          </div>
        )}
        {postData?.comments?.length ? (
          <>
            <div>
              <button className="hideBtn" onClick={hideShow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Hide/Show
              </button>
            </div>
          </>
        ) : (
          <div className="mt-5">Be the first to comment!</div>
        )}
        <div id="commBox">
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
                  <p className="text-gray-600 text-sm ">{comment.content}</p>
                </div>
                {currentUser?.id === comment.user_id && (
                  <div className="max-w-md md:max-w-2xl m-auto flex justify-end mb-2">
                    <button
                      className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleEdit(comment)}
                    >
                      EDIT
                    </button>
                    <button
                      className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleCommDelete(comment.id)}
                    >
                      DELETE
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}
