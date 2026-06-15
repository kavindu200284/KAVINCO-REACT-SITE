
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ECommerce from "./pages/Ecommerce";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./services/auth";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";

import Maintenance from "./pages/Maintenance";
import EmergencyMaintenance from "./pages/EmergencyMaintenance";
import ScheduledMaintenance from "./pages/ScheduledMaintenance";
import PreventiveMaintenance from "./pages/PreventiveMaintenance";

function App() {

  useEffect(() => {
    fetch("https://your-backend.onrender.com/health")
      .catch(err => console.log("Backend wake error:", err));
  }, []);

  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route
          path="/login"
          element={
            auth.isAuthenticated()
              ? <Navigate to="/dashboard" replace />
              : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            auth.isAuthenticated()
              ? <Navigate to="/dashboard" replace />
              : <Signup />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Ecommerce */}
        <Route path="/brandnew" element={<ECommerce />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Maintenance */}
        <Route path="/maintenance" element={<Maintenance />} />

        <Route
          path="/maintenance/emergency"
          element={<EmergencyMaintenance />}
        />

        <Route
          path="/maintenance/scheduled"
          element={<ScheduledMaintenance />}
        />

        <Route
          path="/maintenance/preventive"
          element={<PreventiveMaintenance />}
        />

        {/* Gallery */}
        <Route
          path="/gallery/:serviceSlug"
          element={<Gallery />}
        />

        {/* Catch All */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </Router>
  );
}

export default App;

