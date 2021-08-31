import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  const { handleLogout, currentUser, themeToggler } = props;

  return (
    <section className="navbarContainer">
      <nav className="nav">
        <input id="nav-toggle" type="checkbox" />
        <div className="logoBox">
          <Link className="logoLink" to="/">
            PORTRAYT
          </Link>
          {currentUser && (
            <Link className="userLink" to="/myposts">
              Hi, {currentUser?.username}!
            </Link>
          )}
          <button onClick={themeToggler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 26 26"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
        <ul className="links">
          {currentUser ? (
            <div className="authorizedNav">
              <li>
                <Link className="navOption" to="/posts/new">
                  Create Post
                </Link>
              </li>
              <li>
                <Link className="navOption" to="/myposts">
                  My Posts
                </Link>
              </li>
              <li>
                <div className="logout" onClick={handleLogout}>
                  Logout
                </div>
              </li>
            </div>
          ) : (
            <div className="loginNsignup">
              <li className="pagelinks">
                <Link className="navOption" to="/login">
                  Login
                </Link>
              </li>
              <li className="pagelinks">
                <Link className="navOption" to="/signup">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </section>
  );
}
