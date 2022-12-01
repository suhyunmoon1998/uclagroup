import { Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import HomePage from "./pages/home_page/home_page.component";
import ProfilePage from "./pages/profile_page/profile_page.component";
import F_NavBar from "./components/nav_bar/first_nav_bar.component";
import NavBar from "./components/nav_bar/nav_bar.component";
import Register from "./pages/register_page/register_page.component";
import Login from "./pages/sign_in_page/sign_in_page.component";
import "./App.css";
import CartPage from "./pages/cart_page/cart_page.component";
import CheckoutPage from "./pages/checkout_page/checkout_page.component";

function App() {
  
  
  //const [currentForm, setCurrentForm] = useState("login");

//  const toggleForm = (formName) => {
 //   setCurrentForm(formName);
 // };
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<F_NavBar />}>
          <Route path="" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NavBar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
