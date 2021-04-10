import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }
    render() { 
        return ( 
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Angry Panda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">My journey</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Coding</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4"> Lets Chat </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
</Navbar>
         );
    }
}
 
export default MainNav;