import { Product } from '../product/Product'
import './product-list-styles.css'
export const ProductList = () => {
    return (
        <>
            <div className="product-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
    )
}