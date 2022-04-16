import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png'
import './MainHeader.css'
const MainHeader = () => {
  
    return (
        <div>
            <Navbar className='navigation'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img className='header-logo' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='link-nav text-dark' as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} className='signin-nav text-light' to="/signin">Sign In</Nav.Link>                      
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MainHeader;