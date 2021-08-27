import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOnePost } from "../../services/posts";
import CommentCreate from "../CommentCreate/CommentCreate";

export default function PostDetails(props) {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();
  const { handleCommCreate } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await getOnePost(id);
      setPostData(singlePost);
    };
    fetchPost();
  }, [id]);

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
      <CommentCreate handleCommCreate={handleCommCreate} postData={postData} />
      {postData?.comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>{comment?.user?.username}</p>
        </div>
      ))}
    </section>
  );
}
