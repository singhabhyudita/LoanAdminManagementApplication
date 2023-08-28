import { useEffect, useState } from "react";
import { Button, Row, Col, Form, Modal, ModalBody, Table } from "react-bootstrap";
import AdminLoanService from "../services/AdminLoanService";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/background.css";

const AdminViewLoan = () => {
    const [errorModal, setErrorModal] = useState(null);
    const [error, setError] = useState(null);
    const [loans, setLoans] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedLoanData, setEditedLoanData] = useState({
        loan_id: '',
        loan_type: '',
        duration: '',
    });

    const handleEdit = (loan) => {
        setShowEditModal(true);
        setEditedLoanData({
            loan_id: loan.loan_id,
            loan_type: loan.loan_type,
            duration: loan.duration,
        });
    }

    const handleSaveEdit = () => {
        if (editedLoanData.loan_id === "" || editedLoanData.loan_type === "" || editedLoanData.duration === "") {
            setErrorModal("You need to fill all the fields !");
            return;
        }
        AdminLoanService.editLoan(editedLoanData).then(response => {
            if (response != null) {
                const updatedLoans = loans.map(loan => loan.loan_id === editedLoanData.loan_id ? editedLoanData : loan);
                setLoans(updatedLoans);
                setShowEditModal(false);
            } else {
                setErrorModal("Error occured while updating!")
            }
        })
            .catch(err => {
                setErrorModal("Error occured while updating!")
            })
    }

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditedLoanData(prevData => ({
            ...prevData, [name]: value
        }));
    }

    const handleDelete = (loan) => {
        AdminLoanService.deleteLoan(loan.loan_id).then(response => {
            if (response != null) {
                const updatedLoans = loans.filter(obj => obj.loan_id !== loan.loan_id);
                setLoans(updatedLoans);
                if (updatedLoans.length === 0)
                    setError("No Loans Found !")
            }
        })
            .catch(err => {
                console.log(err);
            })

    }
    useEffect(() => {
        AdminLoanService.viewLoan().then(response => {
            setLoans(response.data);
        })
            .catch(err => {
                setError(err.response.data.message)
            })
    }, []);
    return (
        <>
            <Navbar userType={"admin"} />
            {error ?
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
                    <h1> {error} </h1>
                </div> : <>
                    <Modal show={showEditModal} onHide={() => { setShowEditModal(false); setErrorModal(null) }} style={{ minWidth: "700px" }}>
                        <Modal.Header closeButton>
                            <Modal.Title >Edit Loan Data For {editedLoanData.loan_id}</Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <Form>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Loan ID</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Loan ID" value={editedLoanData.loan_id} readOnly style={{ cursor: "not-allowed" }} />
                                    </Col>
                                </Row>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Loan Type</Form.Label>
                                        <Form.Control type="text" name="loan_type" value={editedLoanData.loan_type} readOnly />
                                    </Col>
                                </Row>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Duration" name="duration" value={editedLoanData.duration} onChange={handleEditFormChange} />
                                    </Col>
                                </Row>
                                <Button variant="primary" type="button" onClick={handleSaveEdit} style={{ width: "100%" }}>
                                    Submit
                                </Button>
                                {errorModal ? <div className="error">{errorModal}</div> : null}
                            </Form>
                        </ModalBody>
                    </Modal>
                    <div className="div-background">
                        <h2 className="table-header" style={{ marginBottom: "20px" }}>Loan List</h2>
                        <Table triped bordered hover style={{ minWidth: "80vw" }}>
                            <thead>
                                <tr>
                                    <th>Loan ID</th>
                                    <th>Loan Type</th>
                                    <th>Duration</th>
                                    <th>Action(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loans.map(loan => (
                                    <tr key={loan.loan_id}>
                                        <td>{loan.loan_id}</td>
                                        <td>{loan.loan_type}</td>
                                        <td>{loan.duration}</td>
                                        <td>
                                            <Button style={{ margin: "5px", cursor: "pointer" }} variant="warning" onClick={() => handleEdit(loan)}>Edit</Button>
                                            <Button style={{ margin: "5px", cursor: "pointer" }} variant="danger" onClick={() => handleDelete(loan)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div> </>}
        </>
    )
}
export default AdminViewLoan;