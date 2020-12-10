import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import RichTextEditor from "react-rte";
import Editor from "../../utility/Editor/index.jsx";
import LoadingSubmitBtn from "../../utility/LoadingSubmitBtn/index.jsx";

const AddEditNoteForm = ({ setEditNote, updateNote, product }) => {
  const { note, id } = product;
  const [noteText, setNoteText] = useState(
    RichTextEditor.createValueFromString(note, "html")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote({ id, note: noteText.toString("html") });
    setEditNote(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Editor markup={noteText} setMarkup={setNoteText} />
        <div className="mt-3 d-flex">
          <LoadingSubmitBtn
            text="Save"
            size="small"
            disabled={!noteText.toString("html")}
          />
          {note && (
            <div className="ml-3">
              <Button
                size="small"
                variant="outlined"
                onClick={() => setEditNote(false)}
                type="button"
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEditNoteForm;
