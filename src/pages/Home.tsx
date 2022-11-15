import React, {useEffect, useState} from "react";
import Layout from "../componenets/Layout";
import useFetch from "../hooks/useFetch";
import {Product} from "../viewModels/Product";
import Products from "../componenets/Products";
import CategoryDropdown from "../componenets/CategoryDropdown";

const Home = () => {
    const [endpoint, setEndpoint] = useState("/products")
    const [loading, data] = useFetch<Product[]>(endpoint)

    const selectedCategory = (category: string) => {
        setEndpoint(`/products/category/${category}`)
    }

    const product = (function () {
        if (loading) {
            return <h1>Loading</h1>
        } else if (!data) {
            return <h1>No data</h1>
        } else {
            return <Products products={data as Product[]}/>
        }
    })()

    return <Layout>
        <CategoryDropdown fn={selectedCategory}/>
        {product}
    </Layout>

}

export default Home