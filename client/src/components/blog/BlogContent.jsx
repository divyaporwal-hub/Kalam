import React from "react";
import parse from "html-react-parser";

const BlogContent = ({ blogText }) => {
  return (
    <>
      <div className="blogContent">{blogText && parse(blogText)}</div>
    </>
  );
};

export default BlogContent;
