import axios from "axios";
import { useEffect, useState } from "react";
import ProductContext from './ProductContext';
import Products from "./Products";


export const ProductProvider = (props) => {

    const [products, setProducts] = useState([]);
    const baseUrl = "http://localhost:4000/products";

    useEffect(async () => {
        getProducts();
    }, []);


    function getProducts() {
        return axios.get(baseUrl).then(response => setProducts(response.products));
    }

    return (
        <ProductContext.Provider value={{
            Products
        }}>
        </ProductContext.Provider>
    );
};