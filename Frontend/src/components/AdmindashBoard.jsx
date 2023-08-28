import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/background.css"
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AdminDashBoard = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar userType={"admin"} />
            <div className="div-background">
            <div className="dashboard-container">
                
            <Container>
                        <Row>
                        <Col>
                        <Card >
                        <Card.Title>View Loans</Card.Title>
                        <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img variant="top" src="../images/card.jpg" /></div>
                        <Card.Body>
                        <h5>
                        View loan cards that you own
                        </h5>
                         </Card.Body>
                        <Card.Footer>
                        <div className='controllers'>
                        <DropdownButton id="dropdown-basic-button" title="Add/View Employee Data">
                            <Dropdown.Item onClick={() => navigate("/admin/employee/view")}>View All Employee Data</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate("/admin/employee/add")}>Add New Employee Data</Dropdown.Item>
                        </DropdownButton>
                        </div>
                        </Card.Footer>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                    
                        <Card.Title>Apply for Loans</Card.Title>
                        <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img id="apply-loan" variant="top" src="../images/apply-loan.png"  /></div>

                        <Card.Body>
                        <h5>
                        Apply for loans
                        </h5>
                        </Card.Body>
                        <Card.Footer>
                            <div className='controllers'>
                        <DropdownButton id="dropdown-basic-button" title="Add/View Loan Data">
                        <Dropdown.Item onClick={() => navigate("/admin/loan/view")}>View All Loan Data</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/admin/loan/add")}>Add New Loan Data</Dropdown.Item>
                    </DropdownButton></div>
                        </Card.Footer>
                        
                        </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Title>View Items Purchased</Card.Title>
                                <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img id="apply-loan" variant="top" src="../images/cart-image.jpg"  /></div>
                                <Card.Body><h5>View Items purchased</h5></Card.Body>
                                <Card.Footer>
                                <div className="controllers">
                                <DropdownButton id="dropdown-basic-button" title="Add/View Item Data">
                        <Dropdown.Item onClick={() => navigate("/admin/item/view")}>View All Item Data</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/admin/item/add")}>Add New Item Data</Dropdown.Item>
                    </DropdownButton>
                
                                </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>

                            </Container>
                
                    
                    
                   
            </div>
            </div>
        </>
    )
}

export default AdminDashBoard; 