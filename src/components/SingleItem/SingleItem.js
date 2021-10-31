import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';


const SingleItem = (props) => {
    const history = useHistory()
    const { _id, foodName, image, description, price } = props.item;
    const { myCart } = useCart();
    const { user } = useAuth();

    // console.log(user.displayName);
    // console.log(user.email);

    const random = Math.floor(Math.random() * 7) + 1;
    const oldPrice = price + random;
    const newOldPrice = parseFloat(oldPrice).toFixed(2);

    // add to cart
    // const addToCart = id => {
    //     console.log('added', foodName)
    // }


    return (
        <Col >
            <Card className='hover-card h-100 '>
                <div className='container rounded'>
                    <div>
                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={image} />
                    </div>

                    <div>
                        <Link className='text-decoration-none text-dark'>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h3 className='fs-4 fw-bold'>{foodName}</h3>
                                </Card.Title>

                                <Card.Text className='text-center'>
                                    {description}
                                </Card.Text>

                                <Card.Text>
                                    <h4 className='text-center text-muted'>Previous Price: $<del>{newOldPrice}</del></h4>
                                    <h4 className='text-center'>Offer Price: ${price}</h4>
                                    <h5 className='text-center'>Estimated Delivery time <br /> <span className='text-warning text-bold'>30 Mins</span></h5>
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </div>
                </div>

                <div className='my-3 mx-auto d-flex'>
                    <Link to={`/allitems/${_id}`} className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Details and Order</Button> </Link>

                    {/* 
                    <Button onClick={() => {
                        if (user.displayName) {
                            myCart(_id, props.item, user.email);
                        }
                        else {
                            history.push('/login');
                        }
                    }} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Order Now</Button> */}

                </div>

            </Card>
        </Col>
    );
};

export default SingleItem;