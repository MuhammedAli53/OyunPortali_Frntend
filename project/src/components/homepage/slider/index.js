import React from "react";
import "./slider.scss";
import { Carousel, Col, Container, Image, } from "react-bootstrap";
import slider from "../../../helpers/data/slider.json";

const Slider = () => {
  return (
    <Container className="slider mb-3">
    <Col >
    
    <Carousel >
      {slider.map((slide,index)=> (
      <Carousel.Item interval={4000}>
        <Image className="carousel-image img-fluid"  src={`images/slider/${slide.image}` } />
      </Carousel.Item>
        ))}
    </Carousel>
    
    </Col>
    </Container>
  );
};

export default Slider;
