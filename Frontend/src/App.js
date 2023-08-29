import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./components/EmployeeLogin"
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ViewItem from "../src/components/ViewItem";
import ViewLoan from "./components/ViewLoan";
import AdminViewLoan from "./components/AdminViewLoan";
import AdminItem from "./components/AdminItem";
import AdminViewItem from "./components/AdminViewItem";
import AdminViewEmployee from "./components/AdminViewEmployee";
import AddEmployee from "./components/AddEmployee";
import AdminDashBoard from "./components/AdmindashBoard";
import AdminLoan from "./components/AdminLoan";
import EmployeeDashBoard from "./components/EmployeeDashBoard";
import PageNotFound from "./components/PageNotFound";
import { Provider } from 'react-redux';
import store from "./store/store";
import ProtectedRoute from "./components/ProtectedRoute";
import { Fragment } from "react";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/login/employee" element={<EmployeeLogin />} />
            <Route exact path="/login/admin" element={<AdminLogin />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/employee/dashboard" element={<ProtectedRoute allowedRoles={['user']} element={<EmployeeDashBoard />} />} />
            <Route exact path="/apply-loan" element={<ProtectedRoute allowedRoles={['user']} element={<ApplyLoan />} />} />
            <Route exact path="/view-purchase" element={<ProtectedRoute allowedRoles={['user']} element={<ViewItem />} />} />
            <Route exact path="/view-loan" element={<ProtectedRoute allowedRoles={['user']} element={<ViewLoan />} />} />
            <Route exact path="/admin/loan/add" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminLoan />} />} />
            <Route exact path="/admin/loan/view" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminViewLoan />} />} />
            <Route exact path="/admin/item/add" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminItem />} />} />
            <Route exact path="/admin/item/view" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminViewItem />} />} />
            <Route exact path="/admin/employee/view" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminViewEmployee />} />} />
            <Route exact path="/admin/employee/add" element={<ProtectedRoute allowedRoles={['admin']} element={<AddEmployee />} />} />
            <Route exact path='/admin/dashboard' element={<ProtectedRoute allowedRoles={['admin']} element={<AdminDashBoard />} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
