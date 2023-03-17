import React, { useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const baseUrl = "http://localhost:4000/products";
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, []);

  function refreshProducts() {
    return axios.get(baseUrl)
      .then(response => {
        console.log(response)
        setProducts(response.data)
      })
  }

  function getProduct(id) {
    return axios.get(`${baseUrl}/${id}`).then((r) => 
      new Promise((resolve) => resolve(r.data))
    ).catch((error) => new Promise((_, reject) => reject(error.response.statusText)))
  }

  function deleteProduct(id) {
    axios.delete(`${baseUrl}/${id}`)
    .then(refreshProducts)
  }

  function addProduct(product) {
    return axios.post("http://localhost:4000/products", product)
    .then(response => {
      refreshProducts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function updateProduct(product) {
    return axios.put(`http://localhost:4000/products/${product.id}`, product)
    .then(response => {
      refreshProducts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
  
}