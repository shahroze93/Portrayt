import React from "react";
import { useState } from "react";

export default function CommentEdit() {
  const { handleCommCreate, postData, currentUser } = props;
  const [formData, setFormData] = useState({
    content: postData.id,
  });
  const { content } = formData;

  // useEffect(() => {
  //   const fetchComment = () => {
  //     const findComment = comments.find((comment) => comment.id === Number(id));
  //     setFormData({
  //       content: findComment.content,
  //     });
  //   };
  //   if (comments.length) {
  //     fetchComment();
  //   }
  // }, [comments, id]);

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Edit Comment</div>
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
