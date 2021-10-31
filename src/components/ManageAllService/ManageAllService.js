import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageAllService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://wicked-ghost-54122.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://wicked-ghost-54122.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = services.filter(user => user._id !== id)
                        setServices(remainingUsers);

                    }
                })
        }

    }

    return (
        < div className='my-5'>
            <h3 className='text-warning'>All Listed Foods for Delivery</h3>

            <Row xs={1} md={4} className="container-fluid mx-auto my-5 g-4">
                {
                    services.map(service =>
                        <Col >
                            <Card className='hover-card h-100 '>
                                <div className='container rounded'>
                                    <div>
                                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={service.image} />
                                    </div>

                                    <div>
                                        <Link className='text-decoration-none text-dark'>
                                            <Card.Body>
                                                <Card.Title className='text-center'>
                                                    <h3 className='fs-4 fw-bold'>{service.foodName}</h3>
                                                </Card.Title>

                                                <Card.Text className='text-center'>
                                                    {service.description}
                                                </Card.Text>

                                                <Card.Text>
                                                    <h4 className='text-center'>Priced At: ${service.price}</h4>
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </div>
                                </div>

                                <div className='my-3 mx-auto d-flex'>
                                    <Link to={`/allitems/${service._id}`} className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Details</Button> </Link>


                                    <Button onClick={() => handleDelete(service._id)} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-danger">Delete</Button>

                                </div>

                            </Card>
                        </Col>)
                }
            </Row>
        </div >
    );
};

export default ManageAllService;