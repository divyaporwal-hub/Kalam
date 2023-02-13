import React from "react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; //Snow theme

const EditorConvertToHTML = ({ blogText, setBlogText }) => {
  const placeholder = "Write your blog here......";
  const { quill, quillRef } = useQuill({ placeholder });

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log("SRC: ", source);
        // console.log("OLD: ", oldDelta);
        setBlogText(quill.getText());
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill, setBlogText]);

  // console.log(quill); // undefined > Quill Object
  // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div style={{ width: 870, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default EditorConvertToHTML;
