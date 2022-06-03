import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBanner(props) {
  const { segments } = props;

  return (
    <div>
      <hr />
      <div className="categoryBanner">
        <div className="catOptions">
          <Link className="catLink" to={`/`}>
            <h1 className="categoryHeader">Discover</h1>
          </Link>
          {segments.map((segment) => (
            <div key={segment.id}>
              <Link className="catLink" to={`/segments/${segment.id}`}>
                <h1 className="categoryHeader">{segment.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
