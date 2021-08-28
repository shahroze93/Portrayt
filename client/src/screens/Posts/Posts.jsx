import { Link } from "react-router-dom";
import "./Posts.css";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";

export default function Posts(props) {
  const { filteredData, segments, handleSearch, breakpoints } = props;

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
