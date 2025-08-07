// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Problems from "../pages/Problems";
// import ProblemDetails from "../pages/ProblemDetails";
// import Submissions from "../pages/Submissions";
// import Navbar from "../components/Navbar";

export default function AppRouter() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/problems" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetails />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
