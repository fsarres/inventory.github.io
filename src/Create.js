import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

function Create() {
  let params = useParams();
  let [product, setProduct] = useState({
    id: params.productId,
    name: "",
    imgUrl: "",
    price: 0,
    description: "",
    origin: "",
  });

  let { getProduct, addProduct, updateProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  let { id, name, imgUrl, price, description, origin } = product;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await getProduct(id).then((product) => setProduct(product));
    }
    fetch();

    console.log(params.productId);
  }, [id]);

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function updateOrAdd() {
    if (id === undefined) {
      return addProduct(product);
    } else {
      return updateProduct(product);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateOrAdd().then((response) => navigate(`/products`));
  }

  return (
    <>
      <h1>Create/edit a product </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Please enter product name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            required
            placeholder="Please enter a description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            required
            placeholder="Please enter the price"
            value={price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country of origin</Form.Label>
          <Form.Control
            type="text"
            required
            name="origin"
            placeholder="Please enter country of origin"
            value={origin}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imgUrl"
            required
            placeholder="Please enter the image URL"
            value={imgUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button type="submit">Save</Button>
        <Link to={`/`} className="btn btn-primary mx-1">Cancel</Link>
      </Form>
    </>
  );
}

export default Create;

