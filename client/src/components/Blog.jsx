import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Blog.css";

const Blog = ({
  blogImage,
  heading,
  uploadTime,
  authorName,
  minuteRead,
  blogPreview,
}) => {
  return (
    <div className="Blog" >
      <div className="blogImage">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="blogDetails">
        <h1>{heading}</h1>
        <div className="blogInfo">
          <div>{uploadTime}</div> • <div>{authorName}</div> •
          <div>{minuteRead}</div>
        </div>
        <div className="blogPreview">{blogPreview.slice(150,0) + "..."}</div>
      </div>
    </div>
  );
};

export default Blog;

// ction saveContent() {
//     Axios.post(`${BASE_URL}/blog/saveBlog`, {
//       blogHeading: heading,
//       blogText: blogText,
//       userName: userName,
//       saveDate: moment(new Date()).format("ll"),
//     })
//       .then((response) => {
//         console.log(response);
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
