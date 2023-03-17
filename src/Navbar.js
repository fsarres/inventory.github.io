import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";


function Navbar() {
  return (
    <>
    <NavbarBs sticky="top" className="bg-white shadow-md mb-4 fs-5">
      <Container>
        <Nav className="me-auto" >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/create" className="nav-link">
            Create
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Nav className='search'>
         </Nav>
        </Nav>
        <Header/>
      </Container>
    </NavbarBs>
    </>
  );
}

export default Navbar;

