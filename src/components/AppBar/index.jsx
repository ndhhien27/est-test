import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function AppBar() {
  return (
    <header className="header mb-3">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link href="#blogs" as={Link} to="/blogs">
            Blogs
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

AppBar.propTypes = {};

export default AppBar;
