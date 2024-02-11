import { useParams } from "react-router-dom";
import './aboutProduct.css';
import { dataProducts } from '../../data/dataProducts';
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const AboutProduct = () => {
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      {dataProducts.filter((item) => item.productName === productName).map(element =>{
        const{id, productName, price, units, image, compound, howToUse, category} = element;

        return (
          <div key={id} className="product-box">
              <img src={`${image}.png`} alt='product' className="product-image"/>
              
              <div className="about-product">
                <h1>{productName}</h1>
                <p>{howToUse}</p>
                <h2>€ {price} / {units}</h2>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="product__card-button about-product-btn" onClick={() => dispatch(addItemToCart({id, productName, quantity}))}>ADD to cart</button>
              </div>

          </div>
        )
      })}
    </div>
  )
}

export default AboutProduct;