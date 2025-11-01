import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ShopMen from './pages/ShopMen';
import ShopWomen from './pages/ShopWomen';
import Community from './pages/Community';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/shop/mens-wear" element={<ShopMen />} />
            <Route path="/shop/womens-wear" element={<ShopWomen />} />
            <Route path="/community" element={<Community />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:productSlug" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollUpButton />
      </div>
    </Router>
  );
}

export default App;

