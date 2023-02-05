import React from "react";
import Tag from "./Tag";

import "../styles/Tags.css";

const Tags = () => {
  return (
    <div className="Tags">
      <h1> Trending ⚡</h1>
      <div className="allTags">
        <Tag tagName="javaScript" />
        <Tag tagName="python" />
        <Tag tagName="react" />
        <Tag tagName="mongodb" />
      </div>
    </div>
  );
};

export default Tags;
