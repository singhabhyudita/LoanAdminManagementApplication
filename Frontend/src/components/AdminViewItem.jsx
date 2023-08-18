import { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Table } from "react-bootstrap";
import AdminItemService from "../services/AdminItemService";
const AdminViewItem = () => {
   const [items,setItems] = useState([]);
   const [editItemData,setEditItemData] = useState({
        itemId: '',
        itemDescription: '',
        itemMake: '',
        itemCategory: '',
        itemValuation: '',
        issueStatus: '',
   })
   const [showEditModal,setShowEditModal]= useState(false);

   const handleDelete = (item) => {
    AdminItemService.deleteItem(item.itemId).then(response => {
        if(response!=null){
            alert(response.data);
            const updatedItems=  items.filter(obj => obj.itemId !== item.itemId);
            setItems(updatedItems);
        }
    })
   }

   const handleEdit = (item) => {
        setShowEditModal(true);
        setEditItemData({
            itemId: item.itemId,
            itemDescription: item.itemDescription,
            itemMake: item.itemMake,
            itemCategory: item.itemCategory,
            itemValuation: item.itemValuation,
            issueStatus: item.issueStatus,
        });
   }

   const handleCloseEditModel = () => {
        setShowEditModal(false);
   }

   const handleEditFormChange = (e) => {
    const {name,value} = e.target;
        setEditItemData(prevItem => ({...prevItem, [name]: value}));
   } 

   const handleSaveEdit = () => {
        AdminItemService.editItem(editItemData).then(response => {
            if(response!==null){
                const updatedItems = items.map(item => item.itemId === editItemData.itemId? editItemData: item);
                setItems(updatedItems);
                setShowEditModal(false);
            }
        })
   }
   useEffect(()=>{
        AdminItemService.viewItem().then(response => {
            console.log(response);
            setItems(response.data);
        })
   },[]);
   return(
    <Container>
            <h1>All Items</h1>
        <Table striped bordered hovered>
            <thead>
                <tr>
                <th>Item ID</th>
                <th>Category</th>
                <th>Make</th>
                <th>Description</th>
                <th>Valuation</th>
                <th>Issue Status</th>
                <th>Action(s)</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>(
                    <tr key={item.itemId}>
                        <td>{item.itemId}</td>
                        <td>{item.itemCategory}</td>
                        <td>{item.itemMake}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.itemValuation}</td>
                        <td>{item.issueStatus}</td>
                        <td>
                            <Button variant="warning" onClick={() => handleEdit(item)}>Edit</Button>
                            <Button variant="danger" onClick={() => handleDelete(item)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Modal show={showEditModal} onHide={handleCloseEditModel}>
            <ModalHeader closeButton>
                <ModalTitle>Edit Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup controlId="editItemId">
                        <FormLabel>Item ID</FormLabel>
                        <FormControl 
                        type="text"
                        name="itemId"
                        value={editItemData.itemId}
                        readOnly/>
                    </FormGroup>
                    <FormGroup controlId="editItemCategory">
                        <FormLabel>Category</FormLabel>
                        <FormControl 
                        type="text"
                        name="itemCategory"
                        value={editItemData.itemCategory}
                        onChange={handleEditFormChange}/>
                    </FormGroup>
                    <FormGroup controlId="editItemMake">
                        <FormLabel>Make</FormLabel>
                        <FormControl 
                        type="text"
                        name="itemMake"
                        value={editItemData.itemMake}
                        onChange={handleEditFormChange}/>
                    </FormGroup>
                    <FormGroup controlId="editItemDecription">
                        <FormLabel>Description</FormLabel>
                        <FormControl 
                        type="text"
                        name="itemDescription"
                        value={editItemData.itemDescription}
                        onChange={handleEditFormChange}/>
                    </FormGroup>
                    <FormGroup controlId="editItemValuation">
                        <FormLabel>Valuation</FormLabel>
                        <FormControl 
                        type="text"
                        name="itemValuation"
                        value={editItemData.itemValuation}
                        onChange={handleEditFormChange}/>
                    </FormGroup>
                    <FormGroup controlId="editIssueStatus">
                        <FormLabel>Issue Status</FormLabel>
                        <FormControl 
                        type="text"
                        name="issueStatus"
                        value={editItemData.issueStatus}
                        onChange={handleEditFormChange}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="parimary" onClick={handleSaveEdit}>Save Changes</Button>
            </ModalFooter>
        </Modal>
        </Container>
    )
}
export default AdminViewItem;