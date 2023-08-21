export const employeeRegisterUrl = "http://localhost:8080/api/employee/register";
export const employeeLoginUrl = "http://localhost:8080/api/employee/login";
export const adminLoginUrl = "http://localhost:8080/api/admin/login";
export const adminAddLoanUrl = "http://localhost:8080/api/admin/loans/add";
export const adminViewLoanUrl = "http://localhost:8080/api/admin/loans/all";
export const adminEditLoanUrl = "http://localhost:8080/api/admin/loans/update";
export const viewItemsUrl = "http://localhost:8080/api/items/showItems";
export const adminAddItemUrl = "http://localhost:8080/api/admin/items/add";
export const adminViewItemUrl = "http://localhost:8080/api/admin/items/all";
export const adminEditItemUrl = "http://localhost:8080/api/admin/items/update";
export const adminViewEmployeeUrl = "http://localhost:8080/api/admin/all";
export const adminEditEmployeeUrl = "http://localhost:8080/api/admin/update";
export const adminGetItemCategoryUrl = "http://localhost:8080/api/admin/items/getCategory";
export const applyLoanUrl = (employeeId) => {
    return `http://localhost:8080/api/items/apply/${employeeId}`
}
export const viewPurchaseUrl = (userId) => {
    return `http://localhost:8080/api/items/all/${userId}`
}
export const viewLoanUrl = (id) => {
    return `http://localhost:8080/api/loans/all/${id}`
}
export const adminDeleteLoanUrl = (loanId) => {
    return `http://localhost:8080/api/admin/loans/delete/${loanId}`
}
export const adminDeleteItemUrl = (itemId) => {
    return `http://localhost:8080/api/admin/items/delete/${itemId}`
}
export const adminDeleteEmployeeUrl = (employeeId) => {
    return `http://localhost:8080/api/admin/delete/${employeeId}`
}