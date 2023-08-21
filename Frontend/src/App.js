import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./components/EmployeeLogin"
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ViewPurchase from "./components/ViewPurchase"
import ViewLoan from "./components/ViewLoan";
import AdminViewLoan from "./components/AdminViewLoan";
import AdminItem from "./components/AdminItem";
import AdminViewItem from "./components/AdminViewItem";
import ViewEmployee from "./components/ViewEmployee";
import AddEmployee from "./components/AddEmployee";
import AdminDashBoard from "./components/AdminDashBoard";
import AdminLoan from "./components/AdminLoan";
import EmployeeDashBoard from "./components/EmployeeDashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login/employee" element={<EmployeeLogin />} />
        <Route exact path="/login/admin" element={<AdminLogin />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<EmployeeDashBoard />} />
        <Route exact path="/apply-loan" element={<ApplyLoan />} />
        <Route exact path="/view-purchase" element={<ViewPurchase />} />
        <Route exact path="/view-loan" element={<ViewLoan />} />
        <Route exact path="/admin/loan/add" element={<AdminLoan />} />
        <Route exact path="/admin/loan/view" element={<AdminViewLoan />} />
        <Route exact path="/admin/item/add" element={<AdminItem />} />
        <Route exact path="/admin/item/view" element={<AdminViewItem />} />
        <Route exact path="/admin/employee/view" element={<ViewEmployee />} />
        <Route exact path="/admin/employee/add" element={<AddEmployee />} />
        <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
