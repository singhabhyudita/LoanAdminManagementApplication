import { useState, useEffect } from "react";
import AdminItemService from "../services/AdminItemService";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const AdminItem = () => {
    const [item, setItem] = useState({
        itemId: '',
        issueStatus: '',
        itemCategory: '',
        itemMake: '',
        itemValuation: '',
        itemDescription: '',
    })
    const navigate = useNavigate("");
    useEffect(() => {
        const adminname = sessionStorage.getItem("adminname");
        if (!adminname) {
            navigate("/login/admin")
        }
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({ ...prevItem, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        AdminItemService.addItem(item).then(response => {
            if (response != null) {
                alert("Item added successfully");
                navigate("/admin/item/view");
            }
        })
    }
    return (
        <Container>
            <h1>Add Item Form</h1>
            <Form className="admin-item-form" onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Item ID</FormLabel>
                    <FormControl
                        type="text"
                        name="itemId"
                        placeholder="Enter Item ID"
                        value={item.it}
                        onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <FormControl
                        type="text"
                        name="itemCategory"
                        placeholder="Enter Category"
                        value={item.item_category}
                        onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Make</FormLabel>
                    <FormControl
                        type="text"
                        name="itemMake"
                        placeholder="Enter Make"
                        value={item.item_make}
                        onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type="text"
                        name="itemDescription"
                        placeholder="Enter Description"
                        value={item.item_description}
                        onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Valuation</FormLabel>
                    <FormControl
                        type="text"
                        name="itemValuation"
                        placeholder="Enter Valuation"
                        value={item.item_valuation}
                        onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Issue Status</FormLabel>
                    <FormControl
                        type="text"
                        name="issueStatus"
                        placeholder="Enter Issue Status"
                        value={item.issue_status}
                        onChange={handleChange} />
                </FormGroup>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
export default AdminItem;
