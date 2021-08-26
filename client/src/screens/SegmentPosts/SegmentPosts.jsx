import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneSegment } from "../../services/segments";

export default function SegmentPosts(props) {
  const [segData, setSegData] = useState(null);
  const { id } = useParams();
  const { segments } = props;

  useEffect(() => {
    const fetchSegment = async () => {
      const singleSegment = await getOneSegment(id);
      setSegData(singleSegment);
    };
    fetchSegment();
  }, [id]);

  return (
    <section>
      <hr />
      <div>
        {segments.map((segment) => (
          <div key={segment.id}>
            <Link to={`/segments/${segment.id}`}>
              <h3>{segment.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <hr />
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
