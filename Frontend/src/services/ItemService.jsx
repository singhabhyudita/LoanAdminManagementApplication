import axios from 'axios';

import { viewPurchaseUrl, viewItemsUrl } from '../URL';

class ItemService {
    
    constructor() {
        this.viewPurchasedItemService = this.viewPurchasedItemService.bind(this);
        this.viewItemsService = this.viewItemsService.bind(this);
    }

    viewItemsService() {
        return axios.get(viewItemsUrl)
    }

    viewPurchasedItemService(employeeId) {
        return axios.get(viewPurchaseUrl(employeeId))
    }
}


export default new ItemService();