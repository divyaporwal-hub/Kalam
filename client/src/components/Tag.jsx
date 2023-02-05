import React from "react";
import "../styles/Tag.css";
const Tag = (props) => {
  return <div className="Tag">#{props.tagName}</div>;
};

export default Tag;
