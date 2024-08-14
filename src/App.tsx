import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/user/home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Students from "./pages/admin/students/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
