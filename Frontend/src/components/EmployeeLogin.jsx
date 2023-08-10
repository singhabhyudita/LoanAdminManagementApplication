import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./EmployeeLogin.css"

const EmployeeLogin = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");
    const [error, setError] = useState("Error SOme Random error To Check");
    const [success, setSuccess] = useState("Success Some Random Success Message");

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setEmployeePassword(event.target.value);
    }

    const handleFormSubmit = () => {
        if (employeeId === null || employeeId === "") {
            setError("Employee ID Cannot Be Empty!");
            return;
        }
        if (employeePassword === null || employeePassword === "") {
            setError("Password Field Cannot Be Empty!")
            return;
        }
        const backendURL = "http://localhost:80808/login"
        axios.post(backendURL, {
            employee_id: employeeId,
            password: employeePassword
        })
            .then(response => {
                return response.json();
            })
    }

    return (
        <Container className="login-container">
            <Form className="login-form">
                <h2>Employee Login</h2>
                <Form.Group className="formGroup">
                    <Form.Label>Employee Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee ID" value={employeeId} onChange={(e) => handleEmployeeIdChange(e)} />
                </Form.Group>
                <Form.Group className="formGroup">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={employeePassword} onChange={(e) => handlePasswordChange(e)} />
                </Form.Group>
                <Button variant="primary" type="Submit">  Submit </Button>
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>
        </Container>
    )
}

export default EmployeeLogin;