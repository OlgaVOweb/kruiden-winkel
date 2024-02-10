import './products.css';
import ProductsItem from "./ProductCard/ProductsItem";
import AllCategories from "./Filter/AllCategories";
import React, { useState } from 'react';

function ProductsPage(){

  const [showFilter, setShowFilter] = useState(false);

  const buttonClick = () => {
    setShowFilter(!showFilter);
  };

    return (
      <div className="container">
        <div className="container__header">
          <h2 className="container__header-products">PRODUCTS</h2>
          <button className="container__header-button" onClick={buttonClick}>FILTER</button>
          </div>
          {showFilter && <AllCategories/>}
        <ProductsItem  />
      </div>
    );
    }

export default ProductsPage;