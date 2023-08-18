import axios from "axios";
import { adminAddItemUrl, adminDeleteItemUrl, adminEditItemUrl, adminViewItemUrl,  } from "../URL";

class AdminItemService {
    constructor(){
        this.addItem = this.addItem.bind(this);
        this.viewItem = this.viewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    addItem(item){
        return axios.post(adminAddItemUrl,item);
    }
    viewItem(){
        return axios.get(adminViewItemUrl);
    }
    deleteItem(id){
        return axios.delete(adminDeleteItemUrl(id));
    }
    editItem(item){
        return axios.put(adminEditItemUrl,item);
    }
}
export default new AdminItemService();