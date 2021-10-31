import React from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import SingleItem from '../SingleItem/SingleItem';

const Allitems = () => {
    const { items } = useData();

    return (
        < div className='my-5'>
            <h3 className='text-warning'>All Items to deliver at your Doorstep</h3>

            <Row xs={1} md={4} className="container-fluid mx-auto my-5 g-4">
                {
                    items.length == 0 ? <Spinner className='mx-auto my-5' animation="border" /> : items.map(item => <SingleItem key={item._id}
                        item={item}></SingleItem>)
                }
            </Row>

            <Link to="/" className='text-decoration-none'><Button className='my-4 px-5 ms-3 rounded-pill ' variant="outline-warning">To Home</Button> </Link>
        </div >
    );
};

export default Allitems;