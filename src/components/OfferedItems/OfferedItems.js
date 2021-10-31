import React from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import SingleItem from '../SingleItem/SingleItem';

const OfferedItems = () => {
    const { items } = useData();

    const hotItems = items.sort((first, second) => 0.5 - Math.random());



    return (
        <div className='container mt-3'>
            <h2>Offers Available Right now!</h2>

            <Row xs={1} md={3} className="container mx-auto my-5 g-4">
                {
                    hotItems.length == 0 ? <Spinner className='mx-auto' animation="border" /> : hotItems.slice(0, 6).map(item => <SingleItem key={item._id}
                        item={item}></SingleItem>)

                }
            </Row>

            <Link to="/allitems" className='text-decoration-none'><Button className='my-4 px-5 ms-3 rounded-pill ' variant="outline-warning">Show All Items</Button> </Link>

        </div>
    );
};

export default OfferedItems;