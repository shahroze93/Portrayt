import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneSegment } from "../../services/segments";

export default function SegmentPosts(props) {
  const { segments } = props;
  const [segData, setSegData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFoodItem = async () => {
      const singleSegment = await getOneSegment(id);
      setSegData(singleSegment);
    };
    fetchFoodItem();
  }, [id]);

  return (
    <section>
      <h1>{segData?.name}</h1>
      {segData?.posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.name}</h4>
            <img src={post.img_url} alt={post.name} />
          </Link>
          <p>{post.user?.username}</p>
          <p>{post.description}</p>
          <p>{post?.segments?.name}</p>
        </div>
      ))}
    </section>
  );
}
