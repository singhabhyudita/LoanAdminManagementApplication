import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/background.css";
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import CardGroup from 'react-bootstrap/CardGroup';
const EmployeeDashBoard = () => {
    const userData = useSelector(state => state.userName);
    const navigate = useNavigate();

    return (
        <>
            <Navbar userType={userData} />
            <div className="dashboard-container background-container">
                {userData ?
                    <>
                        <Container>
                        <Row className="card-row">
                        <Col xs={12} md={4}>
                        <Card className="dashboard-card">
                        <Card.Title>View Loans</Card.Title>
                        <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img variant="top" src={require('../images/card.jpg')} /></div>
                        <Card.Body>
                        <h5>
                        View loan cards that you own
                        </h5>
                         </Card.Body>
                        <Card.Footer>
                        <div className="controllers">
                            <DropdownButton id="dropdown-basic-button" title="View Loans">
                                <Dropdown.Item style={{textAlign : "center" , width : "100%"}} onClick={() => navigate("/view-loan")}>View All Loan Data</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        </Card.Footer>
                        </Card>
                        </Col>
                        <Col xs={12} md={4}>
                        <Card  className="dashboard-card">
                    
                        <Card.Title>Apply for Loans</Card.Title>
                        <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img id="apply-loan" variant="top" src={require('../images/apply-loan.png')}  /></div>

                        <Card.Body>
                        <h5>
                        Apply for loans
                        </h5>
                        </Card.Body>
                        <Card.Footer>
                        <div className="controllers">
                            <DropdownButton id="dropdown-basic-button" title="Apply For Loan">
                                <Dropdown.Item style={{textAlign : "center" , width : "100%"}} onClick={() => navigate("/apply-loan")}>Apply For Loan By Purchasing Item</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        </Card.Footer>
                        
                        </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card  className="dashboard-card">
                                <Card.Title>View Items Purchased</Card.Title>
                                <div  style={{minHeight :"300px", minWidth: "200px",justifyContent:"center",display:"flex",alignItems:"center"}}>
                        <Card.Img id="apply-loan" variant="top" src={require('../images/cart-image.png')}  /></div>
                                <Card.Body><h5>View Items purchased</h5></Card.Body>
                                <Card.Footer>
                                <div className="controllers">
                                    <DropdownButton id="dropdown-basic-button" title="Items Purchased">
                                        <Dropdown.Item style={{textAlign : "center" , width : "100%" ,  border : "1px solid black"}} onClick={() => navigate("/view-loan")}>View All Purchased Items</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                        </Container>
                    </> :
                    <h1>Are you allowed to visit here ? 🤨</h1>}
            </div>
        </>
    )
}

export default EmployeeDashBoard;