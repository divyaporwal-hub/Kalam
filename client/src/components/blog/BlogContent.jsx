import React from "react";
import parse from "html-react-parser"
// var parse = require('html-react-parser');


const BlogContent = ({blogText}) => {
  return (
    <>
      {blogText && parse(blogText)}
    </>
  );
};

export default BlogContent;
