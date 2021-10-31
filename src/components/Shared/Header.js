import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineSafety, AiOutlineContainer } from "react-icons/ai";

const Header = () => {

    const { logOut, loginWithGoogle, user, error } = useAuth();


    return (
        <div className='mx-auto'>
            <Navbar bg="dark" expand="lg" sticky="top" >
                <Container className='mx-auto my-2'><Link className='text-decoration-none text-white' to="/home">
                    <Navbar.Brand href="#"> <img src='https://i.ibb.co/7b9zwRf/header-logo.png' alt="" srcset="" height='50' width='auto' fluid /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" my-2 me-4 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link className='text-decoration-none text-white' to="/home">Home</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-white' to="/">To Deliver</Link></Nav.Link>

                            <Nav.Link><Link className='text-decoration-none text-white' to="/about">About</Link></Nav.Link>


                        </Nav>

                        <br />
                        {
                            user?.displayName &&
                            <Nav
                                className="d-flex align-items-center ms-auto my-2 me-4 my-lg-0"
                                style={{ maxHeight: '300px' }}
                                navbarScroll
                            >
                                {/* <Nav.Link><Link className='text-decoration-none text-white' to="/"> <AiOutlineShoppingCart /></Link></Nav.Link> */}
                                <small>

                                    <Nav.Link><Link className='text-decoration-none text-white' to="/myorders"><AiOutlineShoppingCart className='fs-4' /> My Orders</Link></Nav.Link>
                                    <Nav.Link><Link className='text-decoration-none text-white' to="/manageallservice"><AiOutlineContainer className='fs-4' /> Manage All Services</Link></Nav.Link>
                                    <Nav.Link><Link className='text-decoration-none text-white' to="/manageallorders"><AiOutlineSafety className='fs-4' /> Manage All Orders</Link></Nav.Link>
                                    <Nav.Link><Link className='text-decoration-none text-white' to="/addservice"><AiOutlinePlusCircle className='fs-4' /> Add Service</Link></Nav.Link>
                                </small>

                            </Nav>
                        }

                        <div className='text-white me-4 user-text'>

                            {
                                user?.displayName &&
                                <img src={user?.photoURL} className='rounded-circle me-2' alt="" srcset="" height='45px' />
                            }


                            {
                                user?.displayName || <div>
                                    <Link to='/login'><Button className='px-4 float-right  rounded-pill header-btn' variant="outline-warning">Login</Button></Link>
                                </div>
                            }


                            {
                                user?.displayName &&
                                <Button onClick={logOut} className='px-4 ms-3 rounded-pill header-btn' variant="outline-warning">Log Out</Button>
                            }

                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;