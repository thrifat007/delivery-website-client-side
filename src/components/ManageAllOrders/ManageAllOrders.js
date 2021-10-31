import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useMyOrders from '../../hooks/useMyOrders';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const { selectedItems } = useMyOrders();
    const [services, setServices] = useState([]);
    const [isUpdate, setIsUpdated] = useState(null);


    console.log(selectedItems);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to Update')
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

    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://wicked-ghost-54122.herokuapp.com/addOrders/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setIsUpdated(true);
                        alert('Updated');
                        window.location.reload();
                    } else {
                        setIsUpdated(false);
                    }
                })
        }
    }

    // console.log(services)
    return (
        <div>
            <h2>All Oders by the users</h2>
            {
                <Row xs={1} md={4} className="container-fluid mx-auto my-5 g-4">
                    {
                        selectedItems.map(items =>
                            <Col >
                                <Card className='hover-card h-100 '>
                                    <div className='container rounded'>
                                        <div>
                                            <Card.Img className='p-5 my-4 img-fluid' variant="top" src={items.selectedThing.image} />
                                        </div>

                                        <div>
                                            <Link className='text-decoration-none text-dark'>
                                                <Card.Body>

                                                    <Card.Title className='text-center'>
                                                        <h3 className='fs-4 fw-bold'>{items.selectedThing.foodName}</h3>
                                                    </Card.Title>

                                                    <Card.Text className='text-center'>
                                                        {items.description}
                                                    </Card.Text>

                                                    <Card.Text>
                                                        <h4 className='text-center'>Priced At: ${items.selectedThing.price}</h4>
                                                        <h5>ordered by: {items.userMail}</h5>
                                                        <h2>ORDER STATUS: <strong>{items.status}</strong></h2>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='my-3 mx-auto d-md-flex'>
                                        <Link to={`/allitems/${items.selectedThing._id}`} className='text-decoration-none'><Button className='py-2 px-4 m-2 ms-3 rounded-pill text-white' variant="btn btn-warning">Details</Button> </Link>


                                        <Button onClick={() => handleDelete(items._id)} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-danger">Delete</Button>

                                        <Button onClick={() => handleUpdate(items._id)} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-success">Update Status</Button>

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

export default ManageAllOrders;