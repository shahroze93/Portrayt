import React from "react";
import { useState } from "react";

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { handleCommCreate, postData } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCommCreate(formData, postData.id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add Comment</div>
        <div>{props?.user?.username}</div>
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
