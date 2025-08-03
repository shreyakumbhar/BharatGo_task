import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './Component/Home';
import Cart from './Component/Cart';
import ProductDetails from './Component/ProductDetails';
import Checkout from './Component/Checkout';
import Navbar from './Component/Navbar';
import { ProductProvider } from './Component/ProductContext';
import { AuthProvider, useAuth } from './Component/AuthContext';
import PrivateRoute from "./Component/PrivateRoute";
import Login from './Component/Login';
import SignUp from "./Component/SignuUp";

function App() {


  
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
        
          <Routes>
           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <PrivateRoute>
                  <ProductDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/products/productDetails/:id"
              element={
                <PrivateRoute>
                  <ProductDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />

            {/* Redirect unknown paths */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
