import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
