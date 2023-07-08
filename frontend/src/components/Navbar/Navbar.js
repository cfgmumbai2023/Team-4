import React from 'react'
import jeetlogo from '../../images/JEETfinalLOGO.webp' 
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  return (
    <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-lg py-2 sticky-top" style={{backgroundColor:"#c8c49c"}}>
    <a href="/" class="navbar-brand">
    <img src={jeetlogo} width="50px" style={{marginLeft:"20px"}}/></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navLinks"
      aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navLinks">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item example">
          <a href="/" style={{color:"#000"}} class="nav-link">Home</a>
        </li>
        <li class="nav-item example">
          <a href="/about" style={{color:"#000"}} class="nav-link">About us</a>
        </li>
        
      </ul>
      
      <li class="nav-item d-lg-block">
        <a class="btn btn-dark bg btn1 px-4" href="/login" style={{marginLeft:"40px"}} target="_blank" role="button">Login</a>
      </li>
      
    </div>
  </nav>
  )
}

export default Navbar