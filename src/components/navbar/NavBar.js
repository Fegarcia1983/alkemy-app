import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Total } from './total/Total';
import './navBar.css'

export const NavBar = ({total}) => {

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="fg-brandNavBar">Alkemy</Navbar.Brand>
            <Nav className="mr-auto">
               < LinkContainer to="/">
                  <Nav.Link className="fg-navItem" to="/">home</Nav.Link>
               </ LinkContainer>
               <LinkContainer to="/admin">
                  <Nav.Link className="fg-navItem" to="/admin">admin</Nav.Link>
               </ LinkContainer >
               <LinkContainer to="/newregister">
                  <Nav.Link className="fg-navItem" to="/newregister">new Register</Nav.Link>
               </ LinkContainer >
            </Nav>
            <Total total={total}/>
         </Navbar>
      </>
   );
}