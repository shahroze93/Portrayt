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
    e.target.reset();
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
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
