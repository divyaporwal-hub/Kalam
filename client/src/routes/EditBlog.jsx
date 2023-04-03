import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EditorConvertToHTML from "../components/EditorConvertToHTML";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import "../styles/Write.css";
import { BASE_URL } from "../helper/ref";
import parse from "html-react-parser";

const EditBlog = () => {
  const { blogId } = useParams();

  const [heading, setHeading] = useState("");
  const [blogText, setBlogText] = useState("");
  const navigate = useNavigate();

  // get the data of the blog by blogId to fill the input fields
  useEffect(() => {
    async function fetchBlogInfo() {
      let response = await Axios.get(`${BASE_URL}/blog/getBlogInfo`, {
        params: {
          id: blogId,
        },
      });

      if (response.data.length) {
        setHeading(response.data[0].blogHeading);
        setBlogText((response.data[0].blogText));
      }
    }

    fetchBlogInfo();
  }, []);

  const localDataObject = JSON.parse(localStorage.getItem("userInfo"));
  const userId = localDataObject.userId;
  function updateContent() {
    Axios.put(`${BASE_URL}/blog/updateBlog`, {
      blogHeading: heading,
      blogText: blogText,
      blogId: blogId,
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
              updateCall={true}
            />
          </div>
          <div className="btn-cnt">
            <button className="btn" onClick={updateContent}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditBlog;
