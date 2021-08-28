import React from "react";
import { useState, useEffect } from "react";

export default function CommentEdit(props) {
  const { handleCommEdit, currentUser, comment, switchBox0 } = props;
  const [formData, setFormData] = useState({
    content: "",
  });

  useEffect(() => {
    const fetchComment = () => {
      setFormData(comment);
    };
    if (comment) {
      fetchComment();
    }
  }, [comment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCommEdit(comment.id, formData);
    switchBox0()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Edit Comment</div>
        <div>{currentUser?.username}</div>
        <input
          type="text"
          value={formData?.content}
          name="content"
          placeholder="enter a public comment"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
