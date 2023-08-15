import React, { useState, useEffect } from 'react'
import { Row, Form, Container } from 'react-bootstrap';
import axios from 'axios';

const ApplyLoan = () => {
    const [employeeId, setEmployeeId] = useState(null);
    const [itemCategory, setItemCategory] = useState(null);
    const [makeCategory, setMakeCategory] = useState(null);
    const [category, setCategory] = useState("");
    const [make, setMake] = useState("");
    const [description, setDescription] = useState("");
    const [valuation, setValuation] = useState("");

    useEffect(() => {
        const getBasicDetails = async () => {
            setEmployeeId(sessionStorage.getItem("username"));
            const response = await axios.get("http://localhost:8080/getCategories");
            setItemCategory(response.data.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            }))
        }
        getBasicDetails();
    }, [])

    useEffect(() => {
        const getMakeDetails = async () => {
            const response = await axios.get(`http://localhost:8080/getItems/${category}`);
            console.log(response.data)
            setMakeCategory(response.data.map((item, index) => {
                return <option key={index} value={item.item_make}>{item.item_make}</option>
            }))
            setDescription(response.data[0].item_description)
        }
        getMakeDetails();
    }, [category])

    const handleCategoryChange = async (event) => {
        setCategory(event.target.value)
    }

    const handleMakeChange = (event) => {
        setMake(event.target.value)
    }

    return (
        <Container className="login-container">
            <Form className="register-form">
                <h2>Apply For Loan</h2>
                <Row className='formGroup'>
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee ID" value={employeeId} />
                </Row>
                <Row className="formGroup">
                    <Form.Label>Item Category</Form.Label>
                    <Form.Control as="select" value={category} onChange={handleCategoryChange}>
                        <option value="">Select Items</option>
                        {itemCategory}
                    </Form.Control>
                </Row>
                {category !== "" ?
                    <>
                        <Row className="formGroup">
                            <Form.Label>Item Make</Form.Label>
                            <Form.Control as="select" value={make} onChange={handleMakeChange}>
                                <option value="">Select Item Make</option>
                                {makeCategory}
                            </Form.Control>
                        </Row>
                        {make !== "" ?
                            <>
                                <Row className='formGroup'>
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Item Description" value={description} />
                                </Row>
                                <Row className='formGroup'>
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Item Description" value={description} />
                                </Row>
                            </>
                            : null}
                    </>
                    : null}
            </Form>

        </Container>
    )
}

export default ApplyLoan