import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    link_url: "",
    description: "",
  });
  const { posts, handleUpdate, segments } = props;
  const { id } = useParams();
  const [selectedSegment, setSelectedSegment] = useState("default");

  useEffect(() => {
    const fetchPost = () => {
      const postOne = posts.find((post) => post.id === Number(id));
      setFormData({
        name: postOne.name,
        img_url: postOne.img_url,
        link_url: postOne.link_url,
        description: postOne.description,
      });
    };
    if (posts.length) {
      fetchPost();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    selectedSegment === "default"
      ? alert("Please choose a category from the dropdown")
      : handleSubmit(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = segments.find(
      (segment) => segment.name === selectedSegment
    );
    handleUpdate(id, formData, category.id);
  };

  return (
    <section>
      <CategoryBanner segments={segments} />
      <div className="newPostContainer">
        <div className="postTitle">{formData.name}</div>
        {formData.img_url ? (
          <>
            <div>
              <img
                className="postIMG"
                src={formData.img_url}
                alt={formData.name}
              />
            </div>
          </>
        ) : (
          <>ENTER A TITLE OR IMAGE URL BELOW FOR A PREVIEW!</>
        )}
        <div className="detailDesc">{formData.description}</div>
        {formData?.link_url && (
          <div>
            <a className="detailURL" href={formData?.link_url}>
              Link to Website
            </a>
          </div>
        )}
      </div>
      <br />
      <div className="inputForms">
        <form onSubmit={handleConfirm}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Post Title"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <select
            value={selectedSegment}
            placeholder="Category"
            onChange={handleSegmentChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
        focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          >
            <option disabled value="default">
              All Categories
            </option>
            {segments?.map((segment) => (
              <option value={segment.name} key={segment.id}>
                {segment.name}
              </option>
            ))}
          </select>
          <br />
          <input
            type="text"
            name="img_url"
            value={formData.img_url}
            placeholder="Image URL"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <input
            type="text"
            name="link_url"
            value={formData.link_url}
            placeholder="Link URL to Website (optional)"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description/Write up"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <button className="w-5/12 bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full mb-5">
            Submit
          </button>
          <Link to="/myposts">
            <button className="w-5/12 bg-green-200 hover:bg-red-400 text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full mb-5">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
