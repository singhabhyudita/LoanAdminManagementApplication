import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import itemServiceObject from '../services/ItemServices';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const ViewPurchase = () => {
    const [tableData, setTableData] = useState(null);
    const userData = useSelector(state => state.userId);
    const navigate = useNavigate();
    useEffect(() => {
        const getPurchasedItems = async () => {
            try {
                const result = await itemServiceObject.viewPurchasedItemService(userData);
                setTableData(result.data)
            } catch (err) {
                console.log(err);
            }
        }
        getPurchasedItems();
    }, [navigate])
    return (
        <>
            <Navbar userType={userData} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "90vh", minWidth: "100vw" }}>
                <h2 className="table-header" style={{ marginBottom: "20px" }}>Items Purchased</h2>
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
        </>
    )
}

export default ViewPurchase;