import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/navbar.jsx';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Policies from './pages/Policies';

function App() {
  return (
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-stone-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policies" element={<Policies />} />
              </Routes>
            </main>
            <footer className="bg-brown-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
                    {/* Add social media links */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                    <Link to="/contact" className="hover:text-brown-300">Contáctanos</Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <Link to="/policies" className="hover:text-brown-300">Políticas</Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </UserProvider>
    );
  }
  
  export default App;