import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";


const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products/:id" element={<ProductDetails/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)