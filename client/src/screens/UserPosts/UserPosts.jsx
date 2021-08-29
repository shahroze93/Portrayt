import { Link } from "react-router-dom";
import "./UserPosts.css";

export default function UserPosts(props) {
  const { handleDelete, currentUser, newArray } = props;

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
      <h3 className="segmentHeader">My Posts</h3>
      <Link to={`/edit-account`}>Edit Account</Link>
      <div className="userPostsContainer">
        {newArray?.map((post) => (
          <div className="userPostDiv" key={post.id}>
            <div className="userPostCard">
              <Link to={`/posts/${post.id}`}>
                <h4>{post.name}</h4>
                <img src={post.img_url} alt={post.name} />
              </Link>
              <div>
                <Link to={`/posts/${post.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => confirmDelete(post.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
