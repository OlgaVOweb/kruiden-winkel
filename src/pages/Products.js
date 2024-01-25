import { useState } from "react";
import { Data } from "../Data";
import Button from "../Button";
import Kruiden from "../Kruiden";

function Products() {
    const [kruiden, setKruiden] = useState(Data);
  
    const chosenKruiden = (searchGroup) => {
      const newKruiden = Data.filter(element => element.searchGroup === searchGroup)
      setKruiden(newKruiden);
    }
  
    return (
      <div className="container">
        <div className="cont">
          <h2 className="back">About Delivery</h2>
        </div>
        <Button filteredKruiden={chosenKruiden} setKruiden={setKruiden}/>
        <Kruiden itemKruiden={kruiden}/>
      </div>
    );
}

export default Products;