export const employeeRegisterUrl = "http://localhost:8080/api/employee/register";
export const employeeLoginUrl = "http://localhost:8080/api/employee/login";
export const adminLoginUrl = "http://localhost:8080/api/admin/login";
export const applyLoanUrl = (employeeId) => {
    return `http://localhost:8080/api/items/apply/${employeeId}`
}
export const viewPurchaseUrl = (userId) => {
    return `http://localhost:8080/api/items/all/${userId}`
}
export const viewLoanUrl = (id) => {
    return `http://localhost:8080/api/loans/all/${id}`
}
export const viewItemsUrl = "http://localhost:8080/api/items/showItems"