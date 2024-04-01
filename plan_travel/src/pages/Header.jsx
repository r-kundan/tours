import React from "react";
import "../style/header.css"
import { Link } from "react-router-dom";


export default function Header() {
 

  return (
    <header className="sticky-top  header top-0 ">
     <nav className="navbar  navbar-expand-lg bg-body-light border-bottom sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><i className="fa-solid fa-globe header-icon"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link head-text active" aria-current="page" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active head-text" aria-current="page" to="/tours">Tours</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active head-text" aria-current="page" to="/mytrip">My Trips</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active head-text" aria-current="page" to="/network">Network</Link>
        </li> 
       
      </ul>
      <div className="navbar-nav ms-auto">
     
           <Link className="nav-link" to="/register">Register</Link>
      
          <Link className="nav-link" to="/login">Log in</Link>
          
     
          <Link className="nav-link" to="/logout">Logout</Link>  
     
      

      </div>
    </div>
  </div>
</nav>
    </header>
  );
}

