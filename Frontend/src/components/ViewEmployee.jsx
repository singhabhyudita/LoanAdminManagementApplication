import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewEmployee = () => {
    const [emplyeeData, setEmployeeData] = useState(null);
    useEffect(() => {
        const getEmployeeData = async () => {
            const response = await axios.get("http://localhost:8080/api/admin/all")
            console.log(response.data)
        }
        getEmployeeData();
    }, [])
    return (
        <></>
    )
}

export default ViewEmployee