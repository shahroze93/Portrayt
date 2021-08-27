import React from "react";
import './Cards.css';
import { Link } from "react-router-dom";

function Cards(props) {
  const { post } = props;

  return (
    <div className="cardContainer">
      <div className="cardInfo">
        <Link to={`/posts/${post.id}`}>
          <h4>{post.name}</h4>
          <img className="cardImage" src={post.img_url} alt={post.name} />
        </Link>
        <Link to={`/users/${post.user?.id}`}>
          <h4>{post.user?.username}</h4>
        </Link>
        <p>{post.description}</p>
        {post?.segments?.map((segment) => (
          <p key={segment.id}>{segment.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Cards;
