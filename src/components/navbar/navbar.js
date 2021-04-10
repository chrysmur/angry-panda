import React, {Component} from 'react';
import {Navbar, NavDropdown, Nav, FormControl, Button, Form} from 'react-bootstrap'
import logo from '../../static/logo.png'
import "./navbar.css"


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }
    render() { 
        return ( 
            <Navbar bg="dark" text-color="light" expand="sm">
                <Navbar.Brand href="#home"><img  className="d-inline-block align-top logo" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">This Guy</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"> Lets Chat </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                    <Button searchid= "search" variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default MainNav;