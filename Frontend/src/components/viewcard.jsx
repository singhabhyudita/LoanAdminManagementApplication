import React, { useState, useEffect } from 'react'
import { Row, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export const ViewCard = () => {
   
  
    const [data, setData] = useState([])
  
    useEffect(() => {
        const getinfo = async () => {
        const id=sessionStorage.getItem("username");
        const response = await axios.get(`http://localhost:8080/api/loans/all/${id}`)
        setData(response.data);
        console.log(data)
        }
        getinfo();
    }, [])

    return (
        <div>
          <h1> Loan Cards Availed </h1>
          <Table striped bordered hover>
          
          <thead>
            <tr>
      
              <th>Loan Id</th>
              <th>Loan Type</th>
              <th>Duration</th>
              <th>Card Issue Date</th>
            
            </tr>
          </thead>
          <tbody> {data.map(user => {
              console.log(data);
          return (
            <tr>
              <td>{user.loan.loan_id}</td>
              <td>{user.loan.loan_type}</td>
              <td>{user.loan.duration}</td> 
              <td>{user.cardIssueDate}</td> 
              
            </tr>
          )})}</tbody>
        </Table>
      </div>
    )
  }
  export default ViewCard