import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentProducts } from "../../redux/product/product.selector";
import { selectCurrentQuery } from "../../redux/query/query.selector";
import EmptyState from "../EmptyState/index.jsx";
import ProductItem from "./productItem/index.jsx";

const ProductList = ({ products, query }) => {
  const { items } = products;
  const { searchTerm, priceRange, quantityRange, status } = query;
  const [productsList, setProductsList] = useState(items);

  useEffect(() => {
    let updatedList = items;

    // Apply Price Range Filter
    if (priceRange.length) {
      const minPrice = priceRange[0];
      const maxPrice = priceRange[1];

      updatedList = updatedList.filter(
        (item) =>
          parseInt(item.price) >= minPrice && parseInt(item.price) <= maxPrice
      );
    }

    // Apply Quantity Range Filter
    if (priceRange.length) {
      const minQuantity = quantityRange[0];
      const maxQuantity = quantityRange[1];

      updatedList = updatedList.filter(
        (item) =>
          parseInt(item.quantity) >= minQuantity &&
          parseInt(item.quantity) <= maxQuantity
      );
    }

    // Apply  Status Filter
    if (status) {
      updatedList = updatedList.filter(
        (item) => item.status.toLowerCase() === status.toLowerCase()
      );
    }

    // Apply Search Query Filter
    updatedList = updatedList.filter(
      (item) => item.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1
    );

    // Update Products List with filtered List
    setProductsList(updatedList);
  }, [searchTerm, priceRange, quantityRange, items, status]);

  return (
    <>
      {productsList.length ? (
        productsList.map((item) => <ProductItem key={item.id} item={item} />)
      ) : (
        <EmptyState />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCurrentProducts,
  query: selectCurrentQuery,
});

export default connect(mapStateToProps)(ProductList);
