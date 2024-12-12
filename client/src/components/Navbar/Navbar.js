import React from 'react';
import { Navbar, Nav as BootstrapNav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShoppingCart } from 'phosphor-react';

const Nav = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <h5 className='text-white'>Sneaker Heads & Company</h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <BootstrapNav className="mr-auto">
          <BootstrapNav.Link as={Link} to="/home" className="navbar-link text-white">Home</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/about" className="navbar-link text-white">About</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/catalog" className="navbar-link text-white">SHOP</BootstrapNav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/gallery" className="nav-dropdown-link text-white">Gallery</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/another-action" className="nav-dropdown-link">Another action</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/something" className="nav-dropdown-link">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/separated-link" className="nav-dropdown-link">Separated link</NavDropdown.Item>
          </NavDropdown>
        </BootstrapNav>
        <Link to="/cart" className="icon text-white">
          <ShoppingCart size={32} />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;










