import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormStock from './form';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";



const NavbarTab = () =>{
    return(
      
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand >Thee's news App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link > <Link to="/" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link to="/stock_API" className="nav-link link">News</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" className="nav-link link">Latest Updates</Link> </Nav.Link>
                
              </Nav>

              {/* <FormStock/> */}
          </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarTab;