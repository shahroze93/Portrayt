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
      setFilteredData(singleSegment.posts);
    };
    fetchSegment();
  }, [id]);

  const [filteredData, setFilteredData] = useState(segData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = segData.posts.filter((post) => {
      return post.name.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

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
      <input
        type="text"
        className="searchBar"
        onChange={(event) => handleSearch(event)}
        placeholder="SEARCH"
      />
      {filteredData?.map((post) => (
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
