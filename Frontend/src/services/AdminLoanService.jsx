import { adminAddLoanUrl, adminDeleteLoanUrl, adminEditLoanUrl, adminViewLoanUrl } from "../URL";
import axios from 'axios';
class AdminLoanService {
    constructor(){
        this.addLoan= this.addLoan.bind(this);
        this.viewLoan=this.viewLoan.bind(this);
        this.editLoan = this.editLoan.bind(this);
        this.deleteLoan=this.deleteLoan.bind(this);
     }
    addLoan(loan){
        return axios.post(adminAddLoanUrl,loan);
    }
    viewLoan(){
        return axios.get(adminViewLoanUrl);
    }
    editLoan(loan){
    return axios.put(adminEditLoanUrl,loan);
    }
    deleteLoan(id){
        return axios.delete(adminDeleteLoanUrl(id));
    }

}
export default new AdminLoanService();