import { Link } from "react-router-dom";
import "./Posts.css";
import Masonry from "react-masonry-css";
import Cards from "../Cards/Cards";

export default function Posts(props) {
  const { filteredData, segments, handleSearch } = props;

  const breakpoints = {
    default: 4,
    1500: 4,
    1100: 3,
    800: 2,
    550: 1,
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
      <input
        type="text"
        className="searchBar"
        onChange={(event) => handleSearch(event)}
        placeholder="SEARCH"
      />
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
            // <div key={post.id}>
            //   <Link to={`/posts/${post.id}`}>
            //     <h4>{post.name}</h4>
            //     <img src={post.img_url} alt={post.name} />
            //   </Link>
            //   <Link to={`/users/${post.user?.id}`}>
            //     <h4>{post.user?.username}</h4>
            //   </Link>
            //   <p>{post.description}</p>
            //   {post?.segments?.map((segment) => (
            //     <p key={segment.id}>{segment.name}</p>
            //   ))}
            // </div>
            <div className="productList" key={post.id}>
              <Cards post={post} />
            </div>
          ))}
      </Masonry>
    </section>
  );
}
