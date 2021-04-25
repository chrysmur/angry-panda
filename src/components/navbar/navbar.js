import React from 'react';
import {Container, Navbar, NavDropdown, Nav, Button} from 'react-bootstrap'
import logo from '../../static/logo.png'
import "./navbar.css"


const  MainNav =(props) => {
    return ( 
            <Navbar collapseOnSelect expand="sm" id="main-nav" text-color="light" variant="transparent" bg="inverse" expand="md">
                <Navbar.Brand href="#home"><img  className="d-inline-block align-top logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="simple-navbar-nav"><i className= "fa fa-align-justify"></i></Navbar.Toggle>
                <Navbar.Collapse id="simple-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home"><strong className="text-primary"><i className="fa fa-home"></i>Home</strong></Nav.Link>
                    <Nav.Link href="#blog"><strong className="text-primary"><i className="fas fa-blog fa-spin"></i>Blog</strong></Nav.Link>
                    <NavDropdown title="Journey" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sabonis</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sost</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Kung  Lao</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Button size='sm' variant="transparent" onClick={props.themeToggler}>
                        {props.theme === "light"?<i className="text-light fa fa-toggle-on"></i>:
                        <i className="text-dark fa fa-toggle-off" aria-hidden="true"></i>}
                    </Button> 
                </Navbar.Collapse>
            </Navbar>
         );
}
 
export default MainNav;