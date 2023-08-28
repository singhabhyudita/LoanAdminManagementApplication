import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdminEmployeeService from '../services/AdminEmployeeService';
import Navbar from './Navbar';
import "../styles/background.css";

const AdminViewEmployee = () => {
    const [employeeData, setEmployeeData] = useState(null);
    const [error, setError] = useState(null);
    const [isModalShown, setIsModalShown] = useState(false);
    const [employeeId, setEmployeeId] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [employeePassword, setEmployeePassword] = useState('');
    const [errorModal, setErrorModal] = useState(null);
    const [successModal, setSuccessModal] = useState(null);

    const navigate = useNavigate();

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

    const handleFormSubmit = () => {
        if (employeeId === "" || !employeeName === "" || !designation === "" || department === "" || gender === "" || dateOfBirth === "" || dateOfJoining === "" || employeePassword === "") {
            setErrorModal('You need to fill all the fields to register!');
            setSuccessModal(null)
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(employeePassword)) {
            setErrorModal("Password should contain one caps, one small, one digit and one special character!");
            setSuccessModal(null);
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

        AdminEmployeeService.editEmployee(registerObject)
            .then(response => {
                const newEmployeeData = employeeData.map(employee => {
                    if (employee.employee_id === response.data.employee_id) {
                        return response.data
                    }
                    return employee;
                })
                setEmployeeData(newEmployeeData);
                setIsModalShown(false);
            })
            .catch(err => {
                console.log(err)
                setErrorModal("Server Error !");
                setSuccessModal(null);
            })
    }

    useEffect(() => {
        const getEmployeeData = async () => {
            try {
                const response = await AdminEmployeeService.viewEmployee();
                setEmployeeData(response.data)
                if (response.data.length === 0) {
                    setError("No Employee Data Found !")
                }
            } catch (err) {
                setError(err.response.data.message)
            }
        }
        getEmployeeData();
    }, [navigate])

    const handleEdit = (employee) => {
        setEmployeeId(employee.employee_id);
        setEmployeeName(employee.employee_name);
        setDepartment(employee.department);
        setDesignation(employee.designation);
        setDateOfBirth(employee.date_of_birth);
        setDateOfJoining(employee.date_of_joining);
        setEmployeePassword(employee.password);
        setGender(employee.gender === "M" ? "male" : employee.gender === "F" ? "female" : "other");
        setIsModalShown(true);
    }
    const handleDelete = async (id) => {
        try {
            const response = await AdminEmployeeService.deleteEmployee(id)
            if (response.data === "Failure") {
                setError("User Id Not Found");
            } else {
                const updatedEmployeeData = employeeData.filter(employee => employee.employee_id !== id);
                setEmployeeData(updatedEmployeeData);
                if (updatedEmployeeData.length === 0)
                    setError("No Employee Data Found !");
                else
                    setError(null);
            }
        } catch (err) {
            setError("Could Not Delete The User!")
        }
    }
    return (
        <>
            <Navbar userType={"admin"} />
            <Modal show={isModalShown} onHide={() => setIsModalShown(false)} style={{ minWidth: "700px" }}>
                <Modal.Header closeButton>
                    <Modal.Title >Edit Data for user {employeeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h2>Employee Registration</h2>
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
                        <Button variant="primary" type="button" onClick={handleFormSubmit} style={{ width: "100%" }}>
                            Submit
                        </Button>
                        {errorModal ? <div className="error">{errorModal}</div> : null}
                        {successModal ? <div className="success">{successModal}</div> : null}
                    </Form>
                </Modal.Body>
            </Modal>
            <div className='div-background'>
                <h2 className="table-header" style={{ marginBottom: "20px" }}>Employee List</h2>
                <Table striped bordered hover  style={{ minWidth: "80vw" }}>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Date Of Joining</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData ?
                            employeeData.map((employee, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{employee.employee_id}</td>
                                        <td>{employee.employee_name}</td>
                                        <td>{employee.designation}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.date_of_birth}</td>
                                        <td>{employee.date_of_joining}</td>
                                        <td><Button variant="warning" style={{ margin: "5px", cursor: "pointer" }} onClick={() => handleEdit(employee)}>Edit</Button><Button variant="danger" style={{ margin: "5px", cursor: "pointer" }} onClick={() => handleDelete(employee.employee_id)}>Delete</Button></td>
                                    </tr>
                                )
                            }) : null
                        }
                    </tbody>
                </Table>
                {error ? <div className="error">{error}</div> : null}
            </div >
        </>
    )
}

export default AdminViewEmployee;