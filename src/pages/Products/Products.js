import { useState } from "react";
import Button from './Button';
import Kruiden from './Kruiden';
import './products.css';
import { Data } from "./Data";

function Products() {
    const [kruiden, setKruiden] = useState(Data);
  
    const chosenKruiden = (searchGroup) => {
      const newKruiden = Data.filter(element => element.searchGroup === searchGroup)
      setKruiden(newKruiden);
    }
  
    return (
      <div className="container">
        <div className="container__header">
          <h2 className="container__header-products">PRODUCTS</h2>
          <button className="container__header-button">FILTER</button>
        </div>
        <Button filteredKruiden={chosenKruiden} setKruiden={setKruiden}/>
        <Kruiden itemKruiden={kruiden}/>
      </div>
    );
}

export default Products;