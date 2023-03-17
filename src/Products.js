import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink, Outlet } from "react-router-dom";
import { ProductContext } from "./ProductContext";


function Products(props) {
  function Products(products) {
    if (products === null) return;
    return products.map((product) => (
      <Card style={{ width: '25rem', margin: '15px 15px 0 0' }} className="align-self-start" key={product.Id}>
        <NavLink to={`/item/${product.id}`} key={product.id}>
        <Card.Img variant='top' src={product.imgUrl}/>
        <Card.Body>
        <Card.Title>{product.name}</Card.Title>
         ${product.price}
        </Card.Body>
        </NavLink>
      </Card>
    ));
  }

  return (
    <>
      <h1>Products</h1>
      <p>Click each image to view more details</p>
        <ListGroup className="align-self-start w-75">
          <ProductContext.Consumer>
            {({ products }) => Products(products)}
          </ProductContext.Consumer>
        </ListGroup>
        <Outlet />
    </>
  );
}

export default Products;





