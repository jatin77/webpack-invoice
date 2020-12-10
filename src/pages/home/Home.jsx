import React from "react";
import ProductList from "../../components/productList/index.jsx";
import QueryBar from "../../components/queryBar/index.jsx";

const Home = () => {
  return (
    <>
      {/* Search, Filter & Add Product Bar */}
      <QueryBar />

      {/* Products List */}
      <div className="mt-5">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
