import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagSuggestion = () => {
  const [blogTags, setBlogTags] = useState([""]);

  // let localData = JSON.parse(localStorage.getItem("userInfo"));
  // let userId = localData.userId;


  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={blogTags}
        onChange={setBlogTags}
        name="coding"
        placeHolder="Enter Tags related to your blog:"
      />
    </div>
  );
};

export default TagSuggestion;