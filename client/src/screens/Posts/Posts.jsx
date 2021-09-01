import { Link } from "react-router-dom";
import "./Posts.css";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";
import { css } from "@emotion/react";
import Loader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Posts(props) {
  const {
    filteredData,
    segments,
    handleSearch,
    breakpoints,
    loading,
    loaderColor,
  } = props;

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
        <div className="catOptions">
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

// to arrange the posts in the app to show the latest to oldest I needed to sort through the data to arrange by the latest id to the oldest - assistance was taken from ->https://stackoverflow.com/questions/51219133/how-to-sort-a-map-by-a-specific-field-in-es6-react/51219236
