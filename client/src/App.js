import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import "react-toastify/dist/ReactToastify.css";
import { CartItemsProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import { UserAuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserAuthProvider>
        <ProductsProvider>
          <CartItemsProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/cart/:cartId"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <ToastContainer autoClose={3000} />
          </CartItemsProvider>
        </ProductsProvider>
      </UserAuthProvider>
    </BrowserRouter>
  );
}

export default App;
