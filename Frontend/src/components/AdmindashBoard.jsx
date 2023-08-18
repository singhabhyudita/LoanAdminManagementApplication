import React, { useEffect, useState } from 'react'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const AdminDashBoard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            setUserData(username);
        } else {
            setUserData(null);
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        navigate("/login/employee");
    }

    return (
        <div className="dashboard-container">
            {userData ?
                <>
                    <Button variant="primary" onClick={handleLogout} style={{ margin: "10px", }} className='log-out'>Logout</Button>
                    <h1 className="welcome-text">Welcome {userData}</h1>
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
                </> :
                <h1>Are you allowed to visit here ? 🤨</h1>}
        </div>
    )
}

export default AdminDashBoard;