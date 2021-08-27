import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  const { handleLogout, currentUser } = props;
  return (
    <section className="navbarContainer">
      <div className="logoNuser">
        <Link to="/">
          <div className="logo">Portrayt</div>
        </Link>
        {currentUser && (
          <div>
            <Link to={`/edit-account`}>
              <p>{currentUser?.username}</p>
            </Link>
          </div>
        )}
      </div>
      {currentUser ? (
        <div className="authorizedNav">
          <Link to="/posts/new">Create Post</Link>
          <Link to="/myposts">My Posts</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="loginNsignup">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </section>
  );
}
