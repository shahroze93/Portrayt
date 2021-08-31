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
            <div className="categoryHeader">Discover</div>
          </Link>
          {segments.map((segment) => (
            <div key={segment.id}>
              <Link className="catLink" to={`/segments/${segment.id}`}>
                <div className="categoryHeader">{segment.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
