import { useState } from "react";
import ChangeQuantity from "../../Cart/ChangeQuantity";
import { addItemToCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Prod = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="product__card">
            <img className="product-image" src={`${product.image}.png`} alt="kruid"/>
            <h2>{product.productName}</h2>
            <p>€ {product.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => dispatch(addItemToCart({product, quantity}))}>ADD to cart</button>
        </div>
    )
}

export default Prod;