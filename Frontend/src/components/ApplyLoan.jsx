import React, { useState, useEffect } from 'react'
import { Row, Form, Container, Button } from 'react-bootstrap';
import itemServiceObject from '../services/ItemServices';
import { useNavigate } from 'react-router-dom';

const ApplyLoan = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [itemCategory, setItemCategory] = useState(null);
    const [makeCategory, setMakeCategory] = useState(null);
    const [descriptionCategory, setDescriptionCategory] = useState(null);
    const [category, setCategory] = useState("");
    const [make, setMake] = useState("");
    const [description, setDescription] = useState("");
    const [valuation, setValuation] = useState("");
    const [object, setObject] = useState(null);
    const [response, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const getBasicDetails = async () => {
            const employeeIdFromSession = sessionStorage.getItem("username");
            if (!employeeIdFromSession) navigate("/login/employee")
            setEmployeeId(employeeIdFromSession);
            const responseValue = await itemServiceObject.viewItemsService();
            setResponse(responseValue.data)
            setItemCategory([...new Set(responseValue.data
                .map((item, index) => {
                    return item.itemCategory
                }))])
            setCategory("");
            setMake("");
            setDescription("");
            setError(null);
            setSuccess(null);
        }
        getBasicDetails();
    }, [])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
        setMakeCategory([...new Set(response
            .filter(item => item.itemCategory === event.target.value)
            .map((item, index) => {
                return item.itemMake;
            }))])
        setMake("");
        setDescription("");
        setError(null);
        setSuccess(null);
    }

    const handleMakeChange = (event) => {
        setMake(event.target.value)
        setDescriptionCategory([...new Set(response
            .filter(item => item.itemCategory === category && item.itemMake === event.target.value)
            .map((item, index) => {
                return item.itemDescription;
            }))])
        setDescription("");
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setValuation(response
            .filter(item => item.itemCategory === category && item.itemMake === make && item.itemDescription === event.target.value)
            .map((item, index) => {
                return item.itemValuation;
            })[0])
        setObject(response
            .filter(item => item.itemCategory === category && item.itemMake === make && item.itemDescription === event.target.value)
            .map((item, index) => {
                return item;
            })[0])
        setError(null);
        setSuccess(null);
    }

    const handleFormSubmit = async () => {
        try {
            const itemObject = {
                itemId: object.itemId,
                itemDescription: object.itemDescription,
                issueStatus: object.issueStatus,
                itemMake: object.itemMake,
                itemCategory: object.itemCategory,
                itemValuation: object.itemValuation
            }
            await itemServiceObject.applyLoanService(itemObject, employeeId)
            setSuccess("Successfully Submitted Data");
            setError(null);
        } catch (err) {
            setError("Not Able To Submit !");
            setSuccess(null);
        }
    }

    return (
        <Container className="login-container">
            <Form className="register-form">
                <h2>Apply For Loan</h2>
                <Row className='formGroup'>
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee ID" value={employeeId} disabled style={{ cursor: "not-allowed" }} />
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
                                            <Form.Control type="text" placeholder="Enter Item Value" value={valuation} disabled style={{ cursor: "not-allowed" }} />
                                        </Row>
                                        {object ?
                                            <Button variant="primary" style={{ width: "100%" }} onClick={handleFormSubmit}>  Submit </Button> : null
                                        } </> :
                                    null
                                }
                            </>
                            : null}
                    </>
                    : null}
                {error ? <div className="error">{error}</div> : null}
                {success ? <div className="success">{success}</div> : null}
            </Form>

        </Container>
    )
}

export default ApplyLoan