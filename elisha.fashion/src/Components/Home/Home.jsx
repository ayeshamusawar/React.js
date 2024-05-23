import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Slide1 from "../Assets/slide1.jpg";
import Slide2 from "../Assets/slide.jpg";
import HomeSectionCard from "./HomeSectionCard";

export default function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-0 w-100 mx-auto"
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "4vh",
          }}
          src={Slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-0 w-100 mx-auto"
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "4vh",
          }}
          src={Slide2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <HomeSectionCard/>
   </div>
  );
}
