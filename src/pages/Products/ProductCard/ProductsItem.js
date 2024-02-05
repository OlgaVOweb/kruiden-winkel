import dataProducts from "../../../data/dataProducts";
import Prod from "./Prod";


const ProductsItem = () => {
    return (
        <div>
            {dataProducts.map(product => <Prod product={product}/>)}
        </div>
    )
}

export default ProductsItem;