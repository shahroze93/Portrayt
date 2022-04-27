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
          <Link rel="preload" className="logoLink" to="/">
            PORTRAYT
          </Link>
          {currentUser && (
            <Link className="userLink" to="/myposts">
              Hi, {currentUser?.username}!
            </Link>
          )}
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={themeToggler}
            />
            <label htmlFor="checkbox" className="toggleButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                className="bi-moon"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                className="bi-sun"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
              <div className="ball" />
            </label>
          </div>
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
