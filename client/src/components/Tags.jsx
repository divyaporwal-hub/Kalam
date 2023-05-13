import React from "react";
import Tag from "./Tag";

import "../styles/Tags.css";

const Tags = () => {
  // axios.get(`${BASE_URL}/blog/getblogswithmaxlike`,{
  //   params:{
  //     id;
  //   }
  // })
  return (
    <div className="Tags">
      <h1> Recommened Topics</h1>
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
