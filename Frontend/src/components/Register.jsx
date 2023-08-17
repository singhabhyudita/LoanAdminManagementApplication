import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './EmployeeLogin.css';
import { Link } from 'react-router-dom';

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
    if (gender === "Male")
      genderChar = "M";
    else if (gender === "Female")
      genderChar = "F"
    else
      genderChar = "O"

    const formattedDateOfBirth = new Date(dateOfBirth).toISOString().split('T')[0];
    const formattedDateOfJoining = new Date(dateOfJoining).toISOString().split('T')[0]

    const backendURL = 'http://localhost:8080/api/employee/register';
    axios.post(backendURL, {
      employee_id: employeeId,
      employee_name: employeeName,
      designation: designation,
      department: department,
      gender: genderChar,
      date_of_birth: formattedDateOfBirth,
      date_of_joining: formattedDateOfJoining,
      password: employeePassword
    })
      .then(response => {
        console.log(response.data)
        if (response.data === "") {
          setError("Couldn't create user Data , Try Again!");
          setSuccess(null);
        } else {
          setSuccess(`Register Successfull , Please Log In !`);
          setError(null);
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
      <Form className="register-form">
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
        <Button variant="primary" type="button" onClick={handleFormSubmit}>
          Submit
        </Button>
        {error ? <div className="error">{error}</div> : null}
        {success ? <div className="success">{success}</div> : null}
      </Form>
      <div className="routing"><div>Existing User ? </div><Link to="/login/employee"><Button variant="primary">Login</Button></Link></div>
    </Container>
  );
}

export default Register;
