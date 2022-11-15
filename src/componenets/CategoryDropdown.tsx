import React, {ChangeEvent, FC, useState} from "react";
import useFetch from "../hooks/useFetch";


const CategoryDropdown: FC<{fn: (value: string) => void}> = ({fn}) => {
    const [loading, data] = useFetch("/products/categories");

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        fn(e.target.value)
    }

    if (loading) {
        return <h1>Loading...</h1>
    } else if (!data) {
        return <h1>No Categories</h1>
    } else {
        return <label htmlFor="categories">
            Category
            <select id="categories" className="categories" onChange={(e) => handleOnChange(e)}>
                <option key="all">All</option>
                {(data as string[]).map((c) => <option key={c}>{c}</option>)}
            </select>
        </label>
    }
}

export default CategoryDropdown