import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import LoanService from '../services/LoanService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import "../styles/tables.css";
import "../styles/background.css";


export const ViewLoan = () => {
  const [data, setData] = useState(null);
  const userData = useSelector(state => state.userId);
  const userName = useSelector(state => state.userName);
  const navigate = useNavigate();

  useEffect(() => {
    const getinfo = async () => {
      try {
        const response = await LoanService.viewLoanService(userData);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getinfo();
  }, [navigate])

  const checkActiveLoan = (cardIssueDate) => {
    const previousDate = new Date(cardIssueDate);
    const modifiedYear = previousDate.getFullYear() + 3;
    previousDate.setFullYear(modifiedYear);
    if (previousDate >= Date.now()) return true;
    return false;
  }

  return (
    <>
      <Navbar userType={userName} />
      <div className='div-background'>
        <h2 className="table-header" style={{ marginBottom: "20px"}}>Loan Cards Availed</h2>
        <Table className='table' striped bordered hover   >
          <thead>
            <tr>
              <th>Loan Id</th>
              <th>Loan Type</th>
              <th>Duration</th>
              <th>Card Issue Date</th>
              <th>Active Loans</th>
            </tr>
          </thead>
          <tbody>{data ? data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.loan.loan_id}</td>
                <td>{user.loan.loan_type}</td>
                <td>{user.loan.duration}</td>
                <td>{user.cardIssueDate.split("T")[0]}</td>
                <td>{checkActiveLoan(user.cardIssueDate) ? "✔️" : "❌"}</td>
              </tr>
            )
          }) : null}</tbody>
        </Table>
      </div>
    </>
  )
}
export default ViewLoan;