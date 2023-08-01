import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

function NavBar() {
  const cartProducts=useSelector(state=>state.cart)
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Shopping App</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link to="/cart" as={Link}>My bag {cartProducts.length}</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar