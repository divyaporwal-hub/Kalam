import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagSuggestion = () => {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
    </div>
  );
};

export default TagSuggestion;