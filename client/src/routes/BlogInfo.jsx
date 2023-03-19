import React from "react";
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

const BlogInfo = () => {

  const {id} = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/blog/`, {
      params: {
        id: id
      }
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }, []);


  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default BlogInfo;

