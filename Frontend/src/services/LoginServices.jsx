import axios from 'axios';
import { employeeLoginUrl, adminLoginUrl } from '../URL';

class LoginServices {
    constructor() {
        this.employeeLoginService = this.employeeLoginService.bind(this);
        this.adminLoginService = this.adminLoginService.bind(this);
    }

    employeeLoginService(loginObject) {
        return axios.post(employeeLoginUrl, loginObject);
    }

    adminLoginService(loginObject) {
        return axios.post(adminLoginUrl, loginObject);
    }
}

export default new LoginServices();