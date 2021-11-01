import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="dark font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <h5 className="title">e-Health Care</h5>
              <p>This is your one stop Health care solution.</p>
            </Col>
            <Col md="6">
              <h5 className="title"> Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.google.com">Google</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/">Youtube</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.linkedin.com/">Linked In</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            <p>Powered by: Roxxon Corp.</p>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.google.com"> Google.com </a>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
