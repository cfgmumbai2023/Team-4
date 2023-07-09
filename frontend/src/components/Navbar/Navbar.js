import React, { useState } from "react";
import jeetlogo from '../../images/JEETfinalLOGO.webp' 
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import InputType from "./InputType";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Navigation } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [results,setResults]=useState([]);
  const handleSubmit = (e,) => {
    e.preventDefault();
    // Perform search functionality or any other action
    console.log("Search submitted:", search);
    fetchData(search);
  };
  const navigate=useNavigate();
  const fetchData=async(search)=>{
    try{
      console.log("hi",search);
      const resp = await axios.get("http://localhost:5000/jeet/videos/search",{text: search});
      console.log(resp);
      setResults(resp);
      // Navigation.navigate("/results",{results});
    }catch(error){
      console.log("error in fetching serach results",error.message);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={jeetlogo} width="50px" alt="Jeet Logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">About Us</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <InputType
              labelText={"Search"}
              labelFor={"forsearch"}
              inputType={"text"}
              name={"search"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* import React, { useState } from "react";
import jeetlogo from '../../images/JEETfinalLOGO.webp' 
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import InputType from "./InputType";
const [search, setSearch] = useState("");
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={jeetlogo} width="50px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About Us</a>
        </li>
      </ul>
      <form class="d-flex">
      <InputType
                    labelText={"Search"}
                    labelFor={"forsearch"}
                    inputType={"text"}
                    name={"email"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-dark" type="submit" href="/login">Login</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar */