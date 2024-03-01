import React from 'react'
import Navebar from './Component/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Component/About'
import Home from './Component/Home'
import Signup from './Component/Signup'
import './App.css';
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navebar/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App