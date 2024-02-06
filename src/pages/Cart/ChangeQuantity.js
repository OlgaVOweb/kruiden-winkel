const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button className="product__card-minus" onClick={removeQuantity}>-</button>
            <span className="product__card-quantity">{quantity}</span>
            <button className="product__card-plus" onClick={addQuantity}>+</button>
            </div>
    )
}

export default ChangeQuantity;