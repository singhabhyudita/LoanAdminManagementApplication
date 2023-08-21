import { useState, useEffect } from "react";
import { Button, Container, Form ,Row , Col } from "react-bootstrap";
import AdminLoanService from "../services/AdminLoanService";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLoan = () => {
    const [loanId, setLoanId] = useState("");
    const [loanType, setLoanType] = useState("");
    const [duration, setDuration] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const adminname = sessionStorage.getItem("adminname");
        if (!adminname) {
            navigate("/login/admin")
        }
    }, [navigate])

    const handleLoanIdChange = (event) => {
        setLoanId(event.target.value);
    }

    const handleLoanTypeChange = (event) => {
        setLoanType(event.target.value);
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }

    const handleSubmit = () => {
        if(loanId === ""  || loanType === "" || duration === ""){
            setError("You need to fill all the areas !");
            return;
        }
        const loan = {
            loan_id: loanId,
            loan_type: loanType,
            duration: duration
        }
        AdminLoanService.addLoan(loan).then(response => {
            if (response.data != null) {
                navigate("/admin/loan/view");
            }
        })
    }
    return (
        <>
        <Navbar userType={"admin"}/>
        <Container className="login-container">
            <Form className="register-form">
                <h2>Loan Cards Master Data Details</h2>
                <Row className='formGroup'>
                    <Col>
                        <Form.Label>Loan ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Loan ID" value={loanId} onChange={handleLoanIdChange} />
                    </Col>
                </Row>
                <Row className='formGroup'>
                    <Col>
                        <Form.Label>Loan Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter Loan Type" value={loanType} onChange={handleLoanTypeChange} />
                    </Col>
                </Row>
                <Row className='formGroup'>
                    <Col>
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" placeholder="Enter Duration" value={duration} onChange={handleDurationChange} />
                    </Col>
                </Row>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                {error ? <div className="error">{error}</div> : null}
            </Form>
        </Container>
        </>
    )
}
export default AdminLoan;