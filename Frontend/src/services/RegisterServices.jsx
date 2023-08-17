import axios from 'axios'
import { employeeRegisterUrl } from '../URL'

class RegisterServices {
    constructor() {
        this.registerEmployee = this.registerEmployee.bind(this);
    }

    registerEmployee(RegisterObject) {
        return axios.post(employeeRegisterUrl, RegisterObject);
    }
}

const resgisterServiceObject = new RegisterServices();

export default resgisterServiceObject;