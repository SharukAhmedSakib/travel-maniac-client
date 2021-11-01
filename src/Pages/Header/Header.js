import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="sticky-top dark">
      <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">TRAVEL MANIAC</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="white-text" as={Link} to="/home">
              {" "}
              Home{" "}
            </Nav.Link>{" "}
            <Nav.Link className="white-text" as={Link} to="/createpackage">
              {" "}
              AddPackage{" "}
            </Nav.Link>{" "}
            <Nav.Link className="white-text" as={Link} to="/aboutUs">
              {" "}
              AboutUs{" "}
            </Nav.Link>{" "}
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link className="white-text" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};

export default Header;
