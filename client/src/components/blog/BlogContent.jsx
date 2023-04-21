import React from "react";
import parse from "html-react-parser";

const BlogContent = ({ blogText }) => {
  return (
    <>
      <p className="blogContent">{blogText && parse(blogText)}</p>
    </>
  );
};

export default BlogContent;
