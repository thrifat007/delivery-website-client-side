import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mx-auto my-5 d-flex align-items-center justify-content-around'>
            <img src="https://images.squarespace-cdn.com/content/v1/52acc028e4b0ee34bfd87e7a/1502198461966-XROE2DX62HLF3BGH5W7C/Confusedupdate.gif" alt="" srcset="" className='img-fluid' />

            <h1>404 <br /> PAGE NOT FOUND!!! <br /> <Link to="/"><Button className='my-4 px-5 ms-3 rounded-pill' variant="btn btn-warning">To Home</Button> </Link> </h1>
        </div>
    );
};

export default NotFound;