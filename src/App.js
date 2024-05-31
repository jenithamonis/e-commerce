import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Products/:categoryName" element={<Products />} />
          <Route path="/Products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// App.js
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import './App.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productToRemove) => {
//     setCartItems(cartItems.filter(product => product !== productToRemove));
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <ProductList addToCart={addToCart} />
//         <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//       </div>
//     </div>
//   );
// }

// export default App;