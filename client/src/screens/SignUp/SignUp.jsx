import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}
    >
      <div className="flex items-center justify-center mt-10">
        <div className="bg-primary-green flex flex-col w-80 border rounded-3xl px-8 pb-10 pt-4 shadow-md">
          <div>
            <Link className="float-right" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          <div className="text-white">
            <h1 className="font-comfortaa text-4xl">SIGN UP</h1>
          </div>
          <div className="flex flex-col space-y-8 mt-6">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="border rounded-xl py-3 px-3 border-green-400 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border rounded-xl py-3 px-3 border-green-400 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border rounded-xl py-3 px-3 border-green-500 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button className="border border-green-400 bg-pri-teal text-white rounded-3xl py-3 font-semibold hover:bg-blue-600">
              Submit
            </button>
            <div className="text-pri-teal font-semibold">
              Already have an account?{" "}
              <Link
                className="font-bold  text-white hover:text-blue-600"
                to="/login"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
