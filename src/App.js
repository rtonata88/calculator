import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Calculator from './components/Calculator'
import Home from './components/Home'
import Quote from './components/Quote'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="py-3 container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  )
}

export default App
