import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./EmployeeLogin.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";


const EmployeeLogin = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    // const { setAuthenticated } = useAuth();

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setEmployeePassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (employeeId === null || employeeId === "") {
            setError("Employee ID Cannot Be Empty!");
            setSuccess(null)
            return;
        }
        if (employeePassword === null || employeePassword === "") {
            setError("Password Field Cannot Be Empty!")
            setSuccess(null)
            return;
        }
        console.log(employeeId)
        const backendURL = "http://localhost:8080/login"
        axios.post(backendURL, {
            loginId: employeeId,
            password: employeePassword
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
                    // setAuthenticated(true);
                    sessionStorage.setItem("username", response.data)
                    navigate("/dashboard");
                }
            })
            .catch(err => {
                console.log(err)
                setError("Server Error !");
                setSuccess(null);
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
                <Button variant="primary" onClick={handleFormSubmit}>  Submit </Button>
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>
            <div className="routing"><div>Don't have an account ? </div><Link to="/register"><Button variant="primary">Register</Button></Link></div>
        </Container>
    )
}

export default EmployeeLogin;