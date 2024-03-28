import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light " style={{fontSize:"22px", padding:"10px", color:"black"}}>
    <a className="navbar-brand" href="#">
      <img style={{height:"100px", width:"160px"}} src="https://www.creativefabrica.com/wp-content/uploads/2020/11/06/DIY-logo-stamp-design-isolated-Graphics-6499792-2-580x386.png"></img>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active" style={{marginLeft:"20px"}}>
          <Link className="nav-link" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item" style={{marginLeft:"20px"}}>
          <Link className="nav-link" to="/login">
            login
          </Link>
        </li>
        <li className="nav-item" style={{marginLeft:"20px"}}>
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
        <li className="nav-item" style={{marginLeft:"20px"}}>
          <Link className="nav-link" to="/Signup">
            Signup
          </Link>
        </li>
        <li className="nav-item dropdown" style={{marginLeft:"20px"}}>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar