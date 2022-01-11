import React from 'react'
import Calculator from './components/Calculator'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="py-3 container">
      <div className="row">
        <Calculator />
      </div>
    </div>
  )
}

export default App
