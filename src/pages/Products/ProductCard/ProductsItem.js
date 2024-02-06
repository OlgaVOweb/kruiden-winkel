import { useSelector } from "react-redux";
import dataProducts from "../../../data/dataProducts";
import Prod from "./Prod";
import { getSelectedCategory } from "../../../redux/prodSlice";


const ProductsItem = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="container__products">
            {dataProducts
            .filter(product => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === product.category;
            })
            .map(product => <Prod product={product}/>)}
        </div>
    )
}

export default ProductsItem;