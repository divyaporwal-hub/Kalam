import React from "react"

const BlogInfo = ({
  blogImage,
  heading,
  uploadTime,
  authorName,
  minuteRead,
  blogPreview,
}) => {
  return (
    <div className="Blog">
      <div className="blogImage">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="blogDetails">
        <h1>{heading}</h1>
        <div className="blogInfo">
          <div>{uploadTime}</div> • <div>{authorName}</div> •
          <div>{minuteRead}</div>
        </div>
        <div className="blogPreview">{blogPreview}</div>
      </div>
    </div>
  );
}
export default BlogInfo;

