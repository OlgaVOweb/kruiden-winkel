const Prod = ({product}) => {
    return (
        <div>
            <img src={`${product.image}.png`} alt="kruid"/>
            <h2>{product.kruidenName}</h2>
            <p>€ {product.price}</p>
        </div>
    )
}

export default Prod;