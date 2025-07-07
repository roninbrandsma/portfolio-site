import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import "./header.scss"



const Header = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/" className="headertext">Ronin Brandsma</Navbar.Brand>
                <Nav className="navlinks">
                    <NavLink to="/portfolio" className="headertext headerlink" >Portfolio</NavLink>
                    <NavLink to="/contact" className="headertext headerlink">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
        </>
    )

}

export default Header