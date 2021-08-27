import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOnePost } from "../../services/posts";
import CommentCreate from "../CommentCreate/CommentCreate";

export default function PostDetails(props) {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();
  const { handleCommCreate, handleCommDelete, currentUser, toggle } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await getOnePost(id);
      setPostData(singlePost);
    };
    fetchPost();
  }, [id, toggle]);

  return (
    <section>
      <h2>{postData?.user?.username}</h2>
      <h4>{postData?.name}</h4>
      <Link to={`/segments/${postData?.segments[0]?.id}`}>
        <p>{postData?.segments[0]?.name}</p>
      </Link>
      <img src={postData?.img_url} alt={postData?.name} />
      <p>{postData?.description}</p>
      <p>{postData?.link_url}</p>
      <CommentCreate
        currentUser={currentUser}
        handleCommCreate={handleCommCreate}
        postData={postData}
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
              <button onClick={() => handleEdit(comment.id)}>EDIT</button>
              <button onClick={() => handleCommDelete(comment.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}
