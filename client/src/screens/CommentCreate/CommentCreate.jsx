import React from "react";
import { useState } from "react";

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { handleCommCreate, postData, currentUser } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCommCreate(formData, postData.id);
    setFormData({ content: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add Comment</div>
        <div>{currentUser?.username}</div>
        <input
          type="text"
          value={content}
          name="content"
          placeholder="enter a public comment"
          onChange={handleChange}
          className="w-9/12 border rounded-full py-3 px-3 border-green-400 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
        />
        <button
          className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
