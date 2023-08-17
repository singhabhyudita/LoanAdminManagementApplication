import axios from 'axios';

import { viewPurchaseUrl, applyLoanUrl, viewItemsUrl, viewLoanUrl } from '../URL';

class ItemServices {
    constructor() {
        this.applyLoanService = this.applyLoanService.bind(this);
        this.viewItemsService = this.viewItemsService.bind(this);
    }

    applyLoanService(itemObject, userId) {
        return axios.post(applyLoanUrl(userId), itemObject)
    }

    viewItemsService() {
        return axios.get(viewItemsUrl)
    }

    viewLoanService(employeeId) {
        return axios.get(viewLoanUrl(employeeId))
    }

    viewPurchasedItemService(employeeId) {
        return axios.get(viewPurchaseUrl(employeeId))
    }

}

const itemServiceObject = new ItemServices();

export default itemServiceObject;