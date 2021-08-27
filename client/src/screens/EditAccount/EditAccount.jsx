import React from "react";
import { useState, useEffect } from "react";

export default function EditAccount(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { userDelete, currentUser } = props;

  useEffect(() => {
    const fetchUser = () => {
      setFormData(currentUser);
    };
    if (currentUser) {
      fetchUser();
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Account</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Update</button>
      <br />
      <button onClick={() => userDelete()}>Delete Account</button>
    </form>
  );
}
