import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register'
import Home from './Home'

export default function Passwordlogin() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
