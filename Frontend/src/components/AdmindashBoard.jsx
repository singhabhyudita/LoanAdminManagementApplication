import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/background.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminDashBoard = () => {
  const userData = useSelector((state) => state.userName);
  const navigate = useNavigate();

  return (
    <>
      <Navbar userType={userData} />
        <div className="dashboard-container background-container">
          {userData ? (
            <Container>
              <Row className="card-row">
                <Col xs={12} md={4}>
                  <Card className="admin-card">
                    <Card.Title>Employee Data</Card.Title>
                    <div
                      style={{
                        minHeight: "200px",
                        minWidth: "200px",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={require("../images/employee.jpg")}
                        className='employee-image'
                      />
                    </div>
                    <Card.Body>
                      <h5>Add or View Employees</h5>
                    </Card.Body>
                    <Card.Footer>
                      <div className="controllers">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="Add/View Employees"
                        >
                          <Dropdown.Item onClick={() => navigate("/admin/employee/add")}>
                            Add an employee
                          </Dropdown.Item>
                          <Dropdown.Item onClick={()=> navigate("/admin/employee/view")}>
                            View all employees
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="admin-card">
                    <Card.Title>Loan Data</Card.Title>
                    <div
                      style={{
                        minHeight: "300px",
                        minWidth: "200px",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Card.Img
                        id="apply-loan"
                        variant="top"
                        src={require("../images/card.jpg")}
                      />
                    </div>

                    <Card.Body>
                      <h5>Add or View Loans</h5>
                    </Card.Body>
                    <Card.Footer>
                      <div className="controllers">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="Add/View Loans"
                        >
                          <Dropdown.Item
                            onClick={() => navigate("/admin/loan/add")}
                          >
                           Add a loan
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate("/admin/loan/view")}>
                            View all loans
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="admin-card">
                    <Card.Title>Item Data</Card.Title>
                    <div
                      style={{
                        minHeight: "300px",
                        minWidth: "200px",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Card.Img
                        id="apply-loan"
                        variant="top"
                        src={require("../images/apply-loan.png")}
                      />
                    </div>
                    <Card.Body>
                      <h5>Add or View Items</h5>
                    </Card.Body>
                    <Card.Footer>
                      <div className="controllers">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="Add/View Items"
                        >
                          <Dropdown.Item onClick={() => navigate("/admin/item/add")}>
                            Add an Item
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => navigate("/admin/item/view")}>
                            View all Items
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          ) : (
            <h1>Are you allowed to visit here? 🤨</h1>
          )}
        </div>
    </>
  );
};

export default AdminDashBoard;
