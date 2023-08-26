import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';

const PageNotFound = () => {
    const userEvent = useSelector(state => state.userId)
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