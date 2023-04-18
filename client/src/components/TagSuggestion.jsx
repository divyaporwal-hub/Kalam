import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagSuggestion = ({ blogTags, setBlogTags }) => {
  return (
    <div>
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
