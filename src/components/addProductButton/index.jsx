import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { addProduct } from "../../redux/product/product.action";
import { connect } from "react-redux";

const AddProductButton = ({ handleClick }) => {
  return (
    <>
      <div
        className="d-flex  align-items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="mr-2">
          <Tooltip title="Add Product">
            <IconButton aria-label="add product">
              <AddIcon style={styles.addIcon} />
            </IconButton>
          </Tooltip>
        </span>
        <span className="hideMb">Add Invoice</span>
      </div>
    </>
  );
};

const styles = {
  addIcon: {
    color: "#db4c3f",
  },
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data)),
});

export default connect(null, mapDispatchToProps)(AddProductButton);
