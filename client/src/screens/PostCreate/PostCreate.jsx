import { useState } from "react";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    link_url: "",
    description: "",
  });
  const { name, img_url, link_url, description } = formData;
  const { handleCreate, segments } = props;
  const [selectedSegment, setSelectedSegment] = useState("default");

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
    handleCreate(formData, category.id);
  };

  return (
    <section>
      <h3>Create Post</h3>
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
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Link URL to Website (optional):
          <input
            type="text"
            name="link_url"
            value={link_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
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
        <button>Submit</button>
      </form>
    </section>
  );
}
