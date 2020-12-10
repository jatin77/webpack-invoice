import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LoadingSubmitBtn from "../utility/LoadingSubmitBtn/index.jsx";
import "./style.scss";
import { connect } from "react-redux";
import { updatePassword } from "../../redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import InputField from "../utility/inputField/index.jsx";

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
  },
}))(MuiDialogContent);

const ChangePasswordModal = ({
  openModal,
  handleCloseModal,
  updatePassword,
  user,
}) => {
  const { password } = user;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || password !== currentPassword) {
      alert("Invalid inputs");
    } else {
      updatePassword(newPassword);
      handleCloseModal();
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          Change Password
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className="changePassword-form">
            <p className="text-muted">
              <small>Use 123 as current password for google login users</small>
            </p>
            <InputField
              type="password"
              label="Current Password"
              value={currentPassword}
              setValue={setCurrentPassword}
            />
            <InputField
              type="password"
              label="New Password"
              value={newPassword}
              setValue={setNewPassword}
            />

            <div className="d-flex">
              <div className="mr-3">
                <LoadingSubmitBtn
                  handleLoadingBtnClick={handleSubmit}
                  text="Save"
                  loading={false}
                />
              </div>
              <Button
                size="small"
                variant="outlined"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updatePassword: (data) => dispatch(updatePassword(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordModal);
