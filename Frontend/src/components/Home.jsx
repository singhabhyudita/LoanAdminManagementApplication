import React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/login/employee"><Button type="Submit" variant="secondary">Login as Employee</Button></Link>
            <Link to="/login/admin"><Button variant="primary">Login as Admin</Button></Link>
            <Link to="/register"><Button variant="success">Register</Button></Link>
        </div>
    )
}

export default Home