import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>PORTRAYAL</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      {currentUser && (
        <div>
          <Link to='/create-post'>Create Post</Link>
          <Link to='/myposts'>My Posts</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {props.children}
    </header>
  );
}
