import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import Cards from '../src/components/Cards/Cards'
import Footer from '../src/components/Footer/Footer'
import Videos from '../src/components/Videos/Videos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Cards/>
      <Footer/>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/videos" exact element={<Videos/>} />
          </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
