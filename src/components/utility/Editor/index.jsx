import React from "react";
import RichTextEditor from "react-rte";

const Editor = ({ markup, setMarkup }) => {
  return (
    <RichTextEditor value={markup} onChange={(value) => setMarkup(value)} />
  );
};

export default Editor;
