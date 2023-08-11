import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

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

    return (
        <div>
            {userData ? <><h1>Welcome {userData}</h1> <Button variant="primary" onClick={handleLogout} style={{ margin: "10px", }}>Logout</Button></> : <h1>Are you allowed to visit here ? 🤨</h1>}
        </div>
    )
}

export default Dashboard