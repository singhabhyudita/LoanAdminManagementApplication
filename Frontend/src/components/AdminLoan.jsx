import { useState, useEffect } from "react";
import { Button, Container, Form, FormControl, FormGroup } from "react-bootstrap";
import AdminLoanService from "../services/AdminLoanService";
import { useNavigate } from "react-router-dom";

const AdminLoan = () => {
    const [loanId, setLoanId] = useState("");
    const [loanType, setLoanType] = useState("");
    const [duration, setDuration] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const adminname = sessionStorage.getItem("adminname");
        if (!adminname) {
            navigate("/login/admin")
        }
    }, [])

    const handleLoanIdChange = (event) => {
        setLoanId(event.target.value);
    }

    const handleLoanTypeChange = (event) => {
        setLoanType(event.target.value);
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit called");
        const loan = {
            loan_id: loanId,
            loan_type: loanType,
            duration: duration
        }
        AdminLoanService.addLoan(loan).then(response => {
            if (response.data != null) {
                alert("Loan added successfully");
                navigate("/admin/loan/view");
            }
        })
    }
    return (
        <Container className="admin-apply-loan">
            <Form className="admin-loan-form" onSubmit={handleSubmit}>
                <h2>Loan Cards Master Data Details</h2>
                <FormGroup controlId="loanId">
                    <Form.Label>Loan ID</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Enter Loan ID"
                        value={loanId}
                        onChange={handleLoanIdChange} ></FormControl>
                </FormGroup>
                <FormGroup controlId="loanType">
                    <Form.Label>Loan Type</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Enter Loan Type"
                        value={loanType}
                        onChange={handleLoanTypeChange} ></FormControl>
                </FormGroup>
                <FormGroup controlId="loanId">
                    <Form.Label>Duration</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Enter duration in years"
                        value={duration}
                        onChange={handleDurationChange} ></FormControl>
                </FormGroup>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default AdminLoan;