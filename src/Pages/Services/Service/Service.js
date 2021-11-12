import { Typography } from "@mui/material";
import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ product }) => {
  const { name, desc, price, img, _id } = product;
  return (
    <Col sx={{ mb: 2 }}>
      <Card className="card-style">
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc.slice(0, 150)}</Card.Text>
          <Typography sx={{ mb: 2 }} variant="h5" component="div">
            Price: {price}$
          </Typography>
          <Link to={`purches/${_id}`}>
            <Button variant="primary">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
