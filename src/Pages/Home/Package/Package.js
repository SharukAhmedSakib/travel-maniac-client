import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { _id, image, name, description, duration, review, price } = props.pack;
  console.log(props.pack._id);
  return (
    <div>
      <Card style={{ height: "600px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{duration}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{review}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ height: "90px" }}>
          <Link to={`/packages/${_id}`}>
            <button className="animated-button">View {name}</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Package;
