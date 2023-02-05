import React from "react";
import Blog from "./Blog";

import BlogImage from "../images/blog1.jpg";

import "../styles/Blogs.css";

const Blogs = () => {
  const blogs = [
    {
      blogImage: BlogImage,
      heading: "Blog 1",
      uploadTime: "10 Jan 2023",
      authorName: "abhinav",
      minuteRead: "5",
      blogPreview:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as...",
    },
    {
      blogImage: BlogImage,
      heading: "Blog 2",
      uploadTime: "12 Feb 2023",
      authorName: "shikha",
      minuteRead: "2",
      blogPreview: "blog preview 2",
    },
    {
      blogImage: BlogImage,
      heading: "Blog 3",
      uploadTime: "28 Sept 2013",
      authorName: "divya",
      minuteRead: "10",
      blogPreview: "blog preview 3",
    },
  ];

  return (
    <div className="Blogs">
      <h1> All Blogs </h1>
      <div className="allBlogs">
        {blogs.map((value, index) => {
          return (
            <Blog
              blogImage={value.blogImage}
              heading={value.heading}
              uploadTime={value.uploadTime}
              authorName={value.authorName}
              minuteRead={value.minuteRead}
              blogPreview={value.blogPreview}
              key={index}
              s
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
