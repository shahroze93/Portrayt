import { Link } from "react-router-dom";
import "./Posts.css";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";

export default function Posts(props) {
  const { filteredData, segments, handleSearch } = props;

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
        {segments.map((segment) => (
          <div key={segment.id}>
            <Link to={`/segments/${segment.id}`}>
              <h3>{segment.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <hr />
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
