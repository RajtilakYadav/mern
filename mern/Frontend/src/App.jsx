import React from 'react'
import Navebar from './Component/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Component/About'
import Home from './Component/Home'
import Signup from './Component/Signup'
import './App.css';
import EventHandling from './Component/EventHandling'
import Todolist from './Component/Todolist'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navebar/>
        <Routes>
            <Route path="/EventHandling" element={<EventHandling />} />
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/Todolist" element={<Todolist/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App