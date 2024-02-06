import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

    const product = dataProducts.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch();
    return (
        <div>
            <p>{product.productName}</p>
            <p>{cartItem.quantity} product(s)</p>
            <p>Price: € {product.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id})) }>
                DEL</span>
        </div>
    )
}

export default CartItem;