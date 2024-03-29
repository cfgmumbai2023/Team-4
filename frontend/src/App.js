import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import About from '../src/components/About/About'
import Home from '../src/components/Home/Home'
import Videos from '../src/components/Videos/Videos'
import ContributorForm from '../src/components/ContributorForm/ContributorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/videos" exact element={<Videos/>} />
          <Route path="/upload" exact element={<ContributorForm/>} />
          </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
