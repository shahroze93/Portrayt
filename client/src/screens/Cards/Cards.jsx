import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards(props) {
  const { post } = props;

  return (
    <div className="cardContainer">
      <div className="cardInfo">
        <Link to={`/posts/${post.id}`}>
          <img
            loading="lazy"
            importance="auto"
            decoding="async"
            className="cardImage"
            src={post.img_url}
            alt={post.name}
          />
        </Link>
        {post?.segments?.map((segment) => (
          <div className="cardCategory" key={segment.id}>
            <Link to={`/segments/${segment.id}`}>{segment.name}</Link>
          </div>
        ))}
        <div className="userNamePost">
          <Link className="cardUser" to={`/users/${post.user?.id}`}>
            {post.user?.username}
          </Link>
          <Link className="cardName" to={`/posts/${post.id}`}>
            <h1>{post.name}</h1>
          </Link>
        </div>
        <hr />
        <div className="cardDesc">{post.description}</div>
      </div>
    </div>
  );
}

export default Cards;
