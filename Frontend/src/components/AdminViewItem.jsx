import { useEffect, useState } from "react";
import { Button, Form, Modal, ModalBody, Table, Row, Col } from "react-bootstrap";
import AdminItemService from "../services/AdminItemService";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const AdminViewItem = () => {
    const [errorModal, setErrorModal] = useState(null);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [editItemData, setEditItemData] = useState({
        itemId: '',
        itemDescription: '',
        itemMake: '',
        itemCategory: '',
        itemValuation: '',
        issueStatus: '',
    })
    const [showEditModal, setShowEditModal] = useState(false);

    const handleDelete = (item) => {
        AdminItemService.deleteItem(item.itemId).then(response => {
            if (response != null) {
                const updatedItems = items.filter(obj => obj.itemId !== item.itemId);
                setItems(updatedItems);
                if (updatedItems.length === 0)
                    setError("No Items Found")
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handleEdit = (item) => {
        setShowEditModal(true);
        setEditItemData({
            itemId: item.itemId,
            itemDescription: item.itemDescription,
            itemMake: item.itemMake,
            itemCategory: item.itemCategory,
            itemValuation: item.itemValuation,
            issueStatus: item.issueStatus,
        });
    }

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditItemData(prevItem => ({ ...prevItem, [name]: value }));
    }

    const handleSaveEdit = () => {
        if (editItemData.itemId === "" || editItemData.itemCategory === "" || editItemData.itemMake === "" || editItemData.itemDescription === "" || editItemData.itemValuation === "" || editItemData.issueStatus === "") {
            setErrorModal("You need to fill all the fields !");
            return;
        }
        AdminItemService.editItem(editItemData).then(response => {
            if (response !== null) {
                const updatedItems = items.map(item => item.itemId === editItemData.itemId ? editItemData : item);
                setItems(updatedItems);
                setShowEditModal(false);
            } else {
                setErrorModal("Error occured while updating!")
            }
        })
            .catch(err => {
                setErrorModal("Error occured while updating!")
            })
    }
    useEffect(() => {
        AdminItemService.viewItem().then(response => {
            setItems(response.data);
            setError(null);
        })
            .catch(err => {
                setError(err.response.data.message);
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
                            <Modal.Title >Edit Loan Data For {editItemData.itemId}</Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <Form>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Item ID</Form.Label>
                                        <Form.Control type="text" value={editItemData.itemId} readOnly style={{ cursor: "not-allowed" }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" name="itemCategory" value={editItemData.itemCategory} readOnly />
                                    </Col>
                                </Row>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Item Make</Form.Label>
                                        <Form.Control type="text" name="itemMake" value={editItemData.itemMake} readOnly />
                                    </Col>
                                    <Col>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Item Description" name="itemDescription" value={editItemData.itemDescription} onChange={handleEditFormChange} />
                                    </Col>
                                </Row>
                                <Row className="formGroup">
                                    <Col>
                                        <Form.Label>Item Valuation</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Item Valuation" name="itemValuation" value={editItemData.itemValuation} onChange={handleEditFormChange} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Issue Status</Form.Label>
                                        <Form.Control type="text" name="issueStatus" value={editItemData.issueStatus} readOnly />
                                    </Col>
                                </Row>
                                <Button variant="primary" type="button" onClick={handleSaveEdit} style={{ width: "100%" }}>
                                    Submit
                                </Button>
                                {errorModal ? <div className="error">{errorModal}</div> : null}
                            </Form>
                        </ModalBody>
                    </Modal>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "90vh", minWidth: "100vw" }}>
                        <h2 className="table-header" style={{ marginBottom: "20px" }}>Items List</h2>
                        <Table triped bordered hover responsive style={{ minWidth: "80vw" }}>
                            <thead>
                                <tr>
                                    <th>Item ID</th>
                                    <th>Category</th>
                                    <th>Make</th>
                                    <th>Description</th>
                                    <th>Valuation</th>
                                    <th>Issue Status</th>
                                    <th>Action(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.itemId}>
                                        <td>{item.itemId}</td>
                                        <td>{item.itemCategory}</td>
                                        <td>{item.itemMake}</td>
                                        <td>{item.itemDescription}</td>
                                        <td>{item.itemValuation}</td>
                                        <td>{item.issueStatus}</td>
                                        <td>
                                            <Button style={{ margin: "5px", cursor: "pointer" }} variant="warning" onClick={() => handleEdit(item)}>Edit</Button>
                                            <Button style={{ margin: "5px", cursor: "pointer" }} variant="danger" onClick={() => handleDelete(item)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div> </>}
        </>
    )
}
export default AdminViewItem;