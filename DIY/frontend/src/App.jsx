import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Login from './Component/Login'
import Signup from './Component/Signup'
import {SnackbarProvider} from 'notistack'
const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/About" element={<About />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
