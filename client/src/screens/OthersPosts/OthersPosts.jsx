import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOneUser } from "../../services/users";

export default function OthersPosts(props) {
  const [customerData, setCustomerData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCustomer = async () => {
      const singleCustomer = await getOneUser(id);
      setCustomerData(singleCustomer);
    };
    fetchCustomer();
  }, [id]);

  return (
    <section>
      <h1>{customerData?.username}</h1>
      {customerData?.posts?.map((post) => (
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
