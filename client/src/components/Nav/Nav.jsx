import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  const { handleLogout, currentUser } = props;

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
