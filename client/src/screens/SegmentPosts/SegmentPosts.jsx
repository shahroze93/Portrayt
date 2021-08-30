import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneSegment } from "../../services/segments";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";
import { css } from "@emotion/react";
import Loader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SegmentPosts(props) {
  const [segData, setSegData] = useState(null);
  const { id } = useParams();
  const { segments, breakpoints, loading, loaderColor } = props;

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
      <div className="categoryBanner">
        <input
          type="search"
          className="searchBar"
          onChange={(event) => handleSearch(event)}
          placeholder="SEARCH"
        />
        <Link className="catLink" to={`/`}>
          <div className="categoryHeader">Discover</div>
        </Link>
        {segments.map((segment) => (
          <div key={segment.id}>
            <Link className="catLink" to={`/segments/${segment.id}`}>
              <div className="categoryHeader">{segment.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <h1 className="segmentHeader">{segData?.name}</h1>
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
      <div className="loader">
        <Loader
          color={loaderColor}
          loading={loading}
          css={override}
          size={50}
        />
      </div>
    </section>
  );
}
