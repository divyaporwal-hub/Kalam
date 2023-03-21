import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EditorConvertToHTML from "../components/EditorConvertToHTML";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "../styles/Write.css";
import { BASE_URL } from "../helper/ref";

const Write = () => {
  const [heading, setHeading] = useState("");
  const [blogText, setBlogText] = useState("");
  const navigate = useNavigate();

  const localDataObject = JSON.parse(localStorage.getItem("userInfo"));
  const userName = localDataObject.userName;
  // const stats = readingTime(blogText);
  // console.log(stats);
  function saveContent() {
    Axios.post(`${BASE_URL}/blog/saveBlog`, {
      blogHeading: heading,
      blogText: blogText,
      userName: userName,
      saveDate: moment(new Date()).format("ll"),
    })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />

      <div className="Write">
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <div>
            <textarea
              className="blogHeading"
              placeholder="New post title here..."
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            ></textarea>
          </div>
          <div className="editorContainer">
            <EditorConvertToHTML
              blogText={blogText}
              setBlogText={setBlogText}
            />
          </div>
          <div className="btn-cnt">
            <button className="btn" onClick={saveContent}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Write;
