import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./EmployeeLogin.css"

const AdminLogin = () => {
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleAdminIdChange = (event) => {
        setAdminId(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setAdminPassword(event.target.value);
    }

    const handleFormSubmit = () => {
        if (adminId === null || adminId === "") {
            setError("Employee ID Cannot Be Empty!");
            return;
        }
        if (adminPassword === null || adminPassword === "") {
            setError("Password Field Cannot Be Empty!")
            return;
        }
        const backendURL = "http://localhost:80808/login"
        axios.post(backendURL, {
            admin_id: adminId,
            password: adminPassword
        })
            .then(response => {
                return response.json();
            })
    }

    return (
        <Container className="login-container">
            <Form className="login-form">
                <h2>Admin Login</h2>
                <Form.Group className="formGroup">
                    <Form.Label>Admin Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Admin ID" value={adminId} onChange={(e) => handleAdminIdChange(e)} />
                </Form.Group>
                <Form.Group className="formGroup">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={adminPassword} onChange={(e) => handlePasswordChange(e)} />
                </Form.Group>
                <Button variant="primary" type="Submit">  Submit </Button>
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>
        </Container>
    )
}

export default AdminLogin;