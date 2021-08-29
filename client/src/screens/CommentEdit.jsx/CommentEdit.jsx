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
    switchBox0();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Edit Comment</div>
        <div className="currentUserTag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {currentUser?.username}
        </div>
        <input
          type="text"
          value={formData?.content}
          name="content"
          placeholder="enter a public comment"
          onChange={handleChange}
          className="w-8/12 md:w-9/12 border rounded-full py-3 px-3 border-green-400 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent m-3"
        />
        <button
          className="bg-green-200 hover:bg-primary-green text-pri-teal hover:text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >SUBMIT</button>
        <button onClick={switchBox0}>CANCEL</button>
      </form>
    </div>
  );
}
