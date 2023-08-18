import { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Table } from "react-bootstrap";
import AdminLoanService from "../services/AdminLoanService";
import { useNavigate } from "react-router-dom";

const AdminViewLoan = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const adminname = sessionStorage.getItem("adminname");
        if (!adminname) {
            navigate("/login/admin")
        }
    }, [])
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
        AdminLoanService.editLoan(editedLoanData).then(response => {
            if (response != null) {
                const updatedLoans = loans.map(loan => loan.loan_id === editedLoanData.loan_id ? editedLoanData : loan);
                setLoans(updatedLoans);
                setShowEditModal(false);
            }
        })
    }

    const handleCloseEditModel = () => {
        setShowEditModal(false);
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
                alert(response.data);
                const updatedLoans = loans.filter(obj => obj.loan_id !== loan.loan_id);
                setLoans(updatedLoans);
            }
        })

    }
    useEffect(() => {
        AdminLoanService.viewLoan().then(response => {
            console.log(response);
            setLoans(response.data);
        });
    }, []);
    return (
        <Container>
            <h1>All Loans</h1>
            <Table striped bordered hovered>
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
            <Modal show={showEditModal} onHide={handleCloseEditModel}>
                <ModalHeader closeButton>
                    <ModalTitle>Edit Loan</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup controlId="editLoanId">
                            <FormLabel>Loan ID</FormLabel>
                            <FormControl
                                type="text"
                                name="loan_id"
                                value={editedLoanData.loan_id}
                                readOnly />
                        </FormGroup>
                        <FormGroup controlId="editLoanType">
                            <FormLabel>Loan Type</FormLabel>
                            <FormControl
                                type="text"
                                name="loan_type"
                                value={editedLoanData.loan_type}
                                onChange={handleEditFormChange} />
                        </FormGroup>
                        <FormGroup controlId="editDuration">
                            <FormLabel>Duration</FormLabel>
                            <FormControl
                                type="text"
                                name="duration"
                                value={editedLoanData.duration}
                                onChange={handleEditFormChange} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button variant="parimary" onClick={handleSaveEdit}>Save Changes</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}
export default AdminViewLoan;