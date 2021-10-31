import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { BiTime } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer pb-5'>
            <Row className='pb-2'>
                <Col xs={12} md={3}>
                    <img src='http://themes.templatescoder.com/pizzon/html/demo/1-0/images/header-logo.png' alt="" />


                    <div className='d-flex row mt-4 mb-4'>
                        <h4 className='text-muted'>Socials</h4>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsFacebook /><small className='ms-2'>Facebook</small> </Link>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsInstagram /><small className='ms-2'>Instagram</small> </Link>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsLinkedin /><small className='ms-2'>Linkedin</small> </Link>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsTwitter /><small className='ms-2'>Twitter</small> </Link>
                    </div>
                </Col>

                <Col xs={12} md={3}>
                    <Link className='text-white text-decoration-none'> <strong><p className='footer-p border border-warning rounded p-3'> <small>About</small> <br /> <strong>PIZZON</strong> </p></strong></Link>
                    <Link className='text-white text-decoration-none'> <strong><p className='footer-p border border-warning rounded p-3'> +91 123 456 789 0 , +91 123 456 789 0</p></strong></Link>
                    <Link className='text-white text-decoration-none'> <strong><p className='footer-p border border-warning rounded p-3'>support@pizzon.com</p></strong></Link>
                </Col>

                <Col xs={12} md={3}>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Read Our Blog</p></small></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Terms & Policy</p></small></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Team & Logistics</p></small></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Jobs</p></small></Link>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Register to be a User</p></small></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Submit a Feedback</p></small></Link>
                </Col>

                <Col xs={12} md={3}>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Get help</p></small></Link>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Read FAQs</p></small></Link>
                    <Link className='text-white text-decoration-none'> <small><p className='footer-p'>View Our Branches Location</p></small></Link>
                    <Link className='text-white text-decoration-none'> <small><p className='footer-p'>Feedback</p></small></Link>
                </Col>

            </Row>
            <Row className='pt-5 copyright'>
                <Col xs={12} md={6}>
                    <Row>
                        <Col xs={12} md={6}>
                            <small><p className='text-muted' >Copyright © 2021 PIZZON LTD.</p> </small>
                        </Col>
                    </Row>
                </Col>

                <Col className='mx-5' xs={12} md={4}>

                </Col>



            </Row>

        </div>
    );
};

export default Footer;