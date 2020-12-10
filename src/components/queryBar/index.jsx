import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { statusItems } from "../../helpers/data";
import {
  searchProduct,
  setPriceRange,
  setQuantityRange,
  setStatus,
} from "../../redux/query/query.action";
import { selectCurrentQuery } from "../../redux/query/query.selector";
import AddEditProductModal from "../addEditProductModal/index.jsx";
import AddProductButton from "../addProductButton/index.jsx";
import Dropdown from "../utility/Dropdown/index.jsx";
import InputField from "../utility/inputField/index.jsx";
import ItemFilter from "./itemFilter/index.jsx";

const QueryBar = ({
  query,
  searchProduct,
  setPriceRange,
  setQuantityRange,
  setStatus,
}) => {
  const { searchTerm, priceRange, quantityRange, status } = query;
  const [openModal, setOpenModal] = useState(false);

  const openAddProductModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={styles.queryWrap}>
      <div className="d-flex ">
        <div className="flex-grow-1 mt-3 mr-2">
          <InputField
            value={searchTerm}
            placeholder="Search product by name"
            type="text"
            setValue={searchProduct}
          />
        </div>
        <AddProductButton handleClick={openAddProductModal} />
      </div>

      <div className="flex-column flex-md-row d-flex justify-content-between mt-2">
        {/* Price Filter */}
        <ItemFilter
          value={priceRange}
          filterType="Price"
          setValue={setPriceRange}
        />
        {/* Quantity Filter */}
        <div className="mx-md-3">
          <ItemFilter
            value={quantityRange}
            filterType="Quantity"
            setValue={setQuantityRange}
          />
        </div>
        {/* Status filter */}
        <Dropdown
          size="small"
          label="Status"
          items={statusItems}
          value={status}
          setValue={setStatus}
          filter
        />
      </div>

      {/* Add product Modal */}
      {openModal && (
        <AddEditProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          add={true}
        />
      )}
    </div>
  );
};

const styles = {
  queryWrap: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "5px",
    position: "sticky",
    top: "5.5rem",
    zIndex: "1",
  },
};

const mapStateToProps = createStructuredSelector({
  query: selectCurrentQuery,
});

const mapDispatchToProps = (dispatch) => ({
  searchProduct: (data) => dispatch(searchProduct(data)),
  setPriceRange: (data) => dispatch(setPriceRange(data)),
  setQuantityRange: (data) => dispatch(setQuantityRange(data)),
  setStatus: (data) => dispatch(setStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryBar);
