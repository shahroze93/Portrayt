import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneUser } from "../../services/users";
import Cards from "../Cards/Cards";
import Masonry from "react-masonry-css";

export default function OthersPosts(props) {
  const [customerData, setCustomerData] = useState(null);
  const { id } = useParams();
  const { breakpoints, segments } = props;

  useEffect(() => {
    const fetchCustomer = async () => {
      const singleCustomer = await getOneUser(id);
      setCustomerData(singleCustomer);
    };
    fetchCustomer();
  }, [id]);

  return (
    <section>
      <hr />
      <div className="categoryBanner">
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
      <h1 className="segmentHeader">{customerData?.username}</h1>
      <section className="masonGridContainer">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {customerData?.posts?.map((post) => (
            <div className="productList" key={post.id}>
              <Cards post={post} />
            </div>
          ))}
        </Masonry>
      </section>
    </section>
  );
}
