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
      
    </section>
  );
}
