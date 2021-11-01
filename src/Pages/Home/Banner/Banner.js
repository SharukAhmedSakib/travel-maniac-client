import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import photo1 from "../../../images/photo1.jpg";
import photo2 from "../../../images/photo2.jpg";
import photo3 from "../../../images/photo3.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={photo3} alt="First slide" />
          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              Get your booking now
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              Your holiday is now just one click away
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={photo2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              Get relaxed
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              One stop service for travellers and tourists
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={photo1} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              reasurve your holiday destination now
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              You can reserve your holiday bookings here
            </p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Banner;
