import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EmployeeLogin.css';
import { useNavigate } from 'react-router-dom';
import AdminEmployeeService from '../services/AdminEmployeeService';
import Navbar from './Navbar';

const Register = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');
    const [employeePassword, setEmployeePassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    const handleEmployeeNameChange = (event) => {
        setEmployeeName(event.target.value);
    }

    const handleDesignationChange = (event) => {
        setDesignation(event.target.value);
    }

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    }

    const handleDateOfJoiningChange = (event) => {
        setDateOfJoining(event.target.value);
    }

    const handleEmployeePasswordChange = (event) => {
        setEmployeePassword(event.target.value);
    }

    const clearFields = () => {
        setEmployeeId("");
        setEmployeeName("");
        setDateOfBirth("");
        setDateOfJoining("");
        setDepartment("");
        setDesignation("");
        setGender("");
        setEmployeePassword("");
    }

    const handleFormSubmit = () => {
        if (employeeId === "" || !employeeName === "" || !designation === "" || department === "" || gender === "" || dateOfBirth === "" || dateOfJoining === "" || employeePassword === "") {
            setError('You need to fill all the fields to register!');
            setSuccess(null)
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(employeePassword)) {
            setError("Password should contain one caps, one small, one digit and one special character!");
            setSuccess(null);
            return;
        }

        let genderChar;
        if (gender === "male")
            genderChar = "M";
        else if (gender === "female")
            genderChar = "F"
        else
            genderChar = "O"

        const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0];
        const formattedDateOfJoining = new Date(dateOfJoining).toISOString().split('T')[0]

        if (formattedDateOfBirth >= formattedDateOfJoining) {
            setError("Date Of Birth Cannot Be Greater Than Date Of Joining!")
            return;
        }

        const registerObject = {
            employee_id: employeeId,
            employee_name: employeeName,
            designation: designation,
            department: department,
            gender: genderChar,
            date_of_birth: formattedDateOfBirth,
            date_of_joining: formattedDateOfJoining,
            password: employeePassword
        }
        AdminEmployeeService.addEmployee(registerObject)
            .then(response => {
                console.log(response.data)
                if (response.data === "") {
                    setError("Couldn't create user Data , Try Again!");
                    setSuccess(null);
                } else {
                    setSuccess(`Added New User !`);
                    setError(null);
                    clearFields();
                    navigate("/admin/employee/view")
                }
            })
            .catch(err => {
                if (err.response.data) {
                    setError(err.response.data.message);
                    clearFields();
                }
                else setError("Server Error ! Try Again !");
                setSuccess(null);
            })
    }

    return (
        <>
            <Navbar userType={"admin"} />
            <div className='background-container'>
            <Container className="login-container">
                <Form className="register-form" >
                    <h2>Employee Registration</h2>
                    <Row className='formGroup'>
                        <Col>
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Employee ID" value={employeeId} onChange={handleEmployeeIdChange} />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={employeePassword} onChange={handleEmployeePasswordChange} />
                        </Col>
                    </Row>
                    <Row className="formGroup">
                        <Col>
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Employee Name" value={employeeName} onChange={handleEmployeeNameChange} />
                        </Col>
                        <Col>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value={gender} onChange={handleGenderChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="formGroup">
                        <Col>
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" placeholder="Enter Department" value={department} onChange={handleDepartmentChange} />
                        </Col>
                        <Col>
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Designation" value={designation} onChange={handleDesignationChange} />
                        </Col>
                    </Row>
                    <Row className="formGroup">
                        <Col>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                        </Col>
                        <Col>
                            <Form.Label>Date of Joining</Form.Label>
                            <Form.Control type="date" value={dateOfJoining} onChange={handleDateOfJoiningChange} />
                        </Col>
                    </Row>
                    <Button className="login-button" type="button" onClick={handleFormSubmit}>
                        Register
                    </Button>
                    {error ? <div className="error">{error}</div> : null}
                    {success ? <div className="success">{success}</div> : null}
                </Form>
            </Container>
            </div>
        </>
    );
}

export default Register;
