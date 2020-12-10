import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.scss";
import AddEditProductModal from "../../addEditProductModal/index.jsx";
import { removeProduct } from "../../../redux/product/product.action";
import { connect } from "react-redux";
import ChipMui from "../../utility/Chip/index.jsx";
import AddEditNoteModal from "../../AddEditNoteModal/index.jsx";
import NoteIcon from "@material-ui/icons/Note";
import PdfDownloader from "../../utility/PdfDownloader/index.jsx";

const ProductItem = ({ item, removeProduct }) => {
  const {
    description,
    name,
    price,
    quantity,
    image,
    id,
    tax,
    discount,
    status,
    color,
  } = item;

  const [openModal, setOpenModal] = useState(false);
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [editID, setEditID] = useState(null);

  const openEditProductModal = () => {
    setOpenModal(true);
    setEditID(id);
  };

  const openNoteModalHandle = () => {
    setOpenNoteModal(true);
    setEditID(id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseNoteModal = () => {
    setOpenNoteModal(false);
  };

  const handleDeleteNote = () => {
    removeProduct(id);
  };
  console.log(color);
  return (
    <>
      <div className="item" style={{ backgroundColor: color }}>
        <div className="item__content">
          <div className="item__content--head">
            <img className="item-img" src={image} alt="" />
            <div>
              <p className="item__content--name">Name: {name}</p>
              <p className="item__content--name">Unit Price: ${price}</p>
              <p className="item__content--name">Quantity: {quantity}</p>
              <p className="item__content--name">Tax: {tax}%</p>
              <p className="item__content--name">Discount: {discount}%</p>
            </div>
          </div>
          <p className="item__content--desc">{description}</p>
          <ChipMui label={status} />
        </div>
        <div className="item__actions">
          <Tooltip title="Edit item">
            <IconButton
              aria-label="edit item"
              onClick={() => openEditProductModal()}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notes">
            <IconButton
              aria-label="notes"
              onClick={() => openNoteModalHandle()}
            >
              <NoteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete item">
            <IconButton
              aria-label="delete item"
              onClick={() => handleDeleteNote()}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {item && <PdfDownloader item={item} />}
        </div>
      </div>
      {openModal && id === editID && (
        <AddEditProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          edit={true}
          editProduct={item}
        />
      )}
      {openNoteModal && id === editID && (
        <AddEditNoteModal
          openModal={openNoteModal}
          handleCloseModal={handleCloseNoteModal}
          product={item}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (data) => dispatch(removeProduct(data)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
