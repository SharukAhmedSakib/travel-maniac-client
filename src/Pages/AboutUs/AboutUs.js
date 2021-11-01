import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const AboutUs = () => {
  const color = { color: "gray" };

  return (
    <div>
      <Container>
        <div className="align-items-center">
          <br />
          <h1>Meet the Team</h1>
          <br />
          <h3 style={color}>
            Our development is led by a small dedicated team working full time
            at travel-maniac. It also receives contributions from people all
            over the world.
          </h3>
          <br />
          <p style={color}>
            The Trevel Maniac team members work full time on the core component
            APIs, the engine that powers Trevel Maniac and Trevel Maniac Native,
            Trevel Maniac DevTools, and the Trevel Maniac documentation website.
          </p>
          <br />
        </div>

        <CardGroup className="mb-5">
          <Card className="p-2">
            <Card.Img
              variant="top"
              src="https://reactjs.org/static/1e34460fee229cb3a8f4726957e38c2c/2233a/acdlite.jpg"
            />
            <Card.Body>
              <Card.Title>Andrew Clark</Card.Title>
              <Card.Text>
                Andrew got started with web development by making sites with
                WordPress
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="p-2">
            <Card.Img
              variant="top"
              src="https://reactjs.org/static/a7fed27b1623bb69bc78adf1d157ced4/3ac88/bvaughn.jpg"
            />
            <Card.Body>
              <Card.Title>Brian Vaughn</Card.Title>
              <Card.Text>
                Brian studied art in college and did programming on the side to
                pay for his education.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="p-2">
            <Card.Img
              variant="top"
              src="https://reactjs.org/static/afb31f3065fd4e93dc7c21e8d316983e/3ac88/lunaruan.jpg"
            />
            <Card.Body>
              <Card.Title>Luna Ruan</Card.Title>
              <Card.Text>
                Luna learned programming because she thought it meant creating
                video games.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default AboutUs;
