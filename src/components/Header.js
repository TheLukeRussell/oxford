import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar className='transparent' id='navbar' fixed='top' expand='lg'>
        <Navbar.Brand className='mr-5' href='#home'>
          OXB
          {/* <img
            src='https://d1g145x70srn7h.cloudfront.net/files/510fb821d05e84d873843916bd556cedd5610f35/original.jpeg'
            width='50'
            height='50'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto nav'>
            <Nav.Link id='text' href='#'>
              Home
            </Nav.Link>
            <Nav.Link id='text' href='#'>
              Shop Gallery
            </Nav.Link>
            <Nav.Link id='text' href='#'>
              Book Appointment
            </Nav.Link>
            <Nav.Link id='text' href='#'>
              Staff
            </Nav.Link>
            <NavDropdown id='text' title='More' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Private Party Request</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Join Our Team</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
