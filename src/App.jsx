import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/profile';
import ProductDetail from './pages/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Policies from './pages/policies/Policies';
import CartProvider from './context/CartContext';
import ProfileProvider from './context/ProfileContext';

function App() {
  return (
      <Router>
      <ProfileProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policies" element={<Policies />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ProfileProvider>
    </Router>
  );
}

export default App;