import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./PackageDetails.css";

const PackageDetails = () => {
  const { _id } = useParams();
  const [pack, setPack] = useState({});
  useEffect(() => {
    fetch(`https://travel-maniac-server.herokuapp.com/packages/${_id}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const { image, name, duration, review, price } = pack;
  console.log(pack);
  return (
    <div>
      <Container className="d-flex doctor-container">
        <Row>
          <Col xs={12} md={6}>
            <img src={image} alt="" />
          </Col>
          <Col xs={12} md={6} className="text-start">
            <h1>Name: {name}</h1>
            <h3>Duration: {duration}</h3>
            <h4>Reviews: {review}</h4>
            <h4>Price: {price}</h4>
            <button
              onClick={() => (
                <Alert variant="success">Have fun at {name}</Alert>
              )}
              className="animated-button"
            >
              Purchase
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PackageDetails;
