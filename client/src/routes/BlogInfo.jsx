import React from "react";
import {useParams} from "react-router-dom"

const BlogInfo = () => {

  const {id} = useParams();

  return (
    <div>
      blog is: {id}
    </div>
  );
}
export default BlogInfo;

