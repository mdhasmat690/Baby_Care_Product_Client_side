import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Explore = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://rocky-spire-67660.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container">
      <div className="my-5">
        <h2>Our All products</h2>
      </div>

      <Row xs={1} md={3} className="g-4">
        {product?.map((product) => (
          <Col key={product._id} sx={{ mb: 2 }}>
            <Card className="card-style">
              <Card.Img className="w-100" variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc.slice(0, 150)}</Card.Text>
                <Typography sx={{ mb: 2 }} variant="h5" component="div">
                  Price: {product.price}$
                </Typography>
                <Link to={`purches/${product._id}`}>
                  <Button variant="primary">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Explore;
