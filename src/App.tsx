import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ECommerce from "./pages/Ecommerce";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./services/auth";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/login"
    element={auth.isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Login />}
  />
  <Route
    path="/signup"
    element={auth.isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Signup />}
  />
  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  <Route path="/brandnew" element={<ECommerce />} />
  <Route path="/ecommerce" element={<ECommerce />} />
  <Route path="/product/:id" element={<ProductDetails />} />

  {/* Dynamic Gallery Route */}
  <Route path="/gallery/:serviceSlug" element={<Gallery />} />

  {/* Catch-all */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>

    </Router>
  );
}

export default App;
