import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'><h1>PORTRAYT</h1></Link>
      {currentUser ? (
        <div>
          <Link to={`/edit-account`}><p>{currentUser.username}</p></Link>
        </div>
      ) : (
          <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          </div>
      )}
      {currentUser && (
        <div>
          <Link to='/posts/new'>Create Post</Link>
          <Link to='/myposts'>My Posts</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {props.children}
    </header>
  );
}
