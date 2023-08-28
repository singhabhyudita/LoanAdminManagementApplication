import axios from 'axios';

import { applyLoanUrl, viewLoanUrl } from '../URL';

class LoanService {
    
    constructor() {
        this.applyLoanService = this.applyLoanService.bind(this);
        this.viewLoanService = this.viewLoanService.bind(this);
    }
    applyLoanService(itemObject, userId) {
        return axios.post(applyLoanUrl(userId), itemObject);
    }
    viewLoanService(employeeId) {
        return axios.get(viewLoanUrl(employeeId))
    }
}

export default new LoanService();