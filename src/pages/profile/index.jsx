import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import LoadingSubmitBtn from "../../components/utility/LoadingSubmitBtn/index.jsx";
import EditIcon from "@material-ui/icons/Edit";
import "./style.scss";
import { updateEmail } from "../../redux/user/user.action";
import ChangePasswordModal from "../../components/ChangePasswordModal/index.jsx";

const Profile = ({ user, updateEmail }) => {
  const { email } = user;
  const [emailInput, setEmailInput] = useState(email ? email : "");
  const [editEmail, setEditEmail] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail) {
      alert("Incorrect email");
    } else {
      updateEmail(emailInput);
      setEditEmail(false);
    }
  };

  const validateEmail = () => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailInput
    );
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <h5>Personal Information</h5>
      {emailInput && (
        <ul className="me-list">
          <li>
            Email{" "}
            {!editEmail && (
              <span className="descText">
                {email}{" "}
                <EditIcon
                  className="editIcon cursor-pointer"
                  size="small"
                  style={{ width: "1rem", color: "#db4c3f" }}
                  onClick={() => setEditEmail(true)}
                />
              </span>
            )}
            {editEmail && (
              <form className="d-flex" onSubmit={handleEmailSubmit}>
                <input
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <div className="mx-3">
                  <LoadingSubmitBtn
                    handleLoadingBtnClick={handleEmailSubmit}
                    text="Save"
                    loading={false}
                  />
                </div>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setEditEmail(false)}
                >
                  Cancel
                </Button>
              </form>
            )}
          </li>
          <li>
            Password{" "}
            <Button
              size="small"
              className="changePassword-btn"
              variant="outlined"
              onClick={() => setOpenModal(true)}
            >
              Change Password
            </Button>
          </li>
        </ul>
      )}
      {openModal && (
        <ChangePasswordModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateEmail: (data) => dispatch(updateEmail(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
