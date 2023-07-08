import React from 'react'
import './Home.css'
//import bg from "../../images/bg.jpg"
import bg from "../../images/Bghome_board.png"
import Cards from "../Cards/Cards"
import Footer from "../Footer/Footer"
import 'typeface-roboto';
const Home = () => {
  return (
    <div>
    <div className="imageContainer">
        <img src={bg} style={{width:"100vw", opacity:"0.6", position:"relative", height:"80vh", objectFit: "cover"}}></img>
        <div class="caption center">Welcome to JEET. <br/> A Centralised platform by the RKSS NGO to provide Free and Quality Education to Students in need.</div>
        {/* <h3>Are you a Student or a Creator</h3> */}
    </div>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Home