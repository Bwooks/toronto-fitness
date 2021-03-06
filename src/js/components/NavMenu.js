/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Navbar,Nav,MenuItem,NavDropdown,NavItem} from "react-bootstrap";

export default class NavMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navbar inverse collapseOnSelect fluid={true} fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Toronto Fitness</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Sign Up</NavItem>
                        <NavItem eventKey={2} href="#">Login</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}