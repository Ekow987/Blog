import React, { useContext } from 'react';
 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { Theme } from './ThemeProvider';

   const Navigation=()=> {
    const currentTheme = useContext(Theme)[0];
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg={currentTheme} variant={currentTheme}>
  <Navbar.Brand href="#home">Alby Movie Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to="/">Home</Link></Nav.Link>
      <Nav.Link> <Link to="/Newpost">Newpost</Link></Nav.Link>
      <Nav.Link> <Link to="/Login">Login</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <ul>
  <li className="nav-item">
              <ToggleTheme />
            </li>
  </ul>
</Navbar>  
        </div>
    );
}

export default Navigation;