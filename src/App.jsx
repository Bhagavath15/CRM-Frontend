import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import DashBoard from "./pages/dashboard"
import TicketPage from "./pages/Ticketpage"
import Nav from "./components/nav"

export default function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
      </Routes>
    </div>
  )
}

