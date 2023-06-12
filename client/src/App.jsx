import React from 'react'
import { Routes, Route } from "react-router-dom"

import NewSignup from "./pages/NewSignup"
import Login from "./pages/Login"

import PaymentCheckout from "./pages/PaymentCheckout"
import Playground from './pages/Playground'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<NewSignup ></NewSignup>} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Playground" element={<Playground />} />
        <Route path="/PaymentCheckout" element={<PaymentCheckout />} />
      </Routes> 
    </div>
  )
}

export default App