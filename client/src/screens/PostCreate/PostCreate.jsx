import { useState } from "react";
import "./PostCreate.css";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

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
      <CategoryBanner segments={segments} />
      <h3 className="segmentHeader">Create Post</h3>
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
      </div>
      <br />
      <div className="inputForms">
        <form onSubmit={handleConfirm}>
          <input
            type="text"
            name="name"
            value={name}
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
            value={img_url}
            placeholder="Image URL"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <input
            type="text"
            name="link_url"
            value={link_url}
            placeholder="Link URL to Website (optional)"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <textarea
            type="text"
            name="description"
            value={description}
            placeholder="Description/Write up"
            onChange={handleChange}
            className="w-9/12 border rounded-2xl py-3 px-3 border-green-400 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
          />
          <br />
          <button
            className="w-5/12 bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full mb-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
