import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import ProductChild from "./ProductChild";
import "./Redux.css";

const ProductsParent = ({ search }) => {
  const [products, setProducts] = useState([]);

  const stateProducts = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered);
  }, [search]);

  return (
    <div>
      <div className="caros"></div>
      <div className="cards-parent">
        {products.map((item) => {
          return <ProductChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductsParent;