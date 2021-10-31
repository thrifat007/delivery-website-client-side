import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useMyOrders from '../../hooks/useMyOrders';

const MyOrders = () => {
    const { user } = useAuth();
    const { selectedItems } = useMyOrders();
    const [services, setServices] = useState([]);


    console.log(selectedItems);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://wicked-ghost-54122.herokuapp.com/addOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = services.filter(selectedItem => selectedItem._id !== id);
                        setServices(remainingUsers);
                        window.location.reload();
                    }
                })
        }

    }

    // console.log(services)


    return (
        <div>
            <h2>My Orders</h2>
            {
                <Row xs={1} md={4} className="container-fluid mx-auto my-5 g-4">
                    {
                        selectedItems.map(items => user.email == items.userMail && <Col >
                            <Card className='hover-card h-100 '>
                                <div className='container rounded'>
                                    <div>
                                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={items.selectedThing.image} />
                                    </div>

                                    <div>
                                        <Link className='text-decoration-none text-dark'>
                                            <Card.Body>
                                                <p>{user.email}</p>
                                                <Card.Title className='text-center'>
                                                    <h3 className='fs-4 fw-bold'>{items.selectedThing.foodName}</h3>
                                                </Card.Title>

                                                <Card.Text className='text-center'>
                                                    {items.description}
                                                </Card.Text>

                                                <Card.Text>
                                                    <h4 className='text-center'>Priced At: ${items.selectedThing.price}</h4>
                                                    <h2>ORDER STATUS: <strong>{items.status}</strong></h2>
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </div>
                                </div>

                                <div className='my-3 mx-auto d-flex'>
                                    <Link to={`/allitems/${items.selectedThing._id}`} className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Details</Button> </Link>


                                    <Button onClick={() => handleDelete(items._id)} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-danger">Delete</Button>

                                </div>

                            </Card>
                        </Col>
                        )
                    }
                </Row>
            }

        </div>
    );
};

export default MyOrders;