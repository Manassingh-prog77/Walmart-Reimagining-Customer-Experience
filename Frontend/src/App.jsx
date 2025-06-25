import { useState } from 'react'
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/common/navbar.jsx';
import Footer from './components/common/footer.jsx';
import Home from './pages/Home.jsx';
import Categories from './components/categories.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Assistant from './components/common/Assistant.jsx';
function App() {

  return (
   <Router>
          <Navbar />
          <Categories/>
          <Box sx={{ minHeight: '100vh'}}>
            <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/cart" element={<Cart />} />
           </Routes>
          </Box> 
          <Assistant/>
          <Footer />
        </Router>
  )
}

export default App
