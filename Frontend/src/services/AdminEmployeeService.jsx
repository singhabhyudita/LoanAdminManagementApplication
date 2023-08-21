import { employeeRegisterUrl, adminDeleteEmployeeUrl, adminEditEmployeeUrl, adminViewEmployeeUrl } from "../URL";
import axios from 'axios';
class AdminEmployeeService {
    constructor() {
        this.addEmployee = this.addEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    addEmployee(employee) {
        return axios.post(employeeRegisterUrl, employee);
    }
    viewEmployee() {
        return axios.get(adminViewEmployeeUrl);
    }
    editEmployee(employee) {
        return axios.put(adminEditEmployeeUrl, employee);
    }
    deleteEmployee(id) {
        return axios.delete(adminDeleteEmployeeUrl(id));
    }

}

export default new AdminEmployeeService();