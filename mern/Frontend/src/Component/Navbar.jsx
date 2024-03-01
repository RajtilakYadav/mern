import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
    {/* Hello world */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
     Navbar
   </a>
   <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarNavAltMarkup"
     aria-controls="navbarNavAltMarkup"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span className="navbar-toggler-icon" />
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
       <Link className="nav-link active" aria-current="page" to="/Home">
         Home
       </Link>
       {<Link className="nav-link" to="/Signup">
         Signup
       </Link> }
       <Link className="nav-link" to="/about">
         About
       </Link>
       <Link
         className="nav-link disabled"
         to="/Disabled"
         tabIndex={-1}
         aria-disabled="true"
       >
         Disabled
       </Link>
     </div>
   </div>
 </div>
</nav>
 </div>
  )
}

export default Navebar