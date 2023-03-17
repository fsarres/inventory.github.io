import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Navbar from "./Navbar";
import Create from "./Create";
import Footer from "./Footer";
import Product from "./Product";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path=":productId/edit" element={<Create />} />

          <Route path="products" element={<Products />} />
          <Route path="item" element={<Product />}>
            <Route path=":productId" element={<Product />} />
            
          </Route>
          <Route index element={<p>Select a Product for more details</p>} />

          <Route path=":productsId" element={<Products />} />

          <Route path="about" element={<About />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;