import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';



export class Navigation extends Component{

    render(){
//<NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
        return(

            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Products</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/order">Orders</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white">Sales</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white">Logout</NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}