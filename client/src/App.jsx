import React from 'react'
import { Routes, Route } from "react-router-dom"

import NewSignup from "./pages/NewSignup"
import Login from "./pages/Login"

import PaymentCheckout from "./pages/PaymentCheckout"
import Playground from './pages/Playground'

import AccountManager from './pages/AccountManager'
import Loadingscreen from './pages/Loadingscreen'

import Home from './pages/Home'
import Chat from './pages/Chat'

import Beiträge from './pages/Beiträge'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<NewSignup ></NewSignup>} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Playground" element={<Playground />} />
        <Route path="/PaymentCheckout" element={<PaymentCheckout />} />

        <Route path="/AccountManager" element={<AccountManager />} />
        <Route path="/loading" element={<Loadingscreen />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />

        <Route path="/Posts" element={<Beiträge />} />
      </Routes> 
    </div>
  )
}

export default App