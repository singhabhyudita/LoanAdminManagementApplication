import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./components/EmployeeLogin"
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login/employee" element={<EmployeeLogin />} />
        <Route exact path="/login/admin" element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
