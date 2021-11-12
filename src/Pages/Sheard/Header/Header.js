import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-12">
            <p className="text-left">24 Hour Every Day</p>
          </div>
          <div className="col-sm-6 col-md-6 col-12">
            <p className="text-right">Call us now +017 333 222</p>
          </div>
        </div>
      </div>

      <Navbar
      style={{backgroundColor: "#f3659d"}}
      
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <img style={{width: '80px', padding: '10px'}} src="https://i.ibb.co/PxptKdB/images-1.jpg" alt="" />

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
            About
            </Nav.Link>
            {user.email && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}

            {user?.email ? (
              <Button onClick={logout} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <h5>{user?.displayName}</h5>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
