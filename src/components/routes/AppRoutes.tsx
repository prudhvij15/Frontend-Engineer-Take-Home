import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../..//pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
} 