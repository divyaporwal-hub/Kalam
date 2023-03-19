import React from "react";
import {useParams} from "react-router-dom"

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

