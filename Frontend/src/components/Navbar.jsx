import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../styles/Navbar.css';
import { logout } from '../store/actions';

const Navbar = ({ userType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const renderAdminDropdown = () => {
    if (userType === 'admin') {
      return (
        <>
          <NavDropdown title="Employee Data" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/admin/employee/view">View Employee Data</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/employee/add">Add admin data</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Loan Data" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/admin/loan/view">View Loan Data</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/loan/add">Add Loan Data</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Item Data" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/admin/item/view">View Item Data</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/item/add">Add Item Data</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    } else if (userType) {
      return (
        <>
          <NavDropdown title="Loan Data" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/view-loan">View Your Loan Data</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Apply For Loan" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/apply-loan">Apply For Loan By Purchasing Item</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Items Purchased" className="admin-dropdown">
            <NavDropdown.Item as={Link} to="/view-purchase">View Purchased Items</NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
    return null;
  };

  return (
    <BootstrapNavbar className="custom-navbar" expand="lg">
      <BootstrapNavbar.Brand as={Link} to={userType === "admin" ? "/admin/dashboard" : "/"}>Loan Management Application</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className='left-navbar'>
            {renderAdminDropdown()}
          </div>
          <div className='right-navbar'>
            <Nav.Item className="welcome-message" style={{ textTransform: "capitalize" }}>Welcome {userType}</Nav.Item>
            <Button variant="danger" className="logout-button" onClick={handleLogout}>Logout</Button>
          </div>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
