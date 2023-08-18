import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./components/EmployeeLogin"
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from './components/dashboard'
import ApplyLoan from "./components/ApplyLoan";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";
import ViewPurchase from "./components/ViewPurchase"
import ViewCard from "./components/viewcard"
import ViewEmployee from "./components/ViewEmployee";
import AddEmployee from "./components/AddEmployee";
import AdmindashBoard from "./components/AdmindashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login/employee" element={<EmployeeLogin />} />
        <Route exact path="/login/admin" element={<AdminLogin />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/view-purchase" element={<ViewPurchase />} />
        <Route path="/view-loan" element={<ViewCard />} />
        <Route path="/view-employee" element={<ViewEmployee />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/admin-dashboard" element={<AdmindashBoard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
