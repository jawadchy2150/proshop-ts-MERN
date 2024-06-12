import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product, { ProductType } from "../components/Product";

const HomeScreens: React.FC = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: ProductType) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreens;
