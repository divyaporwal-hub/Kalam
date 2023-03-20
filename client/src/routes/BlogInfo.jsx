import React from "react";
import {useParams} from "react-router-dom"

const BlogInfo = () => {

  const {id} = useParams();

  return (
    <div>
      follow my blogs on this id: {id}
    </div>
  );
}
export default BlogInfo;

