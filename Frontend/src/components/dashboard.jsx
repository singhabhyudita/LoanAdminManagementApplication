import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
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

    const handleViewLoan = () => {
        navigate("/view-loan")
    }

    const handleApplyLoan = () => {
        navigate("/apply-loan")
    }

    const handleChooseItem = () => {
        navigate("/view-purchase")
    }

    return (
        <div className="dashboard-container">
            {userData ?
                <>
                    <Button variant="primary" onClick={handleLogout} style={{ margin: "10px", }} className='log-out'>Logout</Button>
                    <h1 className="welcome-text">Welcome {userData}</h1>
                    <div className="controllers">
                        <Button variant="primary" onClick={handleViewLoan} >View Loan</Button>
                        <Button variant="primary" onClick={handleApplyLoan} >Apply For Loan</Button>
                        <Button variant="primary" onClick={handleChooseItem} >View Items Purchased</Button>
                    </div>
                </> :
                <h1>Are you allowed to visit here ? 🤨</h1>}
        </div>
    )
}

export default Dashboard