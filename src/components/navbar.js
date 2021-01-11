import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";


const NavbarTab = () =>{
    return(
      <div>
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand > <Link to='/FormStock'  className="nav-link ">Thee's news App </Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link > <Link to="/FormStock" className="nav-link link">Home</Link> </Nav.Link>
                  <Nav.Link > <Link to="/stock_API" className="nav-link link">News</Link> </Nav.Link>
                  <Nav.Link > <Link to="/UpdateOnstocks" className="nav-link link">Search for Stocks</Link> </Nav.Link>
                
              </Nav>

              <Nav>
                <Nav.Link > <Link to='/Converter' className="nav-link link"> Currency Converter </Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>  
    )
};

export default NavbarTab;