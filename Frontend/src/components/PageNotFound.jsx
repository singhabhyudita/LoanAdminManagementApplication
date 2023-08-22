import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import userEvent from '@testing-library/user-event';

const PageNotFound = () => {
    const [userEvent, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const userType = sessionStorage.getItem("username");
        if (userType) {
            setUser(userType);
        } else {
            if (sessionStorage.getItem("adminname")) {
                setUser("admin");
            } else {
                navigate("/");
            }
        }
    }, [navigate])
    return (
        <>
            <Navbar userType={userEvent} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
                <h1> 404 , Page Not Found ! 🤕 </h1>
            </div>
        </>
    )
}

export default PageNotFound