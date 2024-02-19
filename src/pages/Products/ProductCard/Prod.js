import { useState } from "react";
import ChangeQuantity from "../../Cart/ChangeQuantity";
import { addItemToCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Prod = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (  
    <div className="product__card">
        <Link to={`/about/${product.productName}`} className="title-link">
            <img className="product__card-image" src={`${product.image}.png`} alt="kruid"/>
            <h2 className="product__card-header">{product.productName}</h2>
            <p className="product__card-price">€ {product.price}/ {product.units} </p> 
            <h2 className="product__card-compound">{product.compound}</h2>
        </Link>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="product__card-button" onClick={() => dispatch(addItemToCart({product, quantity}))}>ADD to cart</button>
    </div> 
    )
}

export default Prod;