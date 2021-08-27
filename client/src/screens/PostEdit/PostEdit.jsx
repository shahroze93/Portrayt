import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="newPostContainer">
        <div className="postTitle">{formData.name}</div>
        <img className="postIMG" src={formData.img_url} alt={formData.name} />
        <div className="postLink">{formData.link_url}</div>
        <div className="postDesc">{formData.description}</div>
      </div>
      <br />
      <form onSubmit={handleConfirm}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>Category:</label>
        <select value={selectedSegment} onChange={handleSegmentChange}>
          <option disabled value="default">
            All Categories
          </option>
          {segments?.map((segment) => (
            <option value={segment.name} key={segment.id}>
              {segment.name}
            </option>
          ))}
        </select>
        <label>
          Image URL:
          <input
            type="text"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Link URL to Website (optional):
          <input
            type="text"
            name="link_url"
            value={formData.link_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}
