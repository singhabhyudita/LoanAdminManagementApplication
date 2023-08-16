import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./EmployeeLogin.css"
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
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
        const backendURL = "http://localhost:8080/api/admin/adminLogin"
        axios.post(backendURL, {

            login_id: adminId,
            password: adminPassword
        })
            .then(response => {
                if (response.data === "Invalid user") {
                    setError("User data not found!");
                    setSuccess(null);
                } else if (response.data === "Password not matching") {
                    setError("Invalid Credentials!");
                    setSuccess(null);
                } else {
                    setSuccess(`Login Successfull !`);
                    setError(null);
                    sessionStorage.setItem("username", response.data)
                    navigate("/dashboard");
                }
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
                <Button variant="primary" onClick={handleFormSubmit}>  Submit </Button>
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>
        </Container>
    )
}

export default AdminLogin;