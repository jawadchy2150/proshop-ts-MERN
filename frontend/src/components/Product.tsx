import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export interface ProductType {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
  description: string;
  countInStock: number;
}

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong> {product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} review`}
          ></Rating>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
