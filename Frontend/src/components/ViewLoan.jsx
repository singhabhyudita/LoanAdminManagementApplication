import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import itemServiceObject from '../services/ItemServices';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


export const ViewLoan = () => {
  const [data, setData] = useState(null);
  const [userData,setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getinfo = async () => {
      const id = sessionStorage.getItem("username");
      if (!id) navigate("/login/employee");
      setUserData(id);
      const response = await itemServiceObject.viewLoanService(id);
      setData(response.data);
    }
    getinfo();
  }, [navigate])

  return (
    <>
    <Navbar userType={userData} />
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "90vh", minWidth: "100vw" }}>
      <h2 className="table-header" style={{ marginBottom: "20px" }}>Loan Cards Availed</h2>
      <Table striped bordered hover responsive style={{ minWidth: "80vw" }}>
        <thead>
          <tr>
            <th>Loan Id</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Card Issue Date</th>
          </tr>
        </thead>
        <tbody>{data ? data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.loan.loan_id}</td>
              <td>{user.loan.loan_type}</td>
              <td>{user.loan.duration}</td>
              <td>{user.cardIssueDate.split("T")[0]}</td>
            </tr>
          )
        }) : null}</tbody>
      </Table>
    </div>
    </>
  )
}
export default ViewLoan;