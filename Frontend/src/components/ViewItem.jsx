import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import "../styles/background.css";
import "../styles/tables.css";

const ViewItem = () => {
    const [tableData, setTableData] = useState(null);
    const userData = useSelector(state => state.userId);
    const employeeName = useSelector(state => state.userName);
    const navigate = useNavigate();
    useEffect(() => {
        const getPurchasedItems = async () => {
            try {
                const result = await ItemService.viewPurchasedItemService(userData);
                console.log(result)
                setTableData(result.data)
            } catch (err) {
                console.log(err);
            }
        }
        getPurchasedItems();
    }, [navigate])
    return (
        <>
            <Navbar userType={employeeName} />
            <div className="background-container"></div>
                <div className="table-container">
                <h2 className="table-header" >Items Purchased</h2>
                <Table className='table' striped bordered hover>
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

export default ViewItem;