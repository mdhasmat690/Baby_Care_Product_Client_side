import React from "react";
import { Carousel } from "react-bootstrap";

const ImgGalery = () => {
  return (
    <div className="container mt-5">
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "40%" }}
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/PMx5YFt/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Children's Large Foldable Bathtub</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "40%" }}
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/bNMBSMh/3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Children's Large Foldable Bathtub</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "40%" }}
            className="d-block w-75 mx-auto"
            src="https://i.ibb.co/CJN1tJ3/2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Children's Large Foldable Bathtub</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgGalery;
