import React from "react";
import { useState } from "react";
import { postComment } from "../../services/comments";

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { handleCommCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCommCreate(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add Comment</div>
        <div>{props?.user?.username}</div>
        <input
          type="text"
          value={formData.content}
          name="content"
          placeholder="enter a public comment"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
