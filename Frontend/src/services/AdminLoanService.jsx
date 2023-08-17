import { adminApplyLoanUrl, adminViewLoanUrl } from "../URL";
import axios from 'axios';
class AdminLoanService {
    constructor(){
        this.addLoan= this.addLoan.bind(this);
     }
    addLoan(loan){
        return axios.post(adminApplyLoanUrl,loan);
    }
    viewLoan(){
        return axios.get(adminViewLoanUrl);
    }

}
export default new AdminLoanService();