import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function RichText({ placeholder }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          padding: "2px",
          height: "400px",
        }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default RichText;
