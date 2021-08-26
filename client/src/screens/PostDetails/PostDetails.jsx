import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOnePost } from "../../services/posts";

export default function PostDetails(props) {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await getOnePost(id);
      setPostData(singlePost);
    };
    fetchPost();
  }, [id]);

  return (
    <section>
      <h4>{postData.name}</h4>
      <img src={postData.img_url} alt={post.name} />
      <h4>{postData.user?.username}</h4>
      <p>{postData.description}</p>
      {postData?.segments?.map((segment) => (
        <Link key={segment.id} to={`/segments/${segment.id}`}>
          <p>{segment.name}</p>
        </Link>
      ))}
    </section>
  );
}
