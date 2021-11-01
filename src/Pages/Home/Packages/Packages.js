import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import usePackages from "../../../hooks/usePackages";
import Package from "../Package/Package";

const Packages = () => {
  const { packages } = usePackages();
  return (
    <div>
      <Container>
        <Row xs={1} md={3} lg={4}>
          {packages.map((pack) => (
            <Col className="my-3">
              <Package key={pack._id} pack={pack}></Package>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
