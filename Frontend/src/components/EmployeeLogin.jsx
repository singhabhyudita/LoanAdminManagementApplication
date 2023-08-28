import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EmployeeLogin.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import LoginService from '../services/LoginService';
=======
import LoginServices from '../services/LoginServices';
>>>>>>> 18046880ba6b45add660234b7b24dda4b07f97eb
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions';

const EmployeeLogin = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        const loginObject = {
            loginId: employeeId,
            password: employeePassword
        }
        LoginService.employeeLoginService(loginObject)
            .then(response => {
                setSuccess(`Login Successfull !`);
                setError(null);
<<<<<<< HEAD
                dispatch(setUser(response.data.employeeName, "user"));
                navigate("/");
                sessionStorage.setItem("userId", response.data.employeeId);
                console.log(sessionStorage.getItem("userId"))
=======
                dispatch(setUser(response.data.employeeId, "user"));
                navigate("/");
                sessionStorage.setItem("userId", response.data.employeeId);
>>>>>>> 18046880ba6b45add660234b7b24dda4b07f97eb
                sessionStorage.setItem("userRole", "user");
            })
            .catch(err => {
                setError(err.response.data.message);
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
                <Button className="login-button" onClick={handleFormSubmit}>  Login </Button>
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>
            <div className="routing"><div>Don't have an account ? </div><Link to="/register"><Button >Register</Button></Link></div>
        </Container>
    )
}

export default EmployeeLogin;