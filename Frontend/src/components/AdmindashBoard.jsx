import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Navbar from './Navbar';

const AdminDashBoard = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar userType={"admin"} />
            <div className="dashboard-container">
                <div className="controllers">
                    <DropdownButton id="dropdown-basic-button" title="Add/View Employee Data">
                        <Dropdown.Item onClick={() => navigate("/admin/employee/view")}>View All Employee Data</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/admin/employee/add")}>Add New Employee Data</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Add/View Loan Data">
                        <Dropdown.Item onClick={() => navigate("/admin/loan/view")}>View All Loan Data</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/admin/loan/add")}>Add New Loan Data</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Add/View Item Data">
                        <Dropdown.Item onClick={() => navigate("/admin/item/view")}>View All Item Data</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/admin/item/add")}>Add New Item Data</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </>
    )
}

export default AdminDashBoard; 