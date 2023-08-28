import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import "../styles/background.css";

const ViewItem = () => {
    const [tableData, setTableData] = useState(null);
    const userData = useSelector(state => state.userId);
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
            <Navbar userType={userData} />
            <div className='div-background'>
                <h2 className="table-header" >Items Purchased</h2>
                <Table striped bordered hover  style={{ minWidth: "80vw" }}>
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