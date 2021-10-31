import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='container my-5 '>
            <div>
                <div className='align-item-center m-auto '>
                    <h2>How it all started</h2>
                    <p className='about-p'>In 2021 Ralf Wenzel and Benjamin Bauer founded food ordering service Pizzon in USA, with the help of incubator Rocket Internet. The service is a website through which consumers can browse restaurants in their neighborhood, place a meal order, then have it delivered to them.

                    </p>
                </div>
                <Row className='py-5'>
                    <Col xs={12}>
                        <div >
                            <h2 className='mb-5'>The story</h2>
                            <p className='about-p' >As the business grows, they are working to broaden their network of distribution options in each region. "Pizzon service is all about delivering the most famous dishes around Singapore from kitchen to doorstep as quickly as possible," according to Jakob Angele, CEO of Pizzon Singapore. Since we now have our fleet of riders, our service is more reliable and faster than ever, ensuring that food is delivered on time." If the organization tries to gain market share in each of its geographic areas, the logistics of its distribution system will undoubtedly be a key priority.</p>
                        </div>
                    </Col>


                    <Col><img className='about-image img-fluid' src="https://static.vecteezy.com/system/resources/previews/001/664/520/non_2x/safe-food-delivery-concept-banner-vector.jpg" alt="" /></Col>
                </Row>

            </div>


        </div>
    );
};

export default About;