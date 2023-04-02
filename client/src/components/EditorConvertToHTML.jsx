import React from "react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; //Snow theme

const EditorConvertToHTML = ({ blogText, setBlogText }) => {
  const placeholder = "Write your blog here...";
  const { quill, quillRef } = useQuill({ placeholder });
  if(quill) {
    quill.clipboard.dangerouslyPasteHTML(blogText);
  }

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setBlogText(quill.root.innerHTML);
      });
    }
  }, [quill, setBlogText]);

  return (
    <div style={{ width: 870, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default EditorConvertToHTML;
