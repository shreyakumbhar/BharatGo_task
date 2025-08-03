// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import Home from './Component/Home';
// import Cart from './Component/Cart';
// import Products from './Component/Products';
// import ProductDetails from './Component/ProductDetails';
// import Checkout from './Component/Checkout';
// import Navbar from './Component/Navbar';
// import { ProductProvider } from './Component/ProductContext';
// import { AuthProvider } from './Component/AuthContext';
// import Login from './Component/Login';

// function App() {
//   return (
//     <div >
//       <AuthProvider>
//           <ProductProvider >
//       <Router>
// <Navbar/>
// <Routes>
//   <Route path="/" element={<Home/>}></Route>
//       <Route path="/login" element={<Login />} />
//   <Route path="/cart" element={<Cart/>}></Route>
//     <Route path="/products" element={<Products/>}></Route>
//   <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
//     <Route path="products/productDetails/:id" element={<ProductDetails/>}></Route>

//   <Route path="/cart/checkout" element={<Checkout/>}></Route>

  

 

// </Routes>
// </Router>
//     </ProductProvider> 
//     </AuthProvider> 
//     </div>
//   );
// }

// export default App;







import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Cart from './Component/Cart';

import ProductDetails from './Component/ProductDetails';
import Checkout from './Component/Checkout';
import Navbar from './Component/Navbar';
import { ProductProvider } from './Component/ProductContext';
import { AuthProvider } from './Component/AuthContext';
import PrivateRoute from "./Component/PrivateRoute";
import Login from './Component/Login';
import SignUp from "./Component/SignuUp";
function App() {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
            
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route path="/products/productDetails/:id" element={<ProductDetails />} />

              {/* Protected route */}
              <Route
                path="/cart/checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
