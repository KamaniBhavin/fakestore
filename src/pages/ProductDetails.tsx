import React, {FC} from "react"
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Product} from "../viewModels/Product";
import Layout from "../componenets/Layout";


const ProductDetails = () => {
    const params = useParams()
    const [loading, data] = useFetch<Product>(`/products/${params.id}`)

    const details = (() => {
        if (loading) {
            return <h1>Loading</h1>
        } else if (!data) {
            return <h1>No data found</h1>
        } else {
            const product = data as Product
            return <div className="product">
                <img src={product.image} className="product-img" alt={product.title}/>
                <div className="product-detail">
                    <h4>{product.title}</h4>
                    <h4>{product.category}</h4>
                    <h4>{product.description}</h4>
                    <b>${product.price}</b>
                </div>
            </div>
        }
    })()

    return <Layout>
        {details}
    </Layout>
}

export default ProductDetails