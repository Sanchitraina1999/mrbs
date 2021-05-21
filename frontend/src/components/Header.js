import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

// import { logout } from '../actions/userActions';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    // const dispatch = useDispatch();
    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin;
    const logoutHandler = () => {

    }
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><i className="fab fa-shopware"></i>Meeting Room Booking System</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    LOGIN
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/signup'>
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    SIGNUP
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header