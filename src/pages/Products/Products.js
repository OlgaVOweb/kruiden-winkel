import './products.css';
import ProductsItem from "./ProductCard/ProductsItem";
import AllCategories from "./Filter/AllCategories";

function ProductsPage(){
    return (
      <div className="container">
        <div className="container__header">
          <h2 className="container__header-products">PRODUCTS</h2>
          <button className="container__header-button">FILTER</button>
        </div>
        <AllCategories />
        <ProductsItem  />
      </div>
    );
    }

export default ProductsPage;