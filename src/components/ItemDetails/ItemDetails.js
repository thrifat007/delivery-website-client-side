import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import './ItemDetails.css'

const ItemDetails = () => {
    const history = useHistory()
    const { myCart } = useCart();
    const { user } = useAuth();
    const [itemDetails, setItemDetails] = useState({});
    const { id } = useParams();

    // data fetched 
    useEffect(() => {
        const url = `https://wicked-ghost-54122.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItemDetails(data));
    }, [])

    // console.log(itemDetails);

    const { _id, foodName, image, description, price } = itemDetails;

    return (
        <div>
            <Container>
                <Card className="text-center h-100 mt-4 m-5">
                    <Card.Body className='d-md-flex justify-content-around align-items-center'>
                        <Card.Img id='foodimg' className='p-5 img-fluid' variant="top" src={image} />

                        <Card.Text className=''>
                            <Card.Title className="mt-5"><h3><strong>{foodName}</strong></h3></Card.Title>

                            <p className='text-start'> <strong className='text-muted'>Details: </strong>{description}</p>
                            <h4 className='text-center'>Estimated Delivery time <br /> <span className='text-warning text-bold'>30 Mins</span></h4>

                            <h3>Now Priced at: <strong>${price}</strong></h3>
                        </Card.Text>
                    </Card.Body>


                    <div className='my-3 mx-auto d-flex'>
                        <Link to='/allitems' className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Go Home</Button> </Link>

                        <Button onClick={() => {
                            if (user.displayName) {
                                myCart(_id, itemDetails, user.email);
                            }
                            else {
                                history.push('/login');
                            }
                        }} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Order Now</Button>
                    </div>

                </Card>
            </Container>
        </div>
    );
};

export default ItemDetails;