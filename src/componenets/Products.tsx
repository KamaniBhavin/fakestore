import React, {FC} from "react"
import {Product} from "../viewModels/Product";
import {Link} from "react-router-dom";

const Product:FC<{product: Product}> = ({product}) => {
    return <Link to={`/products/${product.id}`} >
        <div className="product">
            <img src={product.image} className="product-img"  alt={product.title}/>
            <div className="product-detail">
                <h4>{product.title}</h4>
                <h4>{product.category}</h4>
                <b>${product.price}</b>
            </div>
        </div>
    </Link>
}

const Products: FC<{ products: Product[] }> = ({products}) => {
    return <div className="products">
        {
            products.map((p) => <Product key={p.id} product={p} />)
        }
    </div>
}

export default Products