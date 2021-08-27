import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneSegment } from "../../services/segments";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";

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

  const breakpoints = {
    default: 5,
    1500: 5,
    1200: 4,
    1000: 3,
    800: 2,
    550: 1,
  };

  return (
    <section>
      <hr />
      <div className="categoryBanner">
        <Link to={`/`}>
          <h3>Discover</h3>
        </Link>
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
      <section className="masonGridContainer">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredData
            ?.sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .slice(0)
            .reverse()
            .map((post) => (
              <div className="productList" key={post.id}>
                <Cards post={post} />
              </div>
            ))}
        </Masonry>
      </section>
    </section>
  );
}
