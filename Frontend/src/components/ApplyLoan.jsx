import React, { useState, useEffect } from 'react'
import { Row, Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';

const dummyData = [
    {
        item_id: 1,
        issue_status: 'N',
        item_category: 'Furniture',
        item_description: 'Chair',
        item_make: 'Wooden',
        item_valuation: 4000
    },
    {
        item_id: 2,
        issue_status: 'N',
        item_category: 'Furniture',
        item_description: 'Sofa',
        item_make: 'Wooden',
        item_valuation: 4000
    },
    {
        item_id: 3,
        issue_status: 'N',
        item_category: 'Furniture',
        item_description: 'Something Made from steel',
        item_make: 'Steel',
        item_valuation: 4000
    },
    {
        item_id: 4,
        issue_status: 'N',
        item_category: 'Crcokery',
        item_description: 'Glass',
        item_make: 'Glasses',
        item_valuation: 4000
    }
]

const ApplyLoan = () => {
    const [employeeId, setEmployeeId] = useState(null);
    const [itemCategory, setItemCategory] = useState(null);
    const [makeCategory, setMakeCategory] = useState(null);
    const [descriptionCategory, setDescriptionCategory] = useState(null);
    const [category, setCategory] = useState("");
    const [make, setMake] = useState("");
    const [description, setDescription] = useState("");
    const [valuation, setValuation] = useState("");
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        const getBasicDetails = async () => {
            setEmployeeId(sessionStorage.getItem("username"));
            // const response = await axios.get("http://localhost:8080/getCategories");
            setItemCategory([...new Set(dummyData
                .map((item, index) => {
                    return item.item_category
                }))])
            setCategory("");
            setMake("");
            setDescription("");
        }
        getBasicDetails();
    }, [])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
        setMakeCategory([...new Set(dummyData
            .filter(item => item.item_category === event.target.value)
            .map((item, index) => {
                return item.item_make;
            }))])
        setMake("");
        setDescription("");
    }

    const handleMakeChange = (event) => {
        setMake(event.target.value)
        setDescriptionCategory([...new Set(dummyData
            .filter(item => item.item_category === category && item.item_make === event.target.value)
            .map((item, index) => {
                return item.item_description;
            }))])
        setDescription("");
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setValuation(dummyData
            .filter(item => item.item_category === category && item.item_make === make && item.item_description === event.target.value)
            .map((item, index) => {
                return item.item_valuation;
            })[0])
        setSelectedId(dummyData
            .filter(item => item.item_category === category && item.item_make === make && item.item_description === event.target.value)
            .map((item, index) => {
                return item.id;
            })[0])
    }

    const handleFormSubmit = () => {

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
                    <Form.Control as="select" value={category} onChange={(e) => handleCategoryChange(e)}>
                        <option value="">Select Items</option>
                        {itemCategory ? itemCategory.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        }) : null}
                    </Form.Control>
                </Row>
                {category !== "" ?
                    <>
                        <Row className="formGroup">
                            <Form.Label>Item Make</Form.Label>
                            <Form.Control as="select" value={make} onChange={(e) => handleMakeChange(e)}>
                                <option value="">Select Item Make</option>
                                {makeCategory ? makeCategory.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }) : null}
                            </Form.Control>
                        </Row>
                        {make !== "" ?
                            <>
                                <Row className="formGroup">
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control as="select" value={description} onChange={handleDescriptionChange}>
                                        <option value="">Select Item Description</option>
                                        {descriptionCategory ? descriptionCategory.map((item, index) => {
                                            return <option key={index} value={item}>{item}</option>
                                        }) : null}
                                    </Form.Control>
                                </Row>
                                {description !== "" ?
                                    <>
                                        <Row className='formGroup'>
                                            <Form.Label>Item Value</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Item Value" value={valuation} />
                                        </Row>
                                        {selectedId !== "" ?
                                            <Button variant="primary" style={{ width: "100%" }}>  Submit </Button> : null
                                        } </> :
                                    null
                                }
                            </>
                            : null}
                    </>
                    : null}
            </Form>

        </Container>
    )
}

export default ApplyLoan