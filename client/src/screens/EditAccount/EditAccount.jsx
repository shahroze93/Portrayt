import React from 'react'
import { useState } from 'react';


export default function EditAccount(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { userDelete } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

      }}
    >
      <h3>Edit Account</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          // onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          // onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          // onChange={handleChange}
        />
      </label>
      <br />
      <button>Update</button>
      <button onClick={() => userDelete()}>Delete</button>
    </form>
  );
}
