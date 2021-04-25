import React from 'react';
import {Container, Navbar, NavDropdown, Nav, Button} from 'react-bootstrap'
import logo from '../../static/logo.png'
import "./navbar.css"


const  MainNav =(props) => {
    return ( 
            <Navbar id="main-nav" text-color="light" variant="transparent" expand="sm">
                <Navbar.Brand href="#home"><img  className="d-inline-block align-top logo" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home"><strong className="text-primary">Home</strong></Nav.Link>
                    <Nav.Link href="#home"><strong className="text-primary">Blog</strong></Nav.Link>
                    <NavDropdown title="Journey" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sabonis</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sost</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Kung  Lao</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Button size='sm' variant="transparent" onClick={props.themeToggler}>
                        {props.theme === "light"?<i className="text-light fa fa-sun-o"></i>:
                        <i className="text-dark fa fa-moon-o" aria-hidden="true"></i>}
                    </Button> 
                </Navbar.Collapse>
            </Navbar>
         );
}
 
export default MainNav;