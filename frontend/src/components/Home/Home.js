import React from 'react'
import './Home.css'
import bg from "../../images/bg.jpg"
import Cards from "../Cards/Cards"
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
    <div className="imageContainer">
        <img src={bg} style={{width:"100vw", opacity:"0.5", position:"relative", height:"80vh"}}></img>
        <div class="caption center">Welcome to JEET <br/> A website by RKSS organization to provide free and quality education in a single platform</div>
        {/* <h3>Are you a Student or a Creator</h3> */}
    </div>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Home