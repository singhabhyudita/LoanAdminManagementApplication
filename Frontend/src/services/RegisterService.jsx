import axios from 'axios'
import { employeeRegisterUrl } from '../URL'

class RegisterService {
    constructor() {
        this.registerEmployee = this.registerEmployee.bind(this);
    }

    registerEmployee(RegisterObject) {
        return axios.post(employeeRegisterUrl, RegisterObject);
    }
}

export default new RegisterService();