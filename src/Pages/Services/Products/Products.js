import React, { useEffect, useState } from "react";
import {Row } from "react-bootstrap";
import Service from "../Service/Service";


const Products = () => {
  const [product, setProduct] = useState()

  useEffect(()=>{
    fetch('https://rocky-spire-67660.herokuapp.com/products?limit=6')
    .then(res=>res.json())
    .then(data=> setProduct(data))

  },[])

  return (
    <div className="container">
      <div className="my-5">
      <h2>This is Our products</h2>
      </div>

      <Row xs={1} md={3} className="g-4">
        {product?.map((product) => (
          <Service
          key={product._id}
          product={product}
          ></Service>
        ))}
      </Row>
    </div>
  );
};

export default Products;
