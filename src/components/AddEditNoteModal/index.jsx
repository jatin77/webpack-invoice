import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import ReactHtmlParser from "react-html-parser";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addNote, updateNote } from "../../redux/product/product.action";
import AddEditNoteForm from "./AddEditNoteForm/index.jsx";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: "300px",
  },
}))(MuiDialogContent);

const AddEditNoteModal = ({
  openModal,
  handleCloseModal,
  product,
  updateNote,
}) => {
  const { name, note } = product;
  const [editNote, setEditNote] = useState(false);

  return (
    <div>
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          Note
        </DialogTitle>
        <DialogContent dividers>
          {note && !editNote ? (
            <>
              <h6>{name}</h6>
              <hr />
              {ReactHtmlParser(note)}
              <div className="d-flex justify-content-end">
                <Tooltip title="Edit Note">
                  <IconButton
                    aria-label="edit note"
                    onClick={() => setEditNote(true)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          ) : (
            <AddEditNoteForm
              product={product}
              setEditNote={setEditNote}
              updateNote={updateNote}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(addNote(data)),
  updateNote: (data) => dispatch(updateNote(data)),
});

export default connect(null, mapDispatchToProps)(AddEditNoteModal);
