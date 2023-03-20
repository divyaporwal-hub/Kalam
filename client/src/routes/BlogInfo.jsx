import React from "react";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper/ref";

const BlogInfo = () => {

  const {id} = useParams();

  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/blog/getBlogInfo`, {
      params: {
        id: id
      }
    }).then((response) => {
      setBlogData(response.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }, []);


  return (
    <div>
      <h1>{blogData.blogHeading}</h1>
      <p>{blogData.blogText}</p>
    </div>
  );
}

export default BlogInfo;

