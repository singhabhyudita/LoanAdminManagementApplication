import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ViewPurchase = () => {
    const [tableData, setTableData] = useState(null);
    useEffect(() => {
        const userId = sessionStorage.getItem("username");
        const getPurchasedItems = async () => {
            const result = await axios.get(`http://localhost:8080/api/items/all/${userId}`);
            setTableData(result.data)
        }
        getPurchasedItems();
    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", minWidth: "100vw" }}>
            <Table striped bordered hover responsive style={{ minWidth: "80vw" }}>
                <thead>
                    <tr>
                        <th>Issue Id</th>
                        <th>Item Id</th>
                        <th>Issue Status</th>
                        <th>Item Category</th>
                        <th>Item Make</th>
                        <th>Item Description</th>
                        <th>Item Valuation</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData ?
                        tableData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.issueId}</td>
                                    <td>{item.item.itemId}</td>
                                    <td>{item.item.issueStatus}</td>
                                    <td>{item.item.itemCategory}</td>
                                    <td>{item.item.itemMake}</td>
                                    <td>{item.item.itemDescription}</td>
                                    <td>{item.item.itemValuation}</td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default ViewPurchase;