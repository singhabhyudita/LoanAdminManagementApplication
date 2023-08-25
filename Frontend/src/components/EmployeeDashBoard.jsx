import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const EmployeeDashBoard = () => {
    const userData = useSelector(state => state.userId);
    const navigate = useNavigate();

    return (
        <>
            <Navbar userType={userData} />
            <div className="dashboard-container">
                {userData ?
                    <>
                        <div className="controllers">
                            <DropdownButton id="dropdown-basic-button" title="View Loans">
                                <Dropdown.Item onClick={() => navigate("/view-loan")}>View All Loan Data</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton id="dropdown-basic-button" title="Apply For Loan">
                                <Dropdown.Item onClick={() => navigate("/apply-loan")}>Apply For Loan By Purchasing Item</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton id="dropdown-basic-button" title="Items Purchased">
                                <Dropdown.Item onClick={() => navigate("/view-loan")}>View All Purchased Items</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </> :
                    <h1>Are you allowed to visit here ? 🤨</h1>}
            </div>
        </>
    )
}

export default EmployeeDashBoard;