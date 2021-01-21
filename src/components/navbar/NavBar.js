import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Total } from './total/Total';

export const NavBar = ({total}) => {

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Alkemy</Navbar.Brand>
            <Nav className="mr-auto">
               < LinkContainer to="/">
                  <Nav.Link to="/">home</Nav.Link>
               </ LinkContainer>
               <LinkContainer to="/admin">
                  <Nav.Link to="/admin">admin</Nav.Link>
               </ LinkContainer >
               <LinkContainer to="/newregister">
                  <Nav.Link to="/newregister">new Register</Nav.Link>
               </ LinkContainer >
               <LinkContainer to="/newcategory">
                  <Nav.Link to="/newcategory">new Category</Nav.Link>
               </ LinkContainer >
            </Nav>
            <Total total={total}/>
         </Navbar>
      </>
   );
}