import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  const { handleLogout, currentUser } = props;
  return (
    <section className="navbarContainer">
      <div className="logoNuser">
        <Link className="logoLink" to="/">
          <div className="logo">PORTRAYT</div>
        </Link>
        {currentUser && (
          <div>
            <Link className="userLink" to={`/edit-account`}>
              Hi, {currentUser?.username}!
            </Link>
          </div>
        )}
      </div>
      {currentUser ? (
        <div className="authorizedNav">
          <Link className="navOption" to="/posts/new">
            Create Post
          </Link>
          <Link className="navOption" to="/myposts">
            My Posts
          </Link>
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : (
        <div className="loginNsignup">
          <Link className="navOption" to="/login">
            Login
          </Link>
          <Link className="navOption" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
}
