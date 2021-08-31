import { Link } from "react-router-dom";
import "./UserPosts.css";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

export default function UserPosts(props) {
  const { handleDelete, currentUser, newArray, segments } = props;

  const confirmDelete = async (id) => {
    let entry = prompt(
      "Please enter username to confirm post deletion (case sensitive)",
      ""
    );
    if (entry === null || entry === "") {
      alert("NO INPUT - DELETION CANCELLED");
    } else if (entry === currentUser.username) {
      alert("POST DELETION COMPLETE");
      await handleDelete(id);
    } else {
      alert(
        "INCORRECT ENTRY - TRY AGAIN TO CONFIRM - (usernames are case sensitive)"
      );
    }
  };

  return (
    <div>
      <CategoryBanner segments={segments} />
      <h3 className="segmentHeader">My Posts</h3>
      <br />
      <Link className="navOption" to={`/edit-account`}>
        Edit Account
      </Link>
      <div className="userPostsContainer">
        {newArray?.map((post) => (
          <div className="userPostDiv" key={post.id}>
            <div className="userPostCard">
              <Link to={`/posts/${post.id}`}>
                <h4 className="userPostName">{post.name}</h4>
                <img
                  className="userPostImg"
                  src={post.img_url}
                  alt={post.name}
                />
              </Link>
              <div className="mypostBtns">
                <Link to={`/posts/${post.id}/edit`}>
                  <button className="editDelete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 18"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </Link>
                <button
                  className="editDelete"
                  onClick={() => confirmDelete(post.id)}
                >
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
