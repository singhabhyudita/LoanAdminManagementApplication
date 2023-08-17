import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AdminLoanService from "../services/AdminLoanService";

const AdminViewLoan = () => {
    const [loans,setLoans]= useState([]);

    useEffect(()=>{
        AdminLoanService.viewLoan().then(response => {
            console.log(response);
            setLoans(response.data);
        });
    })
    return (
        <div>
            <div>All Loans</div>
        <Table striped bordered hovered>
            <thead>
                <tr>
                <th>Loan ID</th>
                <th>Loan Type</th>
                <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {loans.map(loan =>(
                    <tr key={loan.loan_id}>
                        <td>{loan.loan_id}</td>
                        <td>{loan.loan_type}</td>
                        <td>{loan.duration}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    )
}
export default AdminViewLoan;