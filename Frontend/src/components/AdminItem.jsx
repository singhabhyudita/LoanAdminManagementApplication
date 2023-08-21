import { useState, useEffect } from "react";
import AdminItemService from "../services/AdminItemService";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

const AdminItem = () => {
    const [errorModal,setErrorModal] = useState(null);
    const [item, setItem] = useState({
        itemId: '',
        issueStatus: '',
        itemCategory: '',
        itemMake: '',
        itemValuation: '',
        itemDescription: '',
    })
    const navigate = useNavigate("");
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const adminname = sessionStorage.getItem("adminname");
        if (!adminname) {
            navigate("/login/admin");
        }
        AdminItemService.getCategories().then(response => {
            console.log(response);
            setCategory(response.data);
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({ ...prevItem, [name]: value }));
    }
    const handleSubmit = (e) => {
        if(item.itemId === "" || item.itemCategory === "" || item.itemMake === "" || item.itemDescription === "" || item.itemValuation === "" || item.issueStatus === ""){
            setErrorModal("You need to fill all the fields !");
            return;
        }
        AdminItemService.addItem(item).then(response => {
            if (response != null) {
                navigate("/admin/item/view");
            } else {
                setErrorModal("Error occured while updating!")
            }
        })
        .catch(err => {
            setErrorModal("Error occured while updating!")
        })
    }
    return (
        <>
        <Navbar userType={"admin"}/>
        <Container className="login-container">
            <Form className="register-form">
                <h2>Add New Item</h2>
                <Row className="formGroup">
                    <Col>
                        <Form.Label>Item ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Item ID" name="itemId" value={item.itemId} onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" placeholder="Select Item Category" name="itemCategory" onChange={handleChange}>
                            <option>Select Item Category</option>
                        {category.map((item)=> {
                            return <option value={item}>{item}</option>
                        })}
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="formGroup">
                    <Col>
                        <Form.Label>Item Make</Form.Label>
                        <Form.Control type="text" placeholder="Enter Item Make" name="itemMake"  value={item.itemMake} onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Item Description" name="itemDescription" value={item.itemDescription} onChange={handleChange}/>
                    </Col>
                </Row>
                <Row className="formGroup">
                    <Col>
                        <Form.Label>Item Valuation</Form.Label>
                        <Form.Control type="text" placeholder="Enter Item Valuation" name="itemValuation"  value={item.itemValuation} onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Issue Status</Form.Label>
                        <Form.Control as="select" name="issueStatus" value={item.issueStatus} onChange={handleChange}>
                            <option value="">Select Issue Status</option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Button variant="primary" type="button" onClick={handleSubmit} style={{ width: "100%" }}>
                    Submit
                </Button>
                {errorModal ? <div className="error">{errorModal}</div> : null}
            </Form>
        </Container>
        </>
    )
}
export default AdminItem;
